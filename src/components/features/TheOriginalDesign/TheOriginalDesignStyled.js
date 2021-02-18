import styled from "styled-components";
import { media } from "../../../styles/globalStyles";
import { RelogioPulso } from "../../../assets/index";

const TheOriginalDesignContainer = styled.div`
  display: flex;
  width: 100%;
  height: 760px;
  background: #f9efe4;
  margin-top: -50px;
  ${media.mobile} {
    flex-direction: column;
    margin: 0;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* margin: 0 215px; */
  width: 50%;
  padding-left: 40px;

  button:nth-child(1n) {
    display: flex;
  }
  button:nth-child(2n) {
    display: none;
  }

  ${media.mobile} {
    button:nth-child(1n) {
      display: none;
    }
    button:nth-child(2n) {
      display: flex;
    }

    width: 100%;
    align-items: flex-start;
    padding: 0 0px 0 30px;
    button:first-child {
      margin: 15px 45% 0 0px;
    }
  }
`;
const Titulo = styled.h2`
  font-size: 60px;
  font-family: "Playfair", Display;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #000000;
  margin-bottom: 10px;
  width: 95%;
  margin-left: 0px;
  ${media.mobile} {
    font-size: 45px;
    width: 85%;
    margin-top: 30px;
    margin-left: 0;
  }
`;
const Texto = styled.p`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 27px;
  letter-spacing: 0.1em;
  color: #000000;
  width: 95%;
  margin: 0;
  max-width: 455px;
  ${media.mobile} {
    width: 85%;
    margin: 20px 0 0 0px;
  }
`;
const Explore = styled.img`
  padding: 10px 0;
  width: 55%;
  height: 100%;
  margin-top: 10px;
  ${media.mobile} {
    padding: 0;
    width: 100%;
  }
`;
const ContainerImg = styled.div`
  width: 50%;
  background-image: url(${RelogioPulso});

  ${media.mobile} {
    width: 100%;
  }
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export {
  TheOriginalDesignContainer,
  Container,
  Titulo,
  Texto,
  Explore,
  ContainerImg,
};
