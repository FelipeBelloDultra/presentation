import React from 'react';

import logoReact from '../../assets/logo.svg';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <img src={logoReact} alt="Logo React" />
    </Container>
  );
};

export default Home;
