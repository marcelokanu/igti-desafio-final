import styled from 'styled-components';

export const Container = styled.div`
  background: var(--bg);
`;

export const ButtonAdd = styled.a`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background: var(--teal-btn);
  border-radius: 5px;
  border: 0;
  text-align: center;
  transition: 0.3s;
  box-sizing: border-box;
  font-weight: bold;

  &:hover {
    background: var(--teal-hover);
  }

  @media (max-width: 700px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--purple-bg);
    border-radius: 0;
    border: 0;
    font-size: 0.9rem;
    text-align: center;
    opacity: 0.8;
    box-sizing: border-box;

    > i {
      display: none;
    }
  }
`;

export const WrapperMenu = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 10px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    padding: 0;

    img {
      width: 50px;
    }
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1``;

export const Header = styled.header`
  text-align: center;
  border-radius: 0 0 4px 4px;
  height: 180px;

  background: var(--purple-bg);

  @media (max-width: 700px) {
    img {
      display: none;
    }
  }
`;

export const BoxSearch = styled.div`
  margin: 20px 10px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    margin: 5px 10px;
  }
`;

export const Lancamentos = styled.span`
  color: var(--white);
  margin-left: auto;
  background: var(--purple-hover);
  padding: 0.25em 0.6em;
  border-radius: 5px 5px 0 0;
  text-align: center;
  flex-shrink: 0;
  font-size: 0.9rem;

  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  border: none;
  border-top: 1px solid var(--purple-hover);
  box-sizing: border-box;
  background: transparent;
  border-radius: 5px 0 5px 5px;
  width: 100%;
  height: 50px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    border: 1px solid var(--purple-hover) !important;
    border-left: 3px solid var(--purple-hover) !important;
    border-right: 3px solid var(--purple-hover) !important;
    background: #ffffff;
  }
`;
