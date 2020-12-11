import styled from 'styled-components';
export const Container = styled.div`
  width: 75%;
  height: 10%;
  margin-top: 3%;
  position: relative;
  display: flex;
  align-items: center;

  label {
    background: #fff;
    border: solid 1px rgba(3, 3, 3, 0.3);
    width: 5%;
    height: 100%;
    position: absolute;
    left: -7%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: none;
    }
    @media (min-width: 320px) {
      width: 13%;
      left: -15%;
    }
    @media (min-width: 900px) {
      width: 5%;
      left: -7%;
    }
    @media (min-width: 1200px) {
      width: 5%;
      left: -7%;
    }
  }
  input {
    display: none;
    background: #fff;
    &:checked + label {
      img {
        background: #22619b;
        display: block;
        width: 100%;
        //height: 100%;
      }
    }
  }
  @media (min-width: 320px) {
    margin: 2% auto;
  }
  @media (min-width: 900px) {
    margin-top: 3%;
  }
  @media (min-width: 1200px) {
    margin-top: 3%;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const Content = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: #d7cece;
  list-style: none;
  box-shadow: 0px 1px #000;
  @media (min-width: 320px) {
    p {
      margin-left: 2%;
      font-size: 1.3em;
    }
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1200px) {
    font-size: 1em;
  }
`;
