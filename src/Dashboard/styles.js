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
    //atualizar para telas diferentes, pois está estourando
    background: none;
    position: absolute;
    top: 15%;
    left: 95%;
    padding: 1%;
    border: none;
    cursor: pointer;
  }
`;
export const SideMenu = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  background: #fff;
  height: 100%;
  left: 70%;
  width: 30%;
`;
