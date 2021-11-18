import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const PlanModalHeader = styled.div`
  width: 100%;
  height: 240vh;
  background-color: rgba(200, 200, 200, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
`;

export const PlanModalContainerBox = styled.div`
  width: 1010px;
  height: 610px;
  border-radius: 12px;
  background-color: ${COLORS.white};
  padding: 25px;
  margin-top: 40px;
  margin-right: 250px;
  border-radius: 20px;
`;

export const ModalBoxHelp = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 25px;
  font-weight: 600;
  justify-content: space-between;
  color: ${COLORS.fontColors};
  margin-top: 10px;
  margin-left: 45px;
`;

export const ModalExitHelp = styled.div`
  font-size: 15px;
  height: 30px;
  width: 40px;
  background-color: #f7fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  cursor: pointer;
`;

export const PlanModalContainer = styled.div`
  width: 1000px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;

export const PlanModalContainerBoxOne = styled.div`
  width: 240px;
  height: 126px;
  border-radius: 8px;
  background-color: ${COLORS.backgroundColor};
  border: 1px solid rgba(16, 32, 70, 0.1);
  flex-direction: column;
`;

export const PlanModalParagraph = styled.h1`
  font-size: 19px;
  font-weight: 500;
  color: ${COLORS.fontColors};
  margin-left: 20px;
  margin-top: 15px;
`;

export const PlanModalParagraphOne = styled.h2`
  color: ${COLORS.fontColors};
  font-weight: 600;
  font-size: 25px;
  margin-left: 20px;
`;

export const PlanModalParagraphTwo = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin-left: 20px;
  margin-top: 15px;
  color: ${COLORS.fontColors};
`;

export const PlanModalParagraphs = styled.h1`
  font-size: 19px;
  font-weight: 500;
  color: ${COLORS.fontColors};
  margin-top: 15px;
  margin-left: 20px;
`;

export const PlanModalParagraphsOne = styled.h2`
  font-weight: 600;
  font-size: 25px;
  margin-left: 20px;
  color: ${COLORS.fontColors};
`;

export const PlanModalParagraphsTwo = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${COLORS.red};
  margin-left: 20px;
  margin-top: 15px;
`;

export const PlanModalParagraphe = styled.h1`
  font-weight: 500;
  font-size: 19px;
  color: ${COLORS.fontColors};
  margin-top: 15px;
  margin-left: 20px;
`;

export const PlanModalParagrapheOne = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-left: 20px;
  color: ${COLORS.fontColors};
`;

export const PlanModalParagrapheTwo = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${COLORS.red};
  margin-top: 15px;
  margin-left: 20px;
`;

export const PlanModalSection = styled.div`
  font-weight: 600;
  font-size: 25px;
  margin-left: 45px;
  margin-top: 10px;
`;

export const PlanModalSectionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1000px;
  height: 200px;
  margin-top: 20px;
`;
export const PlanModalSectionBoxes = styled.img``;
export const PlanModalSec = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
