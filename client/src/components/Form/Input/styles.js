import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  > input {
    border: none;
    width: 100%;
    background: var(--white);
    box-sizing: border-box;

    border-radius: 0 5px 5px 5px;
    border-left: 3px solid var(--purple-hover) !important;
    height: 50px;
    font-size: 1rem;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;

    @media (max-width: 300px) {
      height: 40px;
    }

    &::placeholder {
      color: var(--primary);
    }
    &:focus {
      border: 1px solid var(--purple-hover) !important;
      border-left: 3px solid var(--purple-hover) !important;
      border-right: 3px solid var(--purple-hover) !important;
    }
  }
  > span {
    color: var(--white);

    background: var(--red-bg);
    padding: 0 5px;
    border-radius: 0 5px 0 5px;
    text-align: center;

    position: absolute;
    opacity: 0.6;
    right: 0;
    top: 0;
  }
`;
