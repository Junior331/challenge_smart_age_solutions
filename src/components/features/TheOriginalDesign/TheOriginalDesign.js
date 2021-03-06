import React from "react";
import * as S from "./TheOriginalDesignStyled";
import { Button } from "../../elements/index";
import { ShapeBlack } from "../../../assets/icons";
const TheOriginalDesign = () => {
  return (
    <S.TheOriginalDesignContainer>
      <S.Container>
        <S.Titulo>The original Design</S.Titulo>
        <S.Texto>
          Inspired by a spectacular historical legacy and the most refined
          glamour of the world today.
        </S.Texto>
        <Button
          titulo="Explore"
          border="1px solid #d5a368"
          color="#333333"
          padding="12px 15px"
          backgroundColor="transparent"
          src={ShapeBlack}
          margin="50px 58% 0px 0px"
        ></Button>
        <Button
          titulo="Explore"
          border="1px solid #d5a368"
          color="#333333"
          padding="12px 15px"
          backgroundColor="transparent"
          src={ShapeBlack}
          margin="20px 0"
        ></Button>
      </S.Container>
      <S.ContainerImg></S.ContainerImg>
    </S.TheOriginalDesignContainer>
  );
};

export default TheOriginalDesign;
