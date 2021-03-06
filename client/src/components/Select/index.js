import React, { useState, useMemo } from 'react';
import { PropagateLoader } from 'react-spinners';

import api from '../../services/api';

import { Container, BaseContent, SelectStyled, Icon } from './styles';

function Select(props) {
  const [monthsSelectData, setMonthsSelectData] = useState([]);

  useMemo(() => {
    async function loadYearMonths() {
      api.loadYearMonths().then((response) => {
        setMonthsSelectData(response.data);
      });
    }
    loadYearMonths();
  }, []);

  const handleChangeMonth = (event) => {
    props.onChange(event.target.value);
  };
  const handleNavigate = (event) => {
    const id = event.target.id;
    const findDate = monthsSelectData.findIndex(
      (month) => month.month === props.value
    );
    switch (id) {
      case 'next':
        const nextMonth = monthsSelectData.find(
          (_, index) => index === findDate + 1
        );
        if (nextMonth) {
          props.onChange(nextMonth.month);
        }
        break;
      case 'prev':
        const prevMonth = monthsSelectData.find(
          (_, index) => index === findDate - 1
        );
        if (prevMonth) {
          props.onChange(prevMonth.month);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      {monthsSelectData.length === 0 ? (
        <PropagateLoader color={'var(--purple-bg)'} />
      ) : (
        <>
          <Icon
            className="material-icons"
            onClick={handleNavigate}
            side="left"
            id="prev"
          >
            chevron_left
          </Icon>

          <BaseContent>
            <SelectStyled value={props.value} onChange={handleChangeMonth}>
              {monthsSelectData.map(({ month, formattedMonth }) => {
                return (
                  <option key={month} value={month}>
                    {formattedMonth}
                  </option>
                );
              })}
            </SelectStyled>
          </BaseContent>
          <Icon
            className="material-icons"
            onClick={handleNavigate}
            id="next"
            side="right"
          >
            chevron_right
          </Icon>
        </>
      )}
    </Container>
  );
}

export default Select;
