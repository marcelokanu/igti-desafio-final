import React, { useState, useMemo, useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { currentMonthYear } from '../../util';

import Select from '../../components/Select';
import Card from '../../components/Card';
import ListTransactions from '../../components/ListTransactions';

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
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const [monthSelected, setMonthSelected] = useState(currentMonthYear);

  const [emptyList, setEmptyList] = useState(false);
  const [loaded, setLoaded] = useState(false);

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

  return (
    <Container>
      <ButtonAdd as={Link} to="transaction/add">
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
            <ListTransactions transactions={filteredTransactions} />
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
    </Container>
  );
}

export default Dashboard;
