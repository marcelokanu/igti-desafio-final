import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > i {
    cursor: pointer;
    color: #6934a8;
    font-size: 5rem;
    transition: 0.3s;

    &:hover {
      color: #fb8c00;
    }

    @media (max-width: 350px) {
      font-size: 3rem;
    }
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
  border: 0 !important;
  text-align-last: center;
  background: var(--purple-bg);
  background-image: none;

  &::-ms-expand {
    display: none;
  }

  &.active {
    color: red;
  }

  @media (max-width: 350px) {
    font-size: 15px;
  }
`;

export const BaseContent = styled.div`
  position: relative;
  display: flex;
  width: 15rem;
  height: 3em;
  line-height: 3;
  overflow: hidden;
  border-radius: 0.25em;
  overflow: hidden;
`;

export const SelectStyled = styled(BaseSelect)`
  flex: 1;
  padding: 0 0.5em;
  color: #fff;
  cursor: pointer;
`;
