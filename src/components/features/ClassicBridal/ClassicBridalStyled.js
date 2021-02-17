import styled from "styled-components";
import { Istock } from "../../../assets/index";
import { media } from "../../../styles/globalStyles";

const ClassicBridalContainer = styled.div`
  display: flex;
  height: 458px;
  ${media.mobile} {
    flex-direction: column;
    height: 880px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  background: #472138;
  padding: 10px 4.5%;
  ${media.tablet} {
  }

  button:nth-child(1n) {
    display: flex;
  }
  button:nth-child(2n) {
    display: none;
  }

  ${media.mobile} {
    width: 100%;
    height: 80%;
    padding-left: 15vw;
    button:nth-child(1n) {
      display: none;
    }
    button:nth-child(2n) {
      display: flex;
    }
  }
`;

const Titulo = styled.h2`
  font-family: "Playfair", Display;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 80px;
  letter-spacing: 0.1em;
  width: 475px;
  color: #d5a368;
  margin-bottom: 15px;
  ${media.tablet} {
    width: 100%;
    font-size: 57px;
    line-height: 70px;
  }
  ${media.mobile} {
    width: 75%;
    font-size: 60px;
  }
`;

const Texto = styled.p`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.1em;
  color: #ffffff;
  width: 470px;
  ${media.tablet} {
    width: 350px;
    /* font-size: 70px;
    line-height: 70px; */
  }
  ${media.mobile} {
    width: 75%;
    font-size: 15px;
  }
`;

const ContainerImg = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${Istock});
  background-size: cover;
  background-repeat: no-repeat;
  ${media.mobile} {
    width: 100%;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export {
  ClassicBridalContainer,
  SubContainer,
  Img,
  Titulo,
  Texto,
  ContainerImg,
};
