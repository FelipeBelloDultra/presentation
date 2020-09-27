import React from 'react';

import logoReact from '../../assets/logo.svg';

import { Container, ImgContainer } from './styles';

const Home = () => {
  console.log('Felipe');
  return (
    <Container>
      <ImgContainer>
        <img src={logoReact} alt="Logo React" />
        <h1>ReactJS</h1>
      </ImgContainer>
    </Container>
  );
};

export default Home;
