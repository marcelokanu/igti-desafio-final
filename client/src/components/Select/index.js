import React, { useState, useMemo } from 'react';

import api from '../../services/api';

import { Container, BaseContent, SelectStyled } from './styles';

function Select(props) {
  const [monthsSelectData, setMonthsSelectData] = useState([]);

  useMemo(() => {
    async function loadYearMonths() {
      api.get(`transaction/months`).then((response) => {
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
          (month, index) => index === findDate + 1
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
      <i className="material-icons" onClick={handleNavigate} id="prev">
        chevron_left
      </i>
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
      <i className="material-icons" onClick={handleNavigate} id="next">
        chevron_right
      </i>
    </Container>
  );
}

export default Select;
