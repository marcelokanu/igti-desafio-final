import React, { useState } from 'react';

import { groupArray } from '../../util';

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
import { useEffect } from 'react';

function ListTransactions({
  transactions,
  handleDeleteTransaction,
  handleEditTransaction,
}) {
  const [openOption, setOpenOption] = useState({ id: '', visible: false });

  const [transactionsGroupByDay, setTransactionsGroupByDay] = useState({});

  useEffect(() => {
    const transactionsGroupedByDay = groupArray(transactions, 'yearMonthDay');
    setTransactionsGroupByDay(transactionsGroupedByDay);
  }, [transactions]);

  function toggleOption(id) {
    if (openOption.id === id && openOption.visible === true) {
      setOpenOption({ id: '', visible: false });
    } else {
      setOpenOption({ id, visible: !openOption.visible });
    }
  }

  function setDeleteTransaction(id) {
    handleDeleteTransaction(id);
  }

  function setEditingTransaction(transaction) {
    handleEditTransaction(transaction);
  }

  return (
    <Container>
      {Object.entries(transactionsGroupByDay).map((object) => {
        const day = object[0];
        const arrayTransactions = object[1];
        return (
          <Collection className="collection with-header" key={day}>
            <DayMonth>{parseAndFormatDate(day, 'dd/MM')}</DayMonth>
            {arrayTransactions.map((transaction) => {
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
                      onClick={() => setEditingTransaction(transaction)}
                      color="var(--purple-btn)"
                      hovercolor="var(--purple-hover)"
                      textcolor="var(--white)"
                      hovertextcolor="var(--light-gray)"
                    >
                      <i className="material-icons" alt="editar">
                        edit
                      </i>
                    </Button>
                    <Button
                      color="var(--red-btn)"
                      hovercolor="var(--red-bg)"
                      textcolor="var(--white)"
                      hovertextcolor="var(--light-gray)"
                      onClick={() =>
                        window.confirm(
                          `Apagar transação ${transaction._id}?`
                        ) && setDeleteTransaction(transaction._id)
                      }
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
