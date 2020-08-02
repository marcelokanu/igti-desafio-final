import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { Container, ButtonClose, Title, Form, Row, Label } from './styles';

import Input from '../../components/Form/Input';
import InputRadio from '../../components/Form/InputRadio';
import Modal from '../../components/Modal';

const ModalAddTransaction = ({ isOpen, setIsOpen, handleAddTransaction }) => {
  const radioOptions = [
    { id: '+', value: '+', label: 'Receita' },
    { id: '-', value: '-', label: 'Despesa' },
  ];

  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (transaction) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          category: Yup.string().required('Categoria é obrigatória'),
          description: Yup.string().required('Descrição é obrigatória'),
          yearMonthDay: Yup.string().required('Data é obrigatória'),
          value: Yup.number('Valor deve ser numérico')
            .max(9999999999, 'O valor máximo é de 9999999999')
            .min(0.01, 'Valor deve ser maior que 0.01')
            .required('Valor é obrigatória'),
        });

        await schema.validate(transaction, { abortEarly: false });

        console.log(transaction.yearMonthDay);
        handleAddTransaction(transaction);
        setIsOpen();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorMessages = {};

          err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
          });

          formRef.current.setErrors(errorMessages);
        }
      }
    },
    [handleAddTransaction, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <ButtonClose onClick={() => setIsOpen()}>
          <i className="material-icons">close</i>
        </ButtonClose>
        <Title>Nova Transação</Title>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={{ type: '+' }}>
          <Row>
            <InputRadio name="type" options={radioOptions} />
          </Row>

          <Row>
            <Label htmlFor="date">Data</Label>
            <Input
              name="yearMonthDay"
              id="date"
              type="date"
              className="validate"
            />
          </Row>

          <Row>
            <Label htmlFor="category">Categoria</Label>
            <Input
              id="category"
              name="category"
              type="text"
              className="validate"
            />
          </Row>
          <Row>
            <Label htmlFor="description" className="active">
              Descrição
            </Label>
            <Input id="description" name="description" type="text" />
          </Row>

          <Row>
            <Label htmlFor="value" className="active">
              Valor
            </Label>
            <Input
              step=".01"
              id="value"
              name="value"
              defaultValue="0"
              type="number"
              className="validate"
              min="0"
            />
          </Row>

          <Row>
            <button type="submit">Inserir</button>
          </Row>
        </Form>
      </Container>
    </Modal>
  );
};

export default ModalAddTransaction;
