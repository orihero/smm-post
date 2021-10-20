import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const Container = styled.section`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #e5e5e5;
  position: fixed;
`;

export const EmailImg = styled.img`
  margin-right: 65px;
  margin-top: 15px;
  width: 80px;
`;

export const ButtonsDiv = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
`;

export const VectorImg = styled.img`
  margin-left: 10px;
  margin-top: 3px;
`;

export const LeftSideButton = styled.div`
  width: 170px;
  height: 40px;
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  cursor: pointer;
  border: none;
`;

export const ButtonParagpraph = styled.p``;

export const LeftSideButtonSecond = styled.button`
  width: 40px;
  height: 42px;
  border-radius: 0 15px 15px 0;
  margin-left: 1px;
  font-size: 20px;
  cursor: pointer;
  background-color: #fff;
  border: none;
`;

export const LeftSide = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #fff;
`;

export const LeftSideBox = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ElementsDiv = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
  margin-left: 8px;
  cursor: pointer;
`;

export const PostsParagraph = styled.p`
  margin-left: 10px;
  font-size: 16px;
  color: #102046;
  color: ${(props) => (props.active ? COLORS.primaryPink : COLORS.darkBlue)};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;
