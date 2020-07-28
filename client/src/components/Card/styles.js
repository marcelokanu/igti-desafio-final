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

  @media (max-width: 700px) {
    margin-top: 0;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Card = styled.div`
  ${({ type }) => handleBackColor(type)};
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
    overflow-wrap: break-word;
    margin: 0;
    font-size: 26px;
    font-weight: normal;
  }

  @media (max-width: 900px) {
    padding: 10px;
    border-top: ${({ type }) => `5px solid ${handleColor(type)}`};

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
    align-items: center;
    justify-content: center;
    background: transparent;
    color: white;
    border-top: 0;
    border-bottom: ${({ type }) => `5px solid ${handleColor(type)}`};
    margin-bottom: 10px;

    > h1 {
      margin-top: 5px;
    }
  }
`;
