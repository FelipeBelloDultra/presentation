import React from 'react';

import Menu from '../components/Menu';
import Modal from '../components/Modal';

import { Container, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <Modal />
      <Content>{children}</Content>
      <Menu />
    </Container>
  );
};

export default Layout;
