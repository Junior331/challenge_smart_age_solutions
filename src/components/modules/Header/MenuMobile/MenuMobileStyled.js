import styled, { css } from "styled-components";
import { media } from "../../../../styles/globalStyles";

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
    transition: 0.9s ease-out;
    transform: translateX(-100%) rotateY(-90deg);

    position: absolute;
    transform-origin: right;
    display: flex;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1;
    flex-direction: column;
    top: 0px;
    left: 0px;
    /* left: -375px; */
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
        /* left: 0px; */

        transform: translateX(0%) rotateY(0deg);
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
  max-width: 180px;
`;
const SubContainer = styled.div`
  display: flex;
  max-width: 225px;
  width: 70%;
  justify-content: space-around;
  align-items: center;
`;

export {
  MenuMobileContainer,
  Containerliks,
  ContainerIcons,
  Icons,
  SubContainer,
  Logo,
};
