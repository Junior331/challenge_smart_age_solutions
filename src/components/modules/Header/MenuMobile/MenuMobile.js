import React, { useState } from "react";
import * as S from "./MenuMobileStyled";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { MenuItens } from "./MenuItens";
import { Bag, Logo, Lupa } from "../../../../assets/icons";
const MenuMobile = () => {
  const [sidebar, setSidebar] = useState(false);
  const showMenu = () => setSidebar(!sidebar);

  return (
    <S.MenuMobileContainer>
      <S.SubContainer>
        <FaIcons.FaBars onClick={showMenu}></FaIcons.FaBars>
        <Link to="/">
          <S.Logo src={Logo} alt="" />
        </Link>
      </S.SubContainer>
      <S.ContainerIcons>
        <S.Icons src={Bag} alt="" />
        <S.Icons src={Lupa} alt="" />
      </S.ContainerIcons>
      <S.Containerliks isActive={sidebar}>
        <AiIcons.AiOutlineClose onClick={showMenu}></AiIcons.AiOutlineClose>
        {MenuItens.map((item, index) => {
          return <Link to={item.url}>{item.title} </Link>;
        })}
      </S.Containerliks>
    </S.MenuMobileContainer>
  );
};

export default MenuMobile;
