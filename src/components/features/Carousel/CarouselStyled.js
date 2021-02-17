import styled from "styled-components";
import { media } from "../../../styles/globalStyles";

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: auto;

  ${media.mobile} {
    flex-direction: column-reverse;
  }
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;

  ${media.mobile} {
    /* max-height: 225px; */
  }
  div:nth-child(n) {
    margin: 0;
  }
  img:first-child {
    width: 100%;
  }
`;

const Controlador = styled.div`
  width: 5%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  ${media.tablet} {
    width: 6%;
  }
  ${media.mobile} {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
`;

const Texte = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 21px;
  text-align: right;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  color: #333333;
  ${media.mobile} {
    display: none;
  }
`;

const SubContainer = styled.div`
  width: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  justify-content: space-between;
  ${media.mobile} {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    height: 75px;
  }
`;

const BtnControler = styled.button`
  margin-left: 10px;
  background-color: #fff;
  border: 1px solid #d5a368;
  box-sizing: border-box;
  width: 40px;
  padding: 10px;
  margin: 5px 0px;
  border-radius: 50px;
  cursor: pointer;

  &:first-child {
    border: 1px solid #d5a368;
  }

  &:hover {
    border: 1px solid #d5a368;
  }

  ${media.mobile} {
    margin: 5px 10px;
  }
`;

const Line = styled.div`
  width: 190px;
  height: 1px;
  background: #d5a368;
  transform: rotate(-90deg);
  ${media.mobile} {
    display: none;
  }
`;

const Titulo = styled.h1`
  font-family: "Playfair", Display;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  /* margin: -60px 0px 65px 60px; */
  letter-spacing: 0.1em;
  color: #ffffff;
  ${media.mobile} {
    font-size: 35px;
  }
`;

const DescriptioCarousel = styled.div`
  position: relative;
  top: -135px;
  left: 30px;
  width: 80%;
  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export {
  CarouselContainer,
  Carousel,
  Controlador,
  SubContainer,
  BtnControler,
  Line,
  Texte,
  Titulo,
  DescriptioCarousel,
};
