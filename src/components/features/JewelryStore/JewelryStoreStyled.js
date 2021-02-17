import styled from "styled-components";
import { media } from "../../../styles/globalStyles";
const JewelryStoreContainer = styled.div`
  display: flex;
  height: 300px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  button,
  h1:nth-child(n) {
    margin: 10px;
  }
  ${media.mobile} {
    height: 45vh;
    justify-content: flex-end;
  }
`;
const Titulo = styled.h1`
  font-family: "Playfair", Display;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 96px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #d5a368;
  ${media.mobile} {
    font-size: 10vw;
    width: 100%;
  }
`;
const Texto = styled.h2`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #000000;
`;
const Paragrafo = styled.p`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.1em;
  color: #000000;
  ${media.mobile} {
    font-size: 15px;
    padding: 0px 45px;
    text-align: center;
  }
`;
export { JewelryStoreContainer, Titulo, Texto, Paragrafo };
