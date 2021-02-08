import React from "react";
import * as S from "./JewelryStoreStyled";
import { Button } from "../../elements/index";
import { ShapeBlack } from "../../../assets/icons";
const JewelryStore = () => {
  return (
    <S.JewelryStoreContainer>
      <S.Texto>The latest from</S.Texto>
      <S.Titulo>Jewelry Store</S.Titulo>
      <S.Paragrafo>
        Discover all that’s new, brilliant and beautiful in the world of Brand's
        Name.
      </S.Paragrafo>
      <Button
        titulo="See More"
        border="1px solid #d5a368"
        color="#000"
        padding="12px 15px"
        backgroundColor="transparent"
        src={ShapeBlack}
      ></Button>
    </S.JewelryStoreContainer>
  );
};

export default JewelryStore;
