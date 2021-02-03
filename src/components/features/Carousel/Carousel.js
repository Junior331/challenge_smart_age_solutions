import React, { useRef } from "react";
import * as S from "./CarouselStyled";
import CarouselSlider from "react-elastic-carousel";
import { mockImgsCarousel } from "../../../store/mock/carousel.mock";
const CarouselImgs = ({ imagesUrl }) => {
  console.log("imagesUrl", imagesUrl);
  const carouselRef = useRef();
  const navigators = new Array(imagesUrl.length).fill(null); // [null, null, null]

  const goToItem = (position) => {
    carouselRef.current.goTo(position);
  };

  return (
    <S.CarouselContainer>
      <S.SubContainer>
        <S.Controlador>
          {navigators.map((_item, index) => (
            <S.BtnControler key={index} onClick={() => goToItem(index)}>
              {index + 1}
            </S.BtnControler>
          ))}
        </S.Controlador>
        <S.Line></S.Line>
        <S.Texte>Discover more</S.Texte>
      </S.SubContainer>
      <S.Carousel>
        <CarouselSlider ref={carouselRef} showArrows={false} pagination={false}>
          {imagesUrl.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </CarouselSlider>
      </S.Carousel>
    </S.CarouselContainer>
  );
};
const Carousel = () => {
  return (
    <div>
      <CarouselImgs imagesUrl={mockImgsCarousel}></CarouselImgs>
    </div>
  );
};
export default Carousel;
