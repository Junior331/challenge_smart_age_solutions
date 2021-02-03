import React from "react";
import * as S from "./ButtonStyled";

const Button = ({
  onClick,
  titulo,
  border,
  color,
  padding,
  margin,
  backgroundColor,
  src,
  key,
}) => {
  return (
    <S.ButtonContainer margin={margin} onClick={onClick}>
      <S.ButtonIcon
        border={border}
        color={color}
        padding={padding}
        background-color={backgroundColor}
        src={src}
        key={key}
        alt=""
      ></S.ButtonIcon>
      <S.Texto color={color}>{titulo}</S.Texto>
    </S.ButtonContainer>
  );
};

export default Button;
