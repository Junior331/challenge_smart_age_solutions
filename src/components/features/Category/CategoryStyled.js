import styled, { css } from "styled-components";

import { media, animation } from "../../../styles/globalStyles";
const CategoryContainer = styled.div`
  display: flex;
  button:nth-child(n) {
    width: 60px;
    height: 60px;
    background: #ffffff;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    &:hover {
      background: #fff;
      color: #fff;
      box-shadow: inset -70px -30px 30px 0px #7d5cff80;
    }
  }

  button:first-child {
    position: absolute;
    left: 3%;
    z-index: 1;
  }
  button:nth-child(n):disabled {
    display: none;
  }
  button:last-child {
    position: absolute;
    left: 92%;
  }

  div:nth-child(1n) {
    margin: 0px;
  }
  ${media.mobile} {
    button:nth-child(n) {
      display: none;
    }
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  flex-direction: column;
  background-color: #683bb7;
  color: #fff;
  font-size: 4em;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  ${media.mobile} {
    height: 200px;
    background-size: cover;
  }
`;

const Titulo = styled.h2`
  font-family: "Playfair", Display;
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  line-height: 115px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3em;
  position: relative;
  /* ${(props) => props.isViseble && css``} */
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  animation: ${animation} 3s both;
  opacity: 0;
  color: #ffffff;
  ${media.mobile} {
    font-size: 55px;
  }
`;

const Texto = styled.p`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  letter-spacing: 0.25em;
  color: #ffffff;
  position: relative;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  animation: ${animation} 2s both;
  opacity: 0;

  ${media.mobile} {
    font-size: 20px;
  }
`;

export { CategoryContainer, Item, Titulo, Texto };
