import styled from "styled-components";

const ButtonContainer = styled.button`
  display: flex;
  /* width: 165px; */
  height: 45px;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-around;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  margin: ${(props) => props.margin};
  border: none;
  background: none;
`;
const ButtonIcon = styled.img`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  border-radius: 50%;
  margin-right: 10px;
`;
const Texto = styled.h2`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(props) => props.color};
`;

export { ButtonContainer, ButtonIcon, Texto };
