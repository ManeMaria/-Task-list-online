import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  ul {
    width: 70%;
    height: 55%;
    background: #c4c4c4;
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
      background: #c4c4c4;
      margin-left: 0;
      margin-top: 3%;
      padding-left: 0;
    }
  }
  @media (min-width: 900px) {
    ul {
      width: 80%;
      height: 55%;
      background: #c4c4c4;
      margin-left: 0%;
      margin-top: 3%;
      padding-left: 0;
    }
  }
  @media (min-width: 1200px) {
    ul {
      width: 70%;
      height: 55%;
      background: #c4c4c4;
      margin-left: 20%;
      margin-top: 3%;
      padding-left: 5%;
    }
  }
`;

export const MainMenu = styled.div`
  position: absolute;
  top: 0%;
  background: none;
  width: 80%;
  height: 100vh;
  margin-left: 2%;
  label {
    img {
      margin-top: 5%;
      width: 40px;
      height: 37.5px;
    }
  }
  input {
    display: none;
    &:checked ~ .sideMainMenu {
      width: 80%;
      box-shadow: 0 16px 3px 15px rgba(0, 0, 0, 0.3);
      > label {
        display: block;
      }
      > div {
        display: flex;
        img {
          display: block;
        }
        h3 {
          display: block;
        }
      }
    }
  }
  .sideMainMenu {
    position: absolute;
    z-index: 1;
    top: 0;
    left: -2.5%;
    width: 0%;
    height: 100vh;
    background: #fff;
    transition: all 0.3s;

    > label {
      margin-top: 2%;
      margin-left: 3.3%;
      display: none;
    }
    > div {
      display: none;
      width: 100%;
      height: 20%;
      background: #bfe6e9;
      flex-wrap: wrap;
      align-items: center;
      position: relative;

      img {
        position: absolute;
        top: 25%;
        left: 2%;
        display: none;
        width: 52px;
        height: 52px;
        padding: 2%;
        border-radius: 50%;
        background: #fff;
      }
      > h3 {
        display: none;
        margin-left: 27%;
        margin-top: 18%;
      }
    }
  }
  @media (min-width: 1200px) {
    .sideMainMenu {
      position: absolute;
      z-index: 1;
      top: 0;
      left: -2.5%;
      width: 27%;
      height: 100vh;
      background: #fff;
      border: none;
      border-right: solid 0.3px rgba(196, 196, 196, 0.2);
      box-shadow: none;
      > label {
        display: none;
      }
      > div {
        display: flex;
        width: 100%;
        height: 20%;
        background: rgba(196, 196, 196, 0.2);
        flex-wrap: wrap;
        align-items: center;
        position: relative;

        img {
          display: block;
          width: 52px;
          height: 52px;
          padding: 2%;
          border-radius: 50%;
          background: #fff;
        }
        > h3 {
          display: block;
          margin-left: 27%;
          margin-top: 18%;
        }
      }
    }
  }
  @media (min-width: 600px) {
    /*não segui o padrão neste, pois o alterava a mairia do dispositivos se deixasse
      em 320px.
     */
    label {
      img {
        margin-top: 1%;
        width: 40px;
        height: 37.5px;
      }
    }
  }
`;
export const HeaderDashBoard = styled.div`
  background: #bfe6e9;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  h2 {
    margin: 0 auto;
  }
  @media (min-width: 320px) {
    position: absolute;
    top: 0;
    height: 10%;
    width: 100%;
    h2 {
      margin: 0 auto 0 15%;
    }
  }
  @media (min-width: 600px) {
    h2 {
      margin: 0 auto;
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
    background: #c4c4c4;
    border: none;
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
    margin: 2% auto;
    padding-left: 0%;
    input {
      font-size: 1.5em;
    }
    button {
      top: 8%;
      left: 85%;
      padding: 0.5% 4%;
    }
  }

  @media (min-width: 900px) {
    height: 8%;
    margin: 3% auto;
    padding-left: 0%;

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
export const RightSideMenu = styled.div`
  /*
  * Pensar numa solução para clicar fora do menu e fechá-lo.
   */
  z-index: 1;
  position: absolute;
  background: #fff;
  height: 100%;
  left: 100%;
  width: ${(props) => (props.visible ? '20%' : '0')};
  transition: all 0.3s;
  transform: translateX(-100%);

  .close-menu {
    display: ${(props) => (props.visible ? 'block' : 'none')};
    @media (min-width: 320px) {
      position: absolute;
      top: 2%;
      left: 2%;
    }
  }
  .delete-task {
    display: ${(props) => (props.visible ? 'block' : 'none')};
    @media (min-width: 320px) {
      position: absolute;
      top: 80%;
      left: 2%;
    }
  }
  span {
    display: ${(props) => (props.visible ? 'block' : 'none')};
  }
  @media (min-width: 320px) {
    width: ${(props) => (props.visible ? '80%' : '0')};
    box-shadow: ${(props) =>
      props.visible ? '0 0px 3px 15px rgba(0, 0, 0, 0.3)' : 'none'};

    span {
      margin-top: 20%;
      width: 100%;
      height: 10%;
      border: none;
      border-top: 1px solid rgba(3, 3, 3, 0.3);
      border-bottom: 1px solid rgba(3, 3, 3, 0.3);
    }
  }
  @media (min-width: 900px) {
    width: ${(props) => (props.visible ? '20%' : '0')};
    box-shadow: ${(props) =>
      props.visible ? '0 0 3px 15px rgba(0, 0, 0, 0.3)' : 'none'};
  }
  @media (min-width: 1200px) {
    width: ${(props) => (props.visible ? '20%' : '0')};
    box-shadow: none;
  }
`;
