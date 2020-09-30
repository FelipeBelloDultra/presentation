import React from 'react';

import Modal from '../../components/Modal';

import { useModal } from '../../hooks/modal';

import logoReact from '../../assets/logo.svg';

import {
  Container,
  ImgContainer,
  ContainerText,
  CardDescription,
} from './styles';

const Home = () => {
  const { handleOpenModal } = useModal();

  return (
    <Container>
      <ImgContainer>
        <img src={logoReact} alt="Logo React" />
        <h1>React</h1>
      </ImgContainer>

      <ContainerText>
        <button type="button" onClick={handleOpenModal}>
          O que é?
        </button>

        <Modal>
          <p>
            React é uma biblioteca JavaScript de código aberto usado para criar
            interfaces de usuário em páginas web.
          </p>
        </Modal>
      </ContainerText>

      <CardDescription>
        <div>
          <aside className="one">
            <h3>Declarativo:</h3>
            <p>
              - React faz com que a criação de UIs interativas seja uma tarefa
              fácil. Crie views simples para cada estado na sua aplicação, e o
              React irá atualizar e renderizar de forma eficiente apenas os
              componentes necessários na medida em que os dados mudam.
            </p>
          </aside>

          <aside className="two">
            <h3>Baseado em componente:</h3>
            <p>
              - Crie componentes encapsulados que gerenciam seu próprio estado e
              então, combine-os para criar UIs complexas.
              <br /> - Como a lógica do componente é escrita em JavaScript e não
              em templates, você pode facilmente passar diversos tipos de dados
              ao longo da sua aplicação e ainda manter o estado fora do DOM.
            </p>
          </aside>
        </div>

        <aside className="three">
          <h3>Aprenda uma vez, use em qualquer lugar:</h3>
          <p>
            - Não fazemos suposições sobre as outras tecnologias da sua stack,
            assim você pode desenvolver novos recursos com React sem reescrever
            o código existente.
            <br /> - O React também pode ser renderizado no servidor, usando
            Node, e ser usado para criar aplicações mobile, através do React
            Native.
          </p>
        </aside>
      </CardDescription>
    </Container>
  );
};

export default Home;
