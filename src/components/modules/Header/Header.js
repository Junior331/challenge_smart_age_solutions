import React from "react";
import * as S from "./HeaderStyled";
import {
  Location,
  Bag,
  Logo,
  Lupa,
  Heart,
  User,
} from "../../../assets/icons/index";
import { Link } from "react-router-dom";

const Header = (props) => {
  console.log(props);
  return (
    <S.HeaderContainer>
      <S.SubContainer>
        <S.Button>
          <S.Icons src={Location} alt="" />
          <S.H1>Find a Store</S.H1>
        </S.Button>
        <S.ContainerIcons>
          <S.Icons src={User} alt="" />
          <S.Icons src={Bag} alt="" />
          <S.Icons src={Heart} alt="" />
          <S.Icons src={Lupa} alt="" />
        </S.ContainerIcons>
      </S.SubContainer>
      <S.ContainerNav>
        <Link to="/">
          <S.Logo src={Logo} alt="" />{" "}
        </Link>

        <S.Containerliks>
          <Link to="/collections">COLLECTIONS </Link>
          <Link to="/categories">CATEGORIES </Link>
          <Link to="/stores">STORES </Link>
          <Link to="/our">OUR </Link>
          <Link to="/story">STORY </Link>
          <Link to="/contact">CONTACT </Link>
        </S.Containerliks>
      </S.ContainerNav>
    </S.HeaderContainer>
  );
};

export default Header;
