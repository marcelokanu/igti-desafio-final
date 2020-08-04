import React from 'react';

import { Container, Title } from './styles';

function Header(props) {
  return (
    <Container>
      <Title>{props.children}</Title>
    </Container>
  );
}

export default Header;
