import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const ModalBackgroundHelp = styled.div`
  width: 100%;
  height: 240vh;
  background-color: rgba(200, 200, 200, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;  
`;

export const ModalContainerHelp = styled.div`
  width: 500px;
  height: 560px;
  border-radius: 12px;
  background-color: ${COLORS.white};
  padding: 25px;
  margin-top: 40px;
  margin-right: 250px;
  border-radius: 20px;
`;

export const ModalContainerBox = styled.div`
  border: 2px solid ${COLORS.primaryPink};
  padding: 75px 15px;
  display: flex;
  justify-content: center;
  width: 470px;
  height: 420px;
  border-radius: 20px;
  flex-direction: column;
`;

export const ModalBoxHelp = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 19px;
  font-weight: 600;
  justify-content: space-between;
  color: ${COLORS.fontColors};
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

export const ModalContainerParagraf = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalContainerBoxOne = styled.p`
  font-weight: 500;
  font-size: 19px;
  flex-direction: column; 
  display: flex;
  margin-bottom: 5px;
  margin-left: 35px;
`;

export const ModalContainerBoxSpan = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${COLORS.fontColors};
  opacity: 0.5;
`;
