import styled, { keyframes } from 'styled-components';

const logoSpin = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translate(0px, -150px);
  }
  to {
    opacity: 1;
    transform: translate(0px);
  }
`;

export const Container = styled.div`
  animation: ${appearFromTop} 1s;
`;

export const ImgContainer = styled.div`
  width: 250px;
  height: 250px;
  margin: 0 auto;
  user-select: none;

  img {
    height: 250px;
    width: 250px;
    pointer-events: none;
    animation: ${logoSpin} infinite 5s linear;
  }

  h1 {
    margin-top: -45px;
    text-align: center;
    color: #fff;
    /* font-size: 24px; */
  }
`;
