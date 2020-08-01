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
  min-height: 50%;
  max-width: 1280px;
  text-align: left;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-column-gap: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 700px) {
    margin: 5px 10px 5px;
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background: ${({ type }) => handleBackColor(type)};
  border-top: ${({ type }) => `5px solid ${handleColor(type)}`};
  padding: 10px 25px;
  border-radius: 5px;
  color: ${({ type }) => handleFontColor(type)};
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
  > h1 {
    margin: 0;
    font-size: 26px;
    font-weight: normal;
  }

  @media (max-width: 900px) {
    padding: 10px;

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

  @media (max-width: 700px) {
    background: transparent;
    padding: 0;
    margin: 2px;

    color: var(--white);
    border-top: 0;
    border-bottom: ${({ type }) => `1px solid ${handleColor(type)}`};
    border-left: ${({ type }) => `3px solid ${handleColor(type)}`};

    > header {
      > i {
        padding: 3px;
      }
      > p {
        font-size: 14px;
        margin-left: 10px;
      }
    }

    > h1 {
      text-align: right;
      margin: 3px;
    }
  }

  &:last-child {
    margin-bottom: 5px;
  }
`;
