import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const Container = styled.div`
  display: flex;
  position: fixed;
  background-color: ${COLORS.backgroundColor};
`;

export const LeftSide = styled.div`
  width: 212px;
  height: 1080px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  background-color: ${COLORS.white};
  box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.05);
`;

export const EmailImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 65px;
  margin-top: 15px;
`

export const ButtonsContainer = styled.div`
  width: 191px;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const VectorImg = styled.img`
  color: ${COLORS.fontColors};
  margin-left: 2px;
  margin-top: 2px;
  width: 14.04px;
  height: 8px;
  border: none;
`;

export const LeftSideButton = styled.button`
  width: 170px;
  height: 42px;
  border-radius: 15px 0 0 15px;
  font-size: 15px;
  border: none;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${COLORS.white};
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.05);
  color: ${COLORS.fontColors};
`;

export const ButtonParagpraph = styled.p`
  padding: 7px;
  font-weight: 500;
  border: none;
  margin-right: 10px;
`;

export const RightSideButton = styled.button`
  width: 50px;
  height: 42px;
  border-radius: 0 15px 15px 0;
  margin-left: 1px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${COLORS.white};
  border: none;
  box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.05);
`;

export const LeftSideBox = styled.div`
  width: 190px;
  height: 1000px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: ${COLORS.fontColors};
`;

export const ElementsContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 25px;
  margin-left: 8px;
  cursor: pointer;
`;

export const PostsParagraph = styled.p`
  margin-left: 10px;
  font-size: 16px;
  color: ${COLORS.fontColors};
  color: ${(props) => (props.active ? COLORS.primaryPink : COLORS.darkBlue)};
  font-weight: ${(props) => (props.active ? "600" : "normal")};
`;
