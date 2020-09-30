import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background: rgba(26, 32, 48, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;

  &.open {
    z-index: 3;
    opacity: 1;

    aside {
      transform: translateY(0);
    }
  }
`;

export const ModalContent = styled.aside`
  background: #eee;
  border-radius: 5px;
  width: 500px;
  height: 300px;
  color: #000;
  transition: all 0.2s;
  transform: translateY(-100px);
  z-index: 4;

  .button {
    margin: 10px 0 0 10px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff5f5a;
  }
`;
