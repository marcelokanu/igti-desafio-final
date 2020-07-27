const mongoose = require('mongoose');
const { parse, getDate, getMonth, getYear, format } = require('date-fns');

const fs = require('fs').promises;
const path = require('path');

const ObjectId = mongoose.Types.ObjectId;

const TransactionModel = require('../models/TransactionModel');
const { ptBR } = require('date-fns/locale');

const deleteTransaction = async (req, res) => {
  const _id = req.params.id;

  if (!_id) {
    return res.status(404).json({
      error: `O parametro ID é obrigátório para exclusão`,
    });
  }

  const findTransaction = await TransactionModel.findOne({ _id });

  if (!findTransaction) {
    return res.status(404).json({
      error: `O ID ${_id} não foi encontrado na base de dados`,
    });
  }

  await TransactionModel.deleteOne({ _id }, (err, _) => {
    if (err) {
      return res.status(500).json({
        err,
      });
    }

    return res.status(202).json({
      result: `Transação ${_id} excluída com sucesso.`,
    });
  });
};

const updateTransaction = async (req, res) => {
  const _id = req.params.id;
  const { description, value, category, yearMonthDay } = req.body;

  if (!_id) {
    return res.status(404).json({
      error: `O parametro ID é obrigátório para edição`,
    });
  }
  if (!description || !value || !category || !yearMonthDay) {
    return res.status(404).json({
      error:
        'description, value, category e yearMonthDay são campos obrigatórios',
    });
  }

  const findTransaction = await TransactionModel.findOne({ _id });
  if (!findTransaction) {
    return res.status(404).json({
      error: `O ID ${_id} não foi encontrado na base de dados`,
    });
  }
  try {
    const dateParsed = parse(yearMonthDay, 'yyyy-MM-dd', new Date());

    const day = getDate(dateParsed);
    const month = getMonth(dateParsed) + 1;
    const year = getYear(dateParsed);

    const accountUpdated = await TransactionModel.findOneAndUpdate(
      { _id },
      {
        description,
        value,
        category,
        year,
        month,
        day,
        yearMonth: format(dateParsed, 'yyyy-MM'),
        yearMonthDay: format(dateParsed, 'yyyy-MM-dd'),
      },
      { new: true, useFindAndModify: false }
    );
    return res.status(202).json({
      accountUpdated,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const findByPeriod = async (req, res) => {
  const period = req.query.period;
  const condition = period ? { yearMonth: period } : {};

  const transactions = await TransactionModel.find(
    condition,
    (err, transactions) => {
      if (err) {
        return res.status(500).json(err);
      }
      return transactions;
    }
  ).sort('day');

  return res.status(202).json({
    length: transactions.length,
    transactions,
  });
};

const createTransaction = async (req, res) => {
  const { description, value, category, yearMonthDay, type } = req.body;

  if (!description || !value || !category || !yearMonthDay || !type) {
    return res.status(404).json({
      error:
        'description, value, category, yearMonthDay e type são campos obrigatórios',
    });
  }

  const dateParsed = parse(yearMonthDay, 'yyyy-MM-dd', new Date());

  const day = getDate(dateParsed);
  const month = getMonth(dateParsed) + 1;
  const year = getYear(dateParsed);

  await TransactionModel.create(
    {
      description,
      value,
      category,
      year,
      month,
      day,
      yearMonth: format(dateParsed, 'yyyy-MM'),
      yearMonthDay: format(dateParsed, 'yyyy-MM-dd'),
      type,
    },
    (err, transaction) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(202).json(transaction);
    }
  );
};

const loadYearMonths = async (_, res) => {
  const months = await TransactionModel.distinct('yearMonth');

  const monthYearIndex = months.map((month) => {
    return {
      formattedMonth: format(parse(month, 'yyyy-MM', new Date()), 'MMM/yyyy', {
        locale: ptBR,
      }),
      month,
    };
  });

  return res.status(202).json(monthYearIndex);
};

const loadCategories = async (_, res) => {
  const categories = await TransactionModel.distinct('category');

  const categoriesIndex = categories.map((category, index) => {
    return { id: index, category };
  });

  return res.status(202).json(categoriesIndex);
};

const importJson = async (req, res) => {
  const transactionsFile = path.resolve(
    path.resolve(),
    'database',
    'transactionsArray.json'
  );
  const typeImport = req.params.type;

  const transactionsRead = await fs.readFile(transactionsFile);
  const transactionsJson = JSON.parse(transactionsRead);

  switch (typeImport) {
    case 'default':
      const deletedCount = await TransactionModel.deleteMany();
      await TransactionModel.insertMany(
        transactionsJson,
        (err, transactions) => {
          if (err) {
            res.status(404).json(err);
          }
          return res.status(202).json({
            deleted: `${deletedCount.deletedCount} transacṍes excluidas`,
            imported: `${transactionsJson.length} transacṍes importadas`,
            transactions: transactions,
          });
        }
      );
      break;
    case 'update':
      const deletedTransactions = await TransactionModel.deleteMany();
      const transactionsUpdated = transactionsJson.map((transaction) => {
        return {
          ...transaction,
          type:
            transaction.category === 'Receita'
              ? (transaction.type = '+')
              : transaction.type,
        };
      });
      await TransactionModel.insertMany(
        transactionsUpdated,
        (err, transactions) => {
          if (err) {
            res.status(404).json(err);
          }
          return res.status(202).json({
            deleted: `${deletedTransactions.deletedCount} transacṍes excluidas`,
            imported: `${transactionsUpdated.length} transacṍes importadas`,
            transactions: transactions,
          });
        }
      );
      break;
    default:
      return res.status(404).json({ result: 'Tipo desconhecido' });
  }
};

module.exports = {
  findByPeriod,
  loadYearMonths,
  loadCategories,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  importJson,
};
