const express = require('express');
const transactionRouter = express.Router();
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

transactionRouter.get('/api/transaction', findByPeriod);

transactionRouter.get('/api/transaction/months', loadYearMonths);

transactionRouter.get('/api/transaction/categories', loadCategories);

transactionRouter.post('/api/transaction/create', createTransaction);

transactionRouter.patch('/api/transaction/update/:id', updateTransaction);

transactionRouter.delete('/api/transaction/delete/:id', deleteTransaction);

transactionRouter.get('/api/transaction/reset/:type', importJson);

module.exports = transactionRouter;
