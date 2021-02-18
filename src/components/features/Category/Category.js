import React from "react";
import * as S from "./CategoryStyled";
import Carousel from "react-elastic-carousel";
import {
  AliancaCategoriaCarousel,
  MulherImgCarousel,
} from "../../../assets/index";
const Category = () => {
  return (
    <S.CategoryContainer>
      <Carousel pagination={false}>
        <S.Item src={AliancaCategoriaCarousel}>
          <S.Texto>CATEGORY</S.Texto>
          <S.Titulo>Rings</S.Titulo>
        </S.Item>
        <S.Item src={MulherImgCarousel}>
          <S.Texto>CATEGORY</S.Texto>
          <S.Titulo>Rings</S.Titulo>
        </S.Item>
        <S.Item src={AliancaCategoriaCarousel}>
          <S.Texto>CATEGORY</S.Texto>
          <S.Titulo>Rings</S.Titulo>
        </S.Item>
      </Carousel>
    </S.CategoryContainer>
  );
};

export default Category;
