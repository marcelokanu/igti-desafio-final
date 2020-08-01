import http from '../http-common';

const findByPeriod = (period) => {
  return http.get(`api/transaction?period=${period}`);
};

const loadYearMonths = () => {
  return http.get('api/transaction/months');
};

const createTransaction = (data) => {
  return http.post('api/transaction/create', data);
};

const updateTransaction = (id, data) => {
  return http.patch(`api/transaction/update/${id}`, data);
};

const deleteTransaction = (id) => {
  return http.delete(`api/transaction/delete/${id}`);
};

export default {
  findByPeriod,
  loadYearMonths,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};

// transactionRouter.get('/api/transaction/categories', loadCategories);

// transactionRouter.patch('/api/transaction/update/:id', updateTransaction);
