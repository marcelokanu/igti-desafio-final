import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
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
  border: 0 !important;
  text-align-last: center;
  background: var(--purple-hover);
  background-image: none;

  &::-ms-expand {
    display: none;
    overflow: hidden;
  }

  @media (max-width: 350px) {
    font-size: 15px;
  }
`;

export const BaseContent = styled.div`
  position: relative;
  display: flex;

  height: 3em;
  line-height: 3;
  overflow: hidden;
`;

export const SelectStyled = styled(BaseSelect)`
  flex: 1;
  padding: 0 0.5em;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
`;

export const Icon = styled.i`
  cursor: pointer;

  color: var(--white);
  background-color: var(--purple-hover);
  font-size: 3rem;
  transition: 0.3s;

  ${(props) =>
    props.side === 'left'
      ? 'border-radius: 5px 0 0 5px'
      : 'border-radius: 0 5px 5px 0'};

  &:hover {
    color: var(--orange);
  }

  @media (max-width: 350px) {
    font-size: 3rem;
  }
`;
