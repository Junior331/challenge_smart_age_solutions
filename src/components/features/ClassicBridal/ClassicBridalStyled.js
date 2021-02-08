import styled from "styled-components";
import { Istock } from "../../../assets/index";

const ClassicBridalContainer = styled.div`
  display: flex;
  height: 458px;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  background: #472138;
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
`;

const ContainerImg = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${Istock});
  background-size: cover;
  background-repeat: no-repeat;
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
