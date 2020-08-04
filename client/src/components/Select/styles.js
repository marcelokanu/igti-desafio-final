import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 10px 0;

  @media (max-width: 700px) {
    padding: 0;
  }
`;

export const BaseSelect = styled.select`
  font-size: 20px;
  font-weight: bold;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  text-align-last: center;

  background: var(--purple-bg);
  background-image: none;

  &::-ms-expand {
    display: none;
    overflow: hidden;
  }
`;

export const BaseContent = styled.div`
  position: relative;
  display: flex;
  height: 3em;
  line-height: 3;
  overflow: hidden;
  max-width: 140px;
`;

export const SelectStyled = styled(BaseSelect)`
  flex: 1;
  padding: 0 0.5em;
  color: var(--light-gray);

  cursor: pointer;
  transition: 0.3s;
`;

export const Icon = styled.i`
  cursor: pointer;
  box-sizing: border-box !important;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  color: var(--white);
  background-color: var(--purple-bg);
  font-size: 3rem;
  transition: 0.3s;

  ${(props) =>
    props.side === 'left'
      ? 'border-radius: 5px 0 0 5px'
      : 'border-radius: 0 5px 5px 0'};

  &:hover {
    color: var(--orange);
  }
`;
