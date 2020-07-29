import styled from 'styled-components';

export const DefaultButton = styled.button`
  margin: 2px;

  color: var(--white);

  transition: 0.3s;

  > i {
    background-color: ${({ color }) => color};
    padding: 3px;

    margin: 0;
    color: var(--white) !important;
    opacity: 1 !important;

    border-radius: 5px;

    &:hover {
      background-color: ${({ hovercolor }) => hovercolor};
    }
    @media (max-width: 400px) {
      padding: 5px 15px;
    }
  }
`;
