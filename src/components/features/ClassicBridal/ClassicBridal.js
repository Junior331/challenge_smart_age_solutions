import React from "react";
import * as S from "./ClassicBridalStyled";
import { Button } from "../../elements/index";
import { Shape } from "../../../assets/icons";
const ClassicBridal = () => {
  return (
    <S.ClassicBridalContainer>
      <S.ContainerImg>
        {/* <S.Img src={Istock} alt=""></S.Img> */}
      </S.ContainerImg>
      <S.SubContainer>
        <S.Titulo>Classic Bridal</S.Titulo>
        <S.Texto>
          Our extraordinary diamonds are chosen to celebrate a love, a hope and
          a passion. Brilliantly capturing our passion for diamonds, a member of
          the family individually hand-selects each stone within our bridal
          collection, so you can fall in love with a diamond for eternity.
        </S.Texto>
        <Button
          titulo="shop now"
          border="1px solid #d5a368"
          color="#fff"
          padding="12px 15px"
          backgroundColor="transparent"
          src={Shape}
          margin="50px 0 0 -320px"
        ></Button>
        <Button
          titulo="shop now"
          border="1px solid #d5a368"
          color="#fff"
          padding="12px 15px"
          backgroundColor="transparent"
          src={Shape}
          margin="30px 0 0 -140px"
        ></Button>
      </S.SubContainer>
    </S.ClassicBridalContainer>
  );
};

export default ClassicBridal;
