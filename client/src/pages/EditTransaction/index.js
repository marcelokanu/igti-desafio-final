import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function EditTransaction() {
  return (
    <Container>
      <h1>Editar transação</h1>

      <Link to="/">Voltar pra home</Link>
    </Container>
  );
}

export default EditTransaction;
