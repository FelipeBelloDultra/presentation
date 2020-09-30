import React from 'react';

import Menu from '../components/Menu';

import { Container, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <Menu />
    </Container>
  );
};

export default Layout;
