import React from "react";
import * as S from "./HeaderStyled";

const Header = (props) => {
  console.log(props);
  return (
    <S.HeaderContainer>
      <S.H1>Jaja!!</S.H1>
    </S.HeaderContainer>
  );
};

export default Header;
