import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const ModalBackgrundHelp = styled.div`
  width: 100%;
  height: 140vh;
  /* background-color: rgba(200, 200, 200, 0.5); */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
`;

export const ModalContainerHelp = styled.div`
  margin-top: 300px;
  margin-right: 500px;
  border-radius: 12px;
  background-color: ${COLORS.white};
`;

export const ModalBoxHelp = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 19px;
  font-weight: 600;
  justify-content: space-between;
  padding-bottom: 11px;
  color: ${COLORS.fontColors};
`;

export const ModalExitHelp = styled.div`
  font-size: 15px;
  cursor: pointer;
  padding: 15px 15px;
  border-radius: 7px;
  background-color: ${COLORS.exitColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarContainer = styled.div`
  padding: 10px 10px;
  -webkit-box-shadow: 0px 1px 9px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 1px 9px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 1px 9px 1px rgba(34, 60, 80, 0.2);
  /* margin-top: 15px; */
  /* margin-right: 15px; */
  /* display: flex; */
  /* color: red; */
  /* background-color: red; */
`;
