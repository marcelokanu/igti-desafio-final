import React, { useState, useMemo, useEffect } from 'react';
import { BarLoader } from 'react-spinners';

import api from '../../services/api';
import { currentMonthYear, groupArray } from '../../util';

import Select from '../../components/Select';
import ListTransactions from '../../components/ListTransactions';

import { Container, Wrapper, Header } from './styles';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [transactionsGroupByDay, setTransactionsGroupByDay] = useState({});

  const [monthSelected, setMonthSelected] = useState(currentMonthYear);

  useMemo(() => {
    async function loadTransactions() {
      api.get(`transaction?period=${monthSelected}`).then((response) => {
        setTransactions(response.data.transactions);
      });
    }
    loadTransactions();
  }, [monthSelected]);

  useEffect(() => {
    setTransactionsGroupByDay(groupArray(transactions, 'yearMonthDay'));
  }, [transactions]);

  function handleChangeMonth(selectedValue) {
    setMonthSelected(selectedValue);
  }

  return (
    <Container>
      <Header>
        <h1>Desafio Final do Bootcamp Full Stack</h1>
        <Select value={monthSelected} onChange={handleChangeMonth} />
      </Header>
      <BarLoader width={'100%'} color={'var(--orange)'} />
      <Wrapper>
        <ListTransactions transactionsGroupByDay={transactionsGroupByDay} />
      </Wrapper>
    </Container>
  );
}

export default Dashboard;
