import React, { useState } from 'react';

import { formatMoney, parseAndFormatDate, findIcon } from '../../util';
import {
  Container,
  Collection,
  DayMonth,
  ListTransaction,
  CategoryDescription,
  Value,
  BoxActions,
} from './styles';

import Button from '../Button';

function ListTransactions({ transactionsGroupByDay }) {
  const [openOption, setOpenOption] = useState({ id: '', visible: false });

  function toggleOption(id) {
    if (openOption.id === id && openOption.visible === true) {
      setOpenOption({ id: '', visible: false });
    } else {
      setOpenOption({ id, visible: !openOption.visible });
    }
  }

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
                  className={transaction._id === openOption.id ? 'active' : ''}
                  key={transaction._id}
                  transType={transaction.type}
                  onClick={() => toggleOption(transaction._id)}
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
                  <BoxActions
                    actionVisible={
                      transaction._id === openOption.id ? true : false
                    }
                  >
                    <i className="material-icons">keyboard_arrow_right</i>
                    <Button
                      color="var(--purple-btn)"
                      hovercolor="var(--purple-hover)"
                      onClick={() => alert('editar')}
                    >
                      <i className="material-icons" alt="editar">
                        edit
                      </i>
                    </Button>
                    <Button
                      color="var(--red-btn)"
                      hovercolor="var(--red-text)"
                      onClick={() => alert('excluir')}
                    >
                      <i className="material-icons" alt="excluir">
                        delete
                      </i>
                    </Button>
                  </BoxActions>
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
