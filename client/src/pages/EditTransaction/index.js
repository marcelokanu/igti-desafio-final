import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { Container, Title, Form, Row, Label } from './styles';

import Input from '../../components/Form/Input';
import InputRadio from '../../components/Form/InputRadio';
import Modal from '../../components/Modal';

const ModalEditTransaction = ({
  isOpen,
  setIsOpen,
  editingTransaction,
  handleUpdateTransaction,
}) => {
  const radioOptions = [
    editingTransaction.type === '+'
      ? { id: '+', value: '+', label: 'Receita' }
      : { id: '-', value: '-', label: 'Despesa' },
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

        handleUpdateTransaction(transaction);
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
    [handleUpdateTransaction, setIsOpen]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <Title>Editar Transação</Title>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={editingTransaction}
        >
          <Row>
            <InputRadio
              name="type"
              options={radioOptions}
              style={{ opacity: '0.8' }}
            />
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
              type="number"
              className="validate"
              min="0"
            />
          </Row>

          <Row>
            <button type="submit">Salvar</button>
          </Row>
        </Form>
      </Container>
    </Modal>
  );
};

export default ModalEditTransaction;
