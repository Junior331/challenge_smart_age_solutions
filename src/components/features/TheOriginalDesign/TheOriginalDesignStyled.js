import styled from "styled-components";

const TheOriginalDesignContainer = styled.div`
  display: flex;
  width: 100%;
  height: 760px;
  background: #f9efe4;

  margin-top: -50px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 215px;
`;
const Titulo = styled.h2`
  font-size: 49px;
  font-family: "Playfair", Display;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #000000;
  margin-bottom: 10px;
`;
const Texto = styled.p`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 27px;
  letter-spacing: 0.1em;
  color: #000000;
`;
const Explore = styled.img`
  padding: 10px 0;
  width: 55%;
  height: 100%;
  margin-top: 10px;
`;
export { TheOriginalDesignContainer, Container, Titulo, Texto, Explore };