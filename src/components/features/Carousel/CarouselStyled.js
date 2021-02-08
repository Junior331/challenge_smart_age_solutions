import styled from "styled-components";
import media from "../../../styles/globalStyles";

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
  position: relative;
  div:nth-child(n) {
    margin: 0;
  }
  img:first-child {
    width: 100%;
    margin: 0;
  }
`;

const Controlador = styled.div`
  width: 5%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
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
  height: 635px;
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
  width: 250px;
  height: 1px;
  background: #d5a368;
  transform: rotate(-90deg);
  ${media.mobile} {
    display: none;
  }
`;

const Titulo = styled.h1`
  font-family: "Playfair" Display;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  margin: -60px 0px 65px 60px;
  letter-spacing: 0.1em;
  color: #ffffff;
`;

const Explore = styled.img``;

export {
  CarouselContainer,
  Carousel,
  Controlador,
  SubContainer,
  BtnControler,
  Line,
  Texte,
  Titulo,
  Explore,
};
