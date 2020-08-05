import styled from 'styled-components';

const handleBackColor = (type) => {
  switch (type) {
    case 'receita':
      return 'background: var(--teal-bg-initial-gradient);background: linear-gradient(180deg, var(--teal-bg-initial-gradient) 0%, var(--teal-bg-final-gradient) 100%);';
    case 'despesa':
      return 'background: var(--red-bg-initial-gradient);background: linear-gradient(180deg, var(--red-bg-initial-gradient) 0%, var(--red-bg-final-gradient) 100%);';
    default:
      return 'background: var(--orange-bg-initial-gradient);background: linear-gradient(180deg, var(--orange-bg-initial-gradient) 0%, var(--orange-bg-final-gradient) 100%);';
  }
};

const handleColor = (type) => {
  switch (type) {
    case 'receita':
      return 'var(--teal-bg)';
    case 'despesa':
      return 'var(--red-bg)';
    default:
      return 'var(--orange)';
  }
};

const handleFontColor = (type) => {
  switch (type) {
    case 'receita':
      return 'var(--teal-text)';
    case 'despesa':
      return 'var(--red-text)';
    case 'saldo':
      return 'var(--orange-text)';
    default:
      return 'var(--secondary)';
  }
};

export const CardContainer = styled.div`
  max-width: 1280px;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 3fr));
  grid-column-gap: 20px;
  grid-auto-flow: column;
  justify-content: center;
  flex-shrink: 0;
  white-space: nowrap;

  @media (max-width: 700px) {
    margin: 0;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;
  }
`;

export const Card = styled.div`
  background: ${({ type }) => handleBackColor(type)};
  border-top: ${({ type }) => `5px solid ${handleColor(type)}`};
  padding: 10px 25px;
  border-radius: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ type }) => handleFontColor(type)};
  > h1 {
    font-size: 1.5em;
  }
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > p {
      font-size: 16px;
    }

    > i {
      font-size: 2rem;
      color: ${({ type }) => handleColor(type)};
    }
  }

  @media (max-width: 700px) {
    background: transparent;
    padding: 0;
    margin: 2px;

    color: var(--light-gray);
    border-top: 0;

    border-bottom: ${({ type }) => `3px solid ${handleColor(type)}`};
    border-left: ${({ type }) => `1px solid ${handleColor(type)}`};

    &:first-child {
      border-left: 0;
      border-right: ${({ type }) => `1px solid ${handleColor(type)}`};
    }

    > header {
      > i {
        padding: 3px;
      }
      > p {
        margin-left: 10px;
      }
    }

    > h1 {
      text-align: right;
      margin: 3px;
      font-size: 12px;
    }

    &:last-child {
      border: 0;
      padding: 0;
      grid-column: span 2;

      justify-content: center;
      > h1 {
        text-align: center;
        margin: 0;
        font-size: 18px;
      }

      > header {
        justify-content: center;
        > p {
          font-size: 17px;
          margin: 0;
        }
      }
    }
  }

  @media (max-width: 900px) {
    padding: 10px 10px;
    > header {
      > p {
        font-size: 16px;
      }

      > i {
        padding: 1px;
      }
    }
    > h1 {
      font-size: 15px;
    }
  }
`;
