import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { DefaultText } from "../../general/text/Text.style";

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
  margin-right: 2px;
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
  position: relative;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftSideBox = styled.div`
  width: 190px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  color: ${COLORS.fontColors};
`;

export const ElementsContainer = styled.div`
  padding: 15px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 25px;
  margin-left: 8px;
  cursor: pointer;
  &:hover{
    background-color: ${COLORS.white};
    box-shadow: 0px 1px 17px rgba(232, 66, 126, 0.07); 
  }
`;

export const PostsParagraph = styled.p`
  margin-left: 10px;
  font-size: 16px;
  color: ${COLORS.fontColors};
  color: ${(props) => (props.active ? COLORS.primaryPink : COLORS.darkBlue)};
  font-weight: ${(props) => (props.active ? "600" : "normal")};
`;

export const IsShowedContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${COLORS.white};
  border-radius: 15px;
  padding: 15px 15px;
`

export const IsShowdHead = styled(DefaultText)`
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.fontColors};
  padding: 5px 15px;
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${COLORS.primaryPink};
    color: ${COLORS.white};
    border-radius: 15px;
  }
`