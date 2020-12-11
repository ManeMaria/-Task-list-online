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
      padding: 0.5% 4%;
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
    @media (min-width: 900px) {
    }
    @media (min-width: 1200px) {
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
      props.visible ? '0 0px 3px 15px rgba(0, 0, 0, 0.3)' : 'none'};
  }
  @media (min-width: 1200px) {
    width: ${(props) => (props.visible ? '20%' : '0')};
    box-shadow: none;
  }
`;
