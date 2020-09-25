import React from 'react';

import Menu from '../components/Menu';

import { Container, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
