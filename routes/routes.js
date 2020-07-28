const express = require('express');
const transactionRouter = express.Router();
const { parse, getDate, getMonth, getYear, format } = require('date-fns');
const TransactionModel = require('../models/TransactionModel');
const {
  findByPeriod,
  loadYearMonths,
  loadCategories,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  importJson,
} = require('../services/transactionService.js');

const { ptBR } = require('date-fns/locale');
transactionRouter.get('/api/transaction', findByPeriod);

transactionRouter.get('/api/transaction/months', loadYearMonths);

transactionRouter.get('/api/transaction/categories', loadCategories);

transactionRouter.post('/api/transaction/create', createTransaction);

transactionRouter.patch('/api/transaction/update/:id', updateTransaction);

transactionRouter.delete('/api/transaction/delete/:id', deleteTransaction);

transactionRouter.get('/api/transaction/reset/:type', importJson);

module.exports = transactionRouter;
