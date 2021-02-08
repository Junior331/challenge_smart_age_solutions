import React from "react";
import * as S from "./TheOriginalDesignStyled";
import { RelogioPulso } from "../../../assets/index";
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
          color="#000"
          padding="12px 15px"
          backgroundColor="transparent"
          src={ShapeBlack}
          margin="50px 0 0 150px"
        ></Button>
      </S.Container>
      <S.Explore src={RelogioPulso} alt="" />
    </S.TheOriginalDesignContainer>
  );
};

export default TheOriginalDesign;
