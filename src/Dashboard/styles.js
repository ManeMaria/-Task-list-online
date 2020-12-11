import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #333;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  ul {
    width: 70%;
    height: 55%;
    background: #fff;
    margin-left: 20%;
    margin-top: 3%;
    padding-left: 5%;
  }
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    ul {
      width: 85%;
      height: 60%;
      background: #fff;
      margin-left: 0;
      margin-top: 10%;
      padding-left: 0;
    }
  }
  @media (min-width: 900px) {
    ul {
      width: 80%;
      height: 55%;
      background: #fff;
      margin-left: 0%;
      margin-top: 3%;
      padding-left: 0;
    }
  }
  @media (min-width: 1200px) {
    ul {
      width: 70%;
      height: 55%;
      background: #fff;
      margin-left: 20%;
      margin-top: 3%;
      padding-left: 5%;
    }
  }
`;
export const AddNewTask = styled.form`
  width: 75%;
  height: 8%;
  margin: 5% 0 0 15%;
  padding-left: 5%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  input {
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
  button {
    background: none;
    position: absolute;
    top: 15%;
    left: 95%;
    padding: 1%;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 320px) {
    width: 80%;
    height: 5%;
    margin: 0 auto;
    padding-left: 0%;
    input {
      font-size: 1.5em;
    }
    button {
      top: 8%;
      left: 85%;
      padding: 2% 4%;
    }
  }

  @media (min-width: 900px) {
    height: 8%;
    margin: 0 auto;
    padding-left: 0%;
    input {
    }
    button {
      top: 2%;
      left: 90%;
      padding: 1% 3%;
    }
  }

  @media (min-width: 1200px) {
    width: 75%;
    height: 8%;
    margin: 5% 0 0 15%;
    padding-left: 5%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    input {
      width: 100%;
      height: 100%;
      font-size: 20px;
    }
    button {
      //atualizar para telas diferentes, pois está estourando
      background: none;
      position: absolute;
      top: 15%;
      left: 95%;
      padding: 1%;
      border: none;
      cursor: pointer;
    }
  }
`;
export const SideMenu = styled.div`
  z-index: 1;
  position: absolute;
  background: #fff;
  height: 100%;
  left: 100%;
  width: ${(props) => (props.visible ? '20%' : '0')};
  transition: all 0.3s;
  transform: translateX(-100%);

  button {
    display: ${(props) => (props.visible ? 'block' : 'none')};
  }
  span {
    display: ${(props) => (props.visible ? 'block' : 'none')};
  }
  @media (min-width: 320px) {
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1200px) {
  }
`;
