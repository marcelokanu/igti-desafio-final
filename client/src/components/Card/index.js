import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { CardContainer, Card } from './styles';
import { formatMoney, sumValues } from '../../util';

export default function BoxInfos(props) {
  const { data: filteredTransactions } = props;
  const [calcValues, setCalcValues] = useState({
    oldIncome: 0,
    income: 0,
    outcome: 0,
    oldOutcome: 0,
    balance: 0,
    oldbalance: 0,
  });

  useEffect(() => {
    const incomeValues = filteredTransactions.filter(({ type, value }) => {
      return type === '+' && value;
    });

    const outcomeValues = filteredTransactions.filter(({ type }) => {
      return type === '-';
    });
    const oldIncome = calcValues.income;
    const oldOutcome = calcValues.outcome;
    const oldBalance = calcValues.balance;

    const income = sumValues(incomeValues);
    const outcome = sumValues(outcomeValues);
    const balance = income - outcome;

    setCalcValues({
      oldIncome,
      income,
      oldOutcome,
      outcome,
      oldBalance,
      balance,
    });
  }, [filteredTransactions]);

  return (
    <CardContainer>
      <Card type="receita">
        <header>
          <p>Receitas</p>
          <i className="material-icons">trending_up</i>
        </header>
        <h1>
          <CountUp
            preserveValue={true}
            start={calcValues.oldIncome}
            end={calcValues.income}
            duration={1}
            separator="."
            decimals={2}
            decimal=","
            prefix="R$ "
            delay={100}
            useEasing={true}
          />
        </h1>
      </Card>
      <Card type="despesa">
        <header>
          <p>Despesas</p>
          <i className="material-icons">trending_down</i>
        </header>
        <h1>
          <CountUp
            preserveValue={true}
            start={calcValues.oldOutcome}
            end={calcValues.outcome}
            duration={1}
            separator="."
            decimals={2}
            decimal=","
            prefix="R$ "
            useEasing={true}
          />
        </h1>
      </Card>
      <Card type="saldo" total>
        <header>
          <p>Saldo</p>
          <i className="material-icons">import_export</i>
        </header>
        <h1>
          <CountUp
            preserveValue={true}
            start={calcValues.oldBalance}
            end={calcValues.balance}
            duration={1}
            separator="."
            decimals={2}
            decimal=","
            prefix="R$ "
            useEasing={true}
          />
        </h1>
      </Card>
    </CardContainer>
  );
}
