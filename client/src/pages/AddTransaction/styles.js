import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div``;

export const ButtonClose = styled.a`
  > i {
    position: absolute;
    right: 2px;
    top: 2px;
    color: var(--white);
    border-radius: 4px;
    padding: 5px;
    background-color: var(--red-bg);
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 18px;
  color: var(--white);
  background: var(--purple-bg);
`;

export const Form = styled(Unform)`
  margin: 0 !important;
  background: var(--light-gray);

  padding: 4rem;

  @media (max-width: 400px) {
    padding: 0.5rem;
  }
  box-sizing: border-box;

  button {
    margin-top: 10px;
    width: 100%;
    background: #4a148c;
    color: white;
    border-radius: 5px;
    height: 40px;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    border: 1px solid var(--light-gray);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: #662bad;
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
  padding: 1px 10px 0;
  border-radius: 5px 5px 0 0;
  text-align: center;

  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;
