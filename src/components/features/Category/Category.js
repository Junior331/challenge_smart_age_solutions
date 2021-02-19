import React, { useState } from "react";
import * as S from "./CategoryStyled";
import Carousel from "react-elastic-carousel";
import { carouselItensMock } from "../../../store/mock/category.mock";

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <S.CategoryContainer>
      <Carousel
        pagination={false}
        onChange={(_, index) => setCurrentIndex(index)}
      >
        {carouselItensMock.map((item, index) => (
          <S.Item src={item.url}>
            <S.Texto isVisible={currentIndex === index}>{item.titulo}</S.Texto>
            <S.Titulo isVisible={currentIndex === index}>{item.texto}</S.Titulo>
          </S.Item>
        ))}
      </Carousel>
    </S.CategoryContainer>
  );
};

export default Category;
