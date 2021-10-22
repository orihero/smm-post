import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const ModalBacgrundHelp = styled.div`
  width: 100%;
  height: 140vh;
  background-color: rgba(200, 200, 200, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
  
`;

export const ModalVido = styled.video`
width: 100%;
height: 335px;
margin-top: 20px;
margin-bottom: 20px;

`
export const ModalContainerHelp = styled.div`
  width: 700px;
  height: 600px;
  padding-bottom: 40px;
  
  border-radius: 12px;
  background-color: #fff;
  padding: 25px;
`;

export const ModalContainerHelpIcon = styled.div``;
export const ModalBoxHelp = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  justify-content: space-between;
  padding-bottom: 11px;
`;

export const ModalBoxHelpContainer = styled.div`
  margin-left: 12px;
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
`;

export const ModalDescriptionHelp = styled.div`
  font-size: 22px;
  font-weight: 500;
`;
export const ModalTextHelp = styled.div`
  font-size: 15px;
  border-bottom: 1px solid #DBDBDB;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  font-weight: normal;
`;
export const ModalTextThreeHelp = styled.div`
  font-size: 15px;
  margin-top: 9px;
  margin-left: 9px;
  color: gray;
`;
export const ModalTextTwoHelp = styled.div`
  color: black;
`;

export const ModalTextIconHelp = styled.img`
  width: 80px;
`;
export const ModalTextIconTwoHelp = styled.img`
  width: 18px;
  margin-right: 12px;
  margin-left: 5px;
`;
export const ModalButtonHelp = styled.button`
  font-size: 16px;
  width: 250px;

  font-weight: bold;
  padding: 6px 20px;
  border-width: 2px;
  border: 1px solid ${COLORS.primaryPink};
  border-radius: 20px;

  opacity: ${(props) => (props.active ? 1 : 0.5)};
  color: ${(props) => (props.primary ? COLORS.white : COLORS.primaryPink)};
  background-color: ${(props) =>
    props.primary ? COLORS.primaryPink : COLORS.white};
  margin: 15px 3px;
`;
