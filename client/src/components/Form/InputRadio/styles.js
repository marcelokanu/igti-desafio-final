import styled from 'styled-components';

export const Mark = styled.span`
  display: inline-block;
  position: relative;
  border: 2px solid var(--secondary);
  width: 19px;
  height: 19px;
  left: 0;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: var(--purple-hover);
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
`;

export const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    &::after {
      width: 19px;
      height: 19px;
      opacity: 1;
      left: 0;
      top: 0;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  font-size: 1rem;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
  ${(props) =>
    props.disabled &&
    `
        cursor: not-allowed;
        opacity: 0.4;
    `}
`;

export const RadioWrapper = styled.div`
  display: inline-block;
  align-items: center;
`;
