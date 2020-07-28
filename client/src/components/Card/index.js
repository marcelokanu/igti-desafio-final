import React, { useState, useEffect } from 'react';
import { CardContainer, Card } from './styles';
import { formatMoney, sumValues } from '../../util';

export default function BoxInfos(props) {
  const { data: filteredTransactions } = props;
  const [calcValues, setCalcValues] = useState({
    income: 0,
    outcome: 0,
    saldo: 0,
  });

  useEffect(() => {
    const incomeValues = filteredTransactions.filter(({ type, value }) => {
      return type === '+' && value;
    });

    const outcomeValues = filteredTransactions.filter(({ type }) => {
      return type === '-';
    });

    const income = sumValues(incomeValues);
    const outcome = sumValues(outcomeValues);
    const saldo = income - outcome;

    setCalcValues({ income, outcome, saldo });
  }, [filteredTransactions]);

  return (
    <CardContainer>
      <Card type="receita">
        <header>
          <p>Receitas</p>
          <i className="material-icons">trending_up</i>
        </header>
        <h1>{formatMoney(calcValues.income)}</h1>
      </Card>
      <Card type="despesa">
        <header>
          <p>Despesas</p>
          <i className="material-icons">trending_down</i>
        </header>
        <h1>{formatMoney(calcValues.outcome)}</h1>
      </Card>
      <Card type="saldo" total>
        <header>
          <p>Saldo</p>
          <i className="material-icons">import_export</i>
        </header>
        <h1>{formatMoney(calcValues.saldo)}</h1>
      </Card>
    </CardContainer>
  );
}
