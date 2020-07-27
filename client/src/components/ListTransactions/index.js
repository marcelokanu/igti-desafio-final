import React from 'react';

import { formatMoney, parseAndFormatDate, findIcon } from '../../util';
import {
  Container,
  Collection,
  DayMonth,
  ListTransaction,
  CategoryDescription,
  Value,
} from './styles';

function ListTransactions({ transactionsGroupByDay }) {
  return (
    <Container>
      {Object.entries(transactionsGroupByDay).map((d) => {
        const day = d[0];
        const arrTransaction = d[1];
        return (
          <Collection className="collection with-header" key={day}>
            <DayMonth>{parseAndFormatDate(day, 'dd/MM')}</DayMonth>

            {arrTransaction.map((transaction) => {
              return (
                <ListTransaction
                  key={transaction._id}
                  transType={transaction.type}
                >
                  <i className="material-icons">
                    {findIcon(transaction.category)}
                  </i>
                  <CategoryDescription>
                    <strong>{transaction.category}</strong>
                    <p> {transaction.description}</p>
                  </CategoryDescription>

                  <Value transType={transaction.type}>
                    <strong>{formatMoney(transaction.value)}</strong>
                  </Value>
                </ListTransaction>
              );
            })}
          </Collection>
        );
      })}
    </Container>
  );
}

export default ListTransactions;
