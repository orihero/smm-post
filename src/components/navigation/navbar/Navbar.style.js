import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { DefaultText } from "../../general/text/Text.style";

export const NavbarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.white};
  box-shadow: 0px 1px 17px rgba(87, 87, 87, 0.06);
  padding-right: 20px;
  padding-top:20px;
  padding-bottom: 20px;
`;

export const NavbarHead = styled.h1`
  margin-left: 45px;
  font-weight: 700;
  font-size: 28px;
  color: ${COLORS.fontColors};
`;

export const UserDiv = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const UserParagraph = styled.p`
  font-weight: 500;
  margin-right: 10px;
  color: ${COLORS.primaryPink};
  cursor: pointer;
`;

export const UserImg = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

export const ArrowDownButton = styled.button`
  /* padding: 15px 5px; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};
  border-radius: 15px;
  cursor: pointer;
  transform: ${(props) => props.active ? "rotateZ(-90deg)" : ""};
  transition: .3s;
  border: none;
`

export const Vector = styled.img`
  width: 16px;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  display: flex;
  padding: 15px;
  background-color: ${COLORS.white};
  top: 95px;
  right:35px;
  flex-direction: column;
  box-shadow: 0px 1px 16px rgba(90, 90, 90, 0.06);
  border-radius: 15px;
`

export const Option = styled.div`
  padding: 10px 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 19px;
  font-weight: 500;
  &:hover {
    color: ${COLORS.white};
    background-color: ${COLORS.primaryPink};
    border-radius: 15px;
  }
`
