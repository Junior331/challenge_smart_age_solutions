import React from "react";
import * as S from "./HomeStyled";
import {
  Carousel,
  TheOriginalDesign,
  JewelryStore,
  ClassicBridal,
  Category,
} from "../../components/features/index";

const Home = () => {
  return (
    <S.HomeContainer>
      <Carousel />
      <TheOriginalDesign />
      <JewelryStore />
      <ClassicBridal />
      <Category />
    </S.HomeContainer>
  );
};

export default Home;
