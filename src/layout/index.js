import React from 'react';

import { Container } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <h1>Hello World</h1>
      {children}
    </Container>
  );
};

export default Layout;
