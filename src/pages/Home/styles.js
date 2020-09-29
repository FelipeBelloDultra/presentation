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

export const ContainerText = styled.div`
  margin: 60px auto;
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    width: 150px;
  }

  p {
    flex: 1;
    color: #c0e6f1;
  }
`;

export const CardDescription = styled.div`
  margin: 60px auto;
  width: 950px;
  display: flex;
  padding: 0 5px;

  aside {
    position: relative;
    background: #eee;
    color: #20232a;
    border-radius: 5px;
    padding: 25px;

    h3 {
      text-align: center;
      letter-spacing: 0.75px;
      margin: 35px 0 10px;
    }

    p {
      letter-spacing: 0.75px;
      text-align: left;
      color: #20232a;
    }

    &:after,
    &:before,
    h3:after {
      content: '';
      position: absolute;
      height: 20px;
      width: 20px;
      top: 10px;
      border-radius: 50%;
      cursor: pointer;
    }

    &:after {
      background: #ff5f5a;
    }

    &:before {
      background: #ffbe2e;
      left: 50px;
    }

    h3:after {
      background: #2aca44;
      left: 75px;
    }

    &.one {
      margin: 10px 0 0 0;
    }

    &.two {
      margin: 20px 0 0 0;
    }

    &.three {
      margin: 10px 0 0 20px;
      height: 300px;
    }
  }
`;
