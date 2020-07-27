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
  background: rgb(131, 74, 200);
  text-align: center;
  background: -moz-linear-gradient(
    0deg,
    rgba(131, 74, 200, 1) 0%,
    rgba(41, 19, 68, 1) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(131, 74, 200, 1) 0%,
    rgba(41, 19, 68, 1) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(131, 74, 200, 1) 0%,
    rgba(41, 19, 68, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#834ac8",endColorstr="#291344",GradientType=1);

  @media (max-width: 700px) {
    min-height: 400px;
  }

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
