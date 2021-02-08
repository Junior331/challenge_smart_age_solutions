import styled, { css } from "styled-components";
import media from "../../../../styles/globalStyles";

const MenuMobileContainer = styled.div`
  display: none;
  ${media.mobile} {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5px;

    svg:first-child {
      font-size: 30px;
      color: #333333;
    }
  }
`;

const Containerliks = styled.div`
  ${media.mobile} {
    transition: all 2s ease-out;

    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1;
    flex-direction: column;
    top: -740px;
    left: -335px;
    svg:first-child {
      position: relative;
      left: 87%;
      margin: 8px 0;
      color: #333333;
    }
    a:nth-child(n) {
      font-size: 14px;
      padding: 25px;
      border-top: 1px solid #ccc;
    }
    a:hover {
      background-color: #ade1f6;
      color: #fff;
    }
    a:last-child {
      border-bottom: 1px solid #ccc;
    }
    ${(props) =>
      props.isActive &&
      css`
        top: 0px;
        left: 0px;
        transition: all 2s ease-out;
      `}
  }
`;

const ContainerIcons = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
`;

const Icons = styled.img`
  zoom: 1.2;
  cursor: pointer;
  &:last-child {
    margin-left: 10px;
    box-sizing: border-box;
    border-radius: 50px;
    width: 20px;
  }
`;

const Logo = styled.img`
  width: 180px;
  margin-left: -60px;
`;

export { MenuMobileContainer, Containerliks, ContainerIcons, Icons, Logo };
