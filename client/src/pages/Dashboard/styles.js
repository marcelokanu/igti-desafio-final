import styled from 'styled-components';

export const Container = styled.div`
  background: var(--bg);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.header`
  background: var(--header-bg-initial-gradient);
  text-align: center;
  background: -moz-linear-gradient(
    0deg,
    var(--header-bg-initial-gradient) 0%,
    var(--header-bg-final-gradient) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    var(--header-bg-initial-gradient) 0%,
    var(--header-bg-final-gradient) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(131, 74, 200, 1) 0%,
    rgba(41, 19, 68, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#834ac8",endColorstr="#291344",GradientType=1);

  @media (min-width: 700px) {
    height: 200px;
  }

  > h1 {
    font-size: 1.5rem;
    color: var(--white);
    padding: 10px 0;

    @media (max-width: 440px) {
      font-size: 1rem;
    }
  }
`;

export const BoxSearch = styled.div`
  margin: 20px 10px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Lancamentos = styled.span`
  color: var(--white);
  margin-left: auto;
  background: var(--purple-bg);
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
  border-top: 1px solid var(--purple-bg);
  padding: 5px !important;
  background: transparent;
  border-radius: 5px 0 5px 5px;
  width: 100%;
  height: 40px;
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
    border: 1px solid var(--purple-bg) !important;
    border-left: 3px solid var(--purple-bg) !important;
    background: #ffffff;
  }
`;

export const ButtonAdd = styled.a`
  opacity: 0.8;
  position: fixed;
  border: none !important;
  right: 10px;
  bottom: 10px;
  padding: 15px;
  margin-bottom: 0;
  z-index: 997;

  i {
    border: none;
    display: inline-block;
    color: #fff;
    background-color: #4a148c;
    position: relative;
    overflow: hidden;
    z-index: 1;
    width: 40px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    border-radius: 50%;
    transition: background-color 0.3s;
    cursor: pointer;
    vertical-align: middle;
    text-align: center;
    color: #fff;
  }

  i:hover {
    background: #662bad;
  }
`;
