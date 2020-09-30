import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background: rgba(26, 32, 48, 0.9);
  z-index: 2;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;

  &.open {
    z-index: 3;
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  background: #eee;
  border-radius: 5px;
  width: 500px;
  height: 300px;

  button {
    position: relative;
    margin: 10px 0 0 10px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff5f5a;

    &:hover {
      &:before {
        content: '+';
        transform: rotate(45deg);
        position: absolute;
        top: 1px;
        right: 5px;
      }
    }
  }
`;
