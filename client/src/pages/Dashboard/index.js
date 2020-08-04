import React, { useState, useMemo, useEffect } from 'react';

import { BarLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StickyBox from 'react-sticky-box';

import api from '../../services/api';
import { currentMonthYear } from '../../util';

import Select from '../../components/Select';
import Card from '../../components/Card';
import ListTransactions from '../../components/ListTransactions';
import AddTransaction from '../AddTransaction';
import EditTransaction from '../EditTransaction';

import {
  Container,
  Menu,
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

  const toastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

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
      toast.success(`${typeToast} salva com sucesso.`, toastOptions);
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
    toast.warning(
      `Transação ${editingTransaction._id} excluída com sucesso.`,
      toastOptions
    );
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
      toast.success(`${typeToast} salva com sucesso.`, toastOptions);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <ToastContainer />

      <Menu>
        <Wrapper>
          <h1>
            <i className="material-icons">attach_money</i>bios_money
          </h1>
        </Wrapper>
      </Menu>
      <StickyBox offsetBottom={20}>
        <Header>
          <ButtonAdd onClick={toggleModal}>
            <i className="material-icons">add</i>
          </ButtonAdd>
          <Select value={monthSelected} onChange={handleChangeMonth} />
          <Card data={filteredTransactions} />
        </Header>
      </StickyBox>
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
