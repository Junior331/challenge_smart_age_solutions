import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  align-items: center;
  border-bottom: #dadada 1px solid;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.1em;
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const ContainerIcons = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
`;

const Icons = styled.img`
  zoom: 1.2;
  margin-right: 10px;
  cursor: pointer;
  &:last-child {
    margin-left: 10px;
    background: #f2f2f2;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    border-radius: 50px;
    padding: 10px;
    width: 35px;
  }
`;

const ContainerNav = styled.div`
  width: 720px;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  margin-bottom: 50px;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 315px;
  margin-bottom: 30px;
`;

const Containerliks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  a:nth-child(n) {
    letter-spacing: 0.1em;
    color: #000000;
  }
  a:hover {
    color: #981a8c;
  }
`;

const Button = styled.button`
  display: flex;
  width: 150px;
  height: 40px;
  border-radius: 50px;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #dbdbdb;
  justify-content: space-evenly;
`;

export {
  HeaderContainer,
  Container,
  H1,
  Icons,
  Logo,
  SubContainer,
  ContainerIcons,
  ContainerNav,
  Containerliks,
  Button,
};
