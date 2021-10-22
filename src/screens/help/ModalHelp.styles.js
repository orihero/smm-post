import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const ModalBacgrundHelp = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContainerHelp = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
export const ModalBoxHelp = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding-bottom: 11px;
  border-bottom: 1px solid rgb(197, 197, 197);
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
 font-size: 19px;
 font-weight: 500;
`;
export const ModalTextHelp = styled.div`
  font-size: 15px;
  padding-top: 10px;
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

export const ModalTextIconHelp = styled.img``;
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
