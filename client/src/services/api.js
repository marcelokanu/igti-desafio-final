import http from '../http-common';

const findByPeriod = (period) => {
  return http.get(`api/transaction?period=${period}`);
};

const loadYearMonths = () => {
  return http.get('api/transaction/months');
};

const updateTransaction = (id, data) => {
  return http.patch('api/transaction/update/:id');
};

const deleteTransaction = (id) => {
  return http.delete(`api/transaction/delete/${id}`);
};

export default {
  findByPeriod,
  loadYearMonths,
  updateTransaction,
  deleteTransaction,
};

// transactionRouter.get('/api/transaction', findByPeriod);

// transactionRouter.get('/api/transaction/months', loadYearMonths);

// transactionRouter.get('/api/transaction/categories', loadCategories);

// transactionRouter.post('/api/transaction/create', createTransaction);

// transactionRouter.patch('/api/transaction/update/:id', updateTransaction);

// transactionRouter.get('/api/transaction/reset/:type', importJson);
