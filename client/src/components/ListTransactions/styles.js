import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Collection = styled.ul`
  border: 0 !important;
  margin-top: 10px;

  &:hover {
    span {
      transition: 0.3s;
      background: var(--primary);
    }
  }
`;

export const DayMonth = styled.span`
  margin: 5px 5px 0 5px;
  border-radius: 5px 5px 0 0;
  padding: 3px 3px 0 3px;
  background: var(--secondary);
  color: var(--white);
`;

export const ListTransaction = styled.li`
  display: flex;
  flex-wrap: wrap;
  min-height: 65px;
  border-radius: 5px;
  align-items: center;
  margin: 0 0 5px 0;
  background-color: var(--white);
  padding: 5px;
  border-bottom: 1px solid var(--light-gray);
  cursor: pointer;
  transition: 0.3s;

  color: var(--primary);
  i {
    margin-left: 10px;
    transition: 0.3s;
    color: var(--secondary);
  }

  ${(props) =>
    props.transType === '-'
      ? css`
          border-left: 3px solid var(--red-bg);
        `
      : css`
          border-left: 3px solid var(--teal-bg);
        `}

  &:hover {
    ${(props) =>
      props.transType === '-'
        ? css`
            background-color: var(--red-bg-light);
            i,
            strong {
              color: var(--red-text);
            }

            i {
              opacity: 0.3;
            }
          `
        : css`
            background-color: var(--teal-bg-light);
            i,
            strong {
              color: var(--teal-text);
            }

            i {
              opacity: 0.3;
            }
          `}
  }
`;

export const CategoryDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1.1rem;
  margin: 0 10px;

  > strong {
    font-weight: bold;
    color: var(--primary);
    margin-right: 10px;

    @media (max-width: 300px) {
      font-size: 1rem;
    }
  }
  > p {
    margin: 0;
    border: 0;
    font-size: 13px;
    color: var(--secondary);

    @media (max-width: 300px) {
      font-size: 12px;
    }
  }
`;

export const Value = styled.div`
  strong {
    font-weight: bold;
    font-family: Consolas, monospace;
    color: var(--primary);
    @media (max-width: 300px) {
      font-size: 12px;
    }
  }

  margin-left: auto;
  margin-right: 10px;

  overflow: visible;
`;
