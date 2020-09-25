import styled from 'styled-components';

export const Container = styled.div`
  background: #282c34;
  overflow-y: scroll;
  width: 20%;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }
`;

export const LinksList = styled.ul`
  padding: 5%;
  height: 100%;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;

  li {
    margin-top: 10px;

    a {
      color: #aaa;
      text-decoration: none;
      font-weight: 500;
      font-size: 18px;
      transition: all 0.1s;
      display: flex;
      padding: 5px;

      &:hover {
        color: #fff;
        text-decoration: underline;
        transform: translate(5px, 0);
      }
    }

    .active {
      color: #fff;
      text-decoration: underline;
      transform: translate(5px, 0);
    }
  }
`;
