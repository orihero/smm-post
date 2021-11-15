import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const ModalBacgrund = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const ModalBox = styled.div`
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  padding-bottom: 11px;
  border-bottom: 1px solid rgb(197, 197, 197);
`;

export const ModalExit = styled.div`
  font-size: 15px;
  width: 12px;
  background-color: #f7fafc;
  border-radius: none;
  padding: 5px 10px 5px 12px;
  border-radius: 7px;
  cursor: pointer;
`;

export const ModalDescription = styled.div`
  font-style: 19px;
  padding-top: 11px;
  border-bottom: 1px solid rgb(197, 197, 197);
  padding-bottom: 11px;
  color: gray;
`;

export const ModalText = styled.div`
  font-size: 15px;
  padding-top: 10px;
  font-weight: normal;
`;

export const ModalTextThree = styled.div`
  font-size: 15px;
  margin-top: 9px;
  margin-left: 9px;
  color: gray;
`;

export const ModalTextTwo = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: normal;
  margin-top: 9px;
`;

export const ModalTextIcon = styled.img``;

export const ModalTextIconTwo = styled.img`
  width: 18px;
  margin-right: 12px;
  margin-left: 5px;
`;

export const ModalButton = styled.button`
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
  cursor: pointer;
`;
