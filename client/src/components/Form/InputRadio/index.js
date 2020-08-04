import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container, Label, Input, RadioWrapper, Mark } from './styles';

const InputRadio = ({ name, options, ...rest }) => {
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRefs.current,
      getValue(refs) {
        const checked = refs.find((ref) => ref.checked);

        return checked ? checked.value : null;
      },
      setValue(refs, value) {
        const item = refs.find((ref) => ref.value === value);

        if (item) {
          item.checked = true;
        }
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {options.map((option, index) => (
        <RadioWrapper key={option.id}>
          <Label>
            <Input
              type="radio"
              name={fieldName}
              value={option.id}
              ref={(elRef) => (inputRefs.current[index] = elRef)}
              {...rest}
              defaultChecked={defaultValue === option.id}
            />
            <Mark typeTransaction={option.id} />
            <span>{option.label}</span>
          </Label>
        </RadioWrapper>
      ))}
    </Container>
  );
};
export default InputRadio;
