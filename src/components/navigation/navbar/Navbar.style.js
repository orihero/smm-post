import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
const hoverColor = "#E8427E";

export const NavbarDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

export const NavbarHead = styled.h1`
  margin-left: 45px;
  font-weight: 700;
  font-size: 28px;
`;

export const UserDiv = styled.div`
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const UserParagraph = styled.p`
  font-weight: 500;
  margin-right: 4px;
  color: ${COLORS.primaryPink};
`;

export const UserImg = styled.img`
  width: 70px;
`;

export const Vector = styled.img`
  margin-right: 5px;
  width: 16px;
`;
