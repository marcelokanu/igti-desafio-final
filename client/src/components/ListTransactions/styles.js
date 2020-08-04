import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0 10px;
`;

export const Collection = styled.ul`
  border: 0 !important;
  margin-top: 10px;

  &:hover {
    span {
      transition: 0.3s;
      background: var(--primary);
    }
  }

  @media (max-width: 400px) {
    margin-bottom: 40px;
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
  min-height: 55px;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 6px;
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

    @media (max-width: 400px) {
      margin-left: 0;
    }
  }

  ${(props) =>
    props.transType === '-'
      ? css`
          border-left: 3px solid var(--red-bg);
        `
      : css`
          border-left: 3px solid var(--teal-bg);
        `}

  &:hover, 
  &.active {
    ${(props) =>
      props.transType === '-'
        ? css`
            background-color: var(--red-bg-light);
            i,
            strong {
              color: var(--red-text);
            }

            i {
              opacity: 0.5;
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

  &.active {
    z-index: 0;
    ${(props) =>
      props.transType === '-'
        ? css`
            border-right: 3px solid var(--red-bg);
          `
        : css`
            border-right: 3px solid var(--teal-bg);
            > span {
              color: var(--primary);
            }
          `}
  }
`;

export const BoxActions = styled.div`
  transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;

  > i {
    margin: 0;
  }

  overflow: hidden;

  ${(props) =>
    props.actionVisible === true
      ? 'opacity: 1; width: auto; height: auto;'
      : 'opacity: 0; width: 0; height: 0;'}

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;

    > i {
      display: none;
    }
  }
`;

export const CategoryDescription = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1.1rem;
  margin: 0 10px;

  @media (max-width: 300px) {
    font-size: 1rem;
    margin-right: 5px;
  }

  > strong {
    font-weight: bold;
    color: var(--primary);
    margin-right: 10px;
  }
  > p {
    margin: 0;
    border: 0;
    font-size: 13px;
    color: var(--secondary);
  }
`;

export const Value = styled.div`
  strong {
    font-weight: bold;
    font-family: var(--font-money);
    color: var(--primary);
    @media (max-width: 300px) {
      font-size: 12px;
    }
  }

  margin-left: auto;
  margin-right: 10px;

  overflow: visible;
`;
