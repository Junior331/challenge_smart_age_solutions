import React from "react";
import * as S from "./HomeStyled";
import { Carousel } from "../../components/features/index";

const Home = () => {
  return (
    <S.HomeContainer>
      <Carousel />
      {/* <TheOriginalDesign /> */}
    </S.HomeContainer>
  );
};

export default Home;
