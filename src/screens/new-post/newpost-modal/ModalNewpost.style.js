import styled from "styled-components";
import { DefaultText } from "../../../components/general/text/Text.style";
import { COLORS } from "../../../constants/colors";

export const ModalBackgrundHelp = styled.div`
  width: 100%;
  height: 140vh;
  background-color: rgba(200, 200, 200, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
`;

export const ModalContainerHelp = styled.div`
  width: 700px;
  height: 500px;
  padding-bottom: 40px;
  border-radius: 12px;
  background-color: ${COLORS.white};
  padding: 25px;
  margin-top: 105px;
  margin-right: 250px;
`

export const ModalBoxHelp = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: 600;
  justify-content: space-between;
  padding-bottom: 11px;
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

export const ModalInfoParagraph = styled(DefaultText)`
  display: flex;
  margin-top: 15px;
  padding: 15px 15px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 15px;
  color: ${COLORS.fontColors};
  border: 1px solid ${COLORS.primaryPink};
`

export const ActiveContainer = styled.div`
  padding: 10px 5px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${COLORS.white};
`

export const ModalBoxContainer = styled.div`
  padding: 30px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${COLORS.backgroundColor};
  border: 1px solid ${COLORS.borderGray};
  &:hover{
    border: 2px solid ${COLORS.primaryPink};
  } 
`