import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { CardContainer, Card } from './styles';
import { sumValues } from '../../util';

export default function BoxInfos(props) {
  const { data: filteredTransactions } = props;
  const [oldValues, setOldValues] = useState({
    oldIncome: 0,
    oldOutcome: 0,
    oldbalance: 0,
  });
  const [calcValues, setCalcValues] = useState({
    income: 0,
    outcome: 0,

    balance: 0,
  });

  useEffect(() => {
    setOldValues([calcValues.income, calcValues.outcome, calcValues.balance]);
  }, [calcValues]);

  useEffect(() => {
    const incomeValues = filteredTransactions.filter(({ type, value }) => {
      return type === '+' && value;
    });

    const outcomeValues = filteredTransactions.filter(({ type }) => {
      return type === '-';
    });

    const income = sumValues(incomeValues);
    const outcome = sumValues(outcomeValues);
    const balance = income - outcome;

    setCalcValues({
      income,
      outcome,
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
            start={oldValues.oldIncome}
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
            start={oldValues.oldOutcome}
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
            start={oldValues.oldBalance}
            end={calcValues.balance}
            duration={1}
            separator="."
            redraw={false}
            decimals={2}
            decimal=","
            prefix="R$ "
            useEasing={false}
          />
        </h1>
      </Card>
    </CardContainer>
  );
}
