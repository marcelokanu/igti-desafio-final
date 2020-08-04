import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div``;

export const ButtonClose = styled.a`
  > i {
    position: absolute;
    cursor: pointer;
    right: 0;
    top: 0;
    color: var(--white);
    font-size: 30px;
    background-color: var(--red-btn);
    &:hover {
      background-color: var(--red-bg);
    }
  }
`;

export const Form = styled(Unform)`
  margin: 0 !important;
  background: var(--bg);

  padding: 2rem;

  @media (max-width: 400px) {
    padding: 0.5rem;
  }
  box-sizing: border-box;

  button {
    margin-top: 10px;
    width: 100%;
    background: var(--purple-btn);
    color: white;
    border-radius: 5px;
    height: 40px;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    border: 1px solid var(--bg);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: var(--purple-hover);
    }
  }
`;

export const Row = styled.div`
  &:first-child {
    margin: 5px 20px 20px;
  }
  margin: 10px;
`;

export const Label = styled.label`
  color: var(--white);

  background: var(--purple-hover);
  padding: 0.25em 0.6em;
  border-radius: 5px 5px 0 0;
  text-align: center;

  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;
