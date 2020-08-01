import React, { useState, useMemo, useEffect } from 'react';

import { BarLoader } from 'react-spinners';
import { useToasts } from 'react-toast-notifications';

import api from '../../services/api';
import { currentMonthYear } from '../../util';

import Select from '../../components/Select';
import Card from '../../components/Card';
import ListTransactions from '../../components/ListTransactions';
import AddTransaction from '../AddTransaction';
import EditTransaction from '../EditTransaction';

import {
  Container,
  Wrapper,
  Header,
  BoxSearch,
  Input,
  Lancamentos,
  ButtonAdd,
} from './styles';

function Dashboard() {
  const [monthSelected, setMonthSelected] = useState(currentMonthYear);

  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const [emptyList, setEmptyList] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [editingTransaction, setEditingTransaction] = useState({});

  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const { addToast } = useToasts();

  useMemo(() => {
    async function loadTransactions() {
      api.findByPeriod(monthSelected).then((response) => {
        setTransactions(response.data.transactions);
      });
    }
    loadTransactions();
  }, [monthSelected]);

  useEffect(() => {
    async function loadStates() {
      setFilteredTransactions(transactions);
      setEmptyList(false);
    }
    loadStates();
    setLoaded(true);
  }, [transactions]);

  function handleChangeMonth(selectedValue) {
    setLoaded(false);
    setMonthSelected(selectedValue);
  }

  const handleInputChange = (event) => {
    const valueNormalized = event.target.value
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const transactionsFiltered = transactions.filter(
      (transaction) =>
        transaction.description
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(valueNormalized) ||
        transaction.category
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(valueNormalized)
    );
    setFilteredTransactions(transactionsFiltered);
    transactionsFiltered.length === 0
      ? setEmptyList(true)
      : setEmptyList(false);
  };

  function toggleModal() {
    setEditModalOpen(false);
    setModalOpen(!modalOpen);
  }

  function toggleEditModal() {
    setModalOpen(false);
    setEditModalOpen(!editModalOpen);
  }

  const handleAddTransaction = async (transaction) => {
    try {
      const { type, category, description, yearMonthDay, value } = transaction;
      const response = await api.createTransaction({
        type,
        category,
        description,
        yearMonthDay,
        value: Number(value),
      });

      setTransactions([...transactions, response.data]);

      const typeToast = transaction.type[0] === '+' ? 'Receita' : 'Despesa';
      addToast(`${typeToast} salva com sucesso`, {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTransaction = async (id) => {
    await api.deleteTransaction(id);

    const transactionToDelete = transactions.filter(
      (transaction) => transaction._id !== id
    );

    setTransactions(transactionToDelete);

    addToast(`Transação ${editingTransaction._id} excluida com sucesso`, {
      appearance: 'warning',
      autoDismiss: true,
    });
  };

  function handleEditTransaction(transaction) {
    setEditingTransaction(transaction);
    toggleEditModal();
  }

  async function handleUpdateTransaction(transaction) {
    try {
      const transactionToUpdate = transactions.map((transactionUp) =>
        transactionUp._id !== editingTransaction._id
          ? transactionUp
          : {
              _id: editingTransaction._id,
              day: editingTransaction.day,
              month: editingTransaction.month,
              year: editingTransaction.year,
              yearMonth: editingTransaction.yearMonth,
              ...transaction,
            }
      );

      await api.updateTransaction(editingTransaction._id, {
        _id: editingTransaction._id,
        ...transaction,
      });

      setTransactions(transactionToUpdate);

      const typeToast = transaction.type === '+' ? 'Receita' : 'Despesa';
      addToast(`${typeToast} salva com sucesso`, {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <ButtonAdd onClick={toggleModal}>
        <i className="material-icons">add</i>
      </ButtonAdd>
      <Header>
        <h1>Desafio Final do Bootcamp Full Stack</h1>
        <Select value={monthSelected} onChange={handleChangeMonth} />
        <Card data={filteredTransactions} />
      </Header>

      {loaded ? (
        <Wrapper>
          <BoxSearch>
            <Lancamentos>
              {filteredTransactions.length > 1
                ? `${filteredTransactions.length} transações`
                : `${filteredTransactions.length} transação`}
            </Lancamentos>
            <Input
              type="text"
              onChange={handleInputChange}
              placeholder="Buscar"
            />
          </BoxSearch>
          {!emptyList ? (
            <ListTransactions
              transactions={filteredTransactions}
              handleDeleteTransaction={handleDeleteTransaction}
              handleEditTransaction={handleEditTransaction}
            />
          ) : (
            <div
              style={{
                color: 'var(--red-text)',
                marginLeft: '12px',
                marginTop: '20px',
              }}
            >
              Nenhuma transação encontrada para o termo buscado.
            </div>
          )}
        </Wrapper>
      ) : (
        <BarLoader width={'100%'} color={'var(--orange)'} />
      )}
      <AddTransaction
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddTransaction={handleAddTransaction}
      />
      <EditTransaction
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingTransaction={editingTransaction}
        handleEditTransaction={handleEditTransaction}
        handleUpdateTransaction={handleUpdateTransaction}
      />
    </Container>
  );
}

export default Dashboard;
