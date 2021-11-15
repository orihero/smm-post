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
`;

export const UserImg = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

export const Vector = styled.img`
  /* margin-right: 15px; */
  width: 12px;
  cursor: pointer;
`;
