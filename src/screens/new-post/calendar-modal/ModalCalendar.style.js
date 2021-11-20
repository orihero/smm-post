import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const ModalBackgrundHelp = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 15px;
`;

export const ModalContainerHelp = styled.div`
  border-radius: 15px;
  -webkit-box-shadow: 0px 1px 9px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 1px 9px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 1px 9px 1px rgba(34, 60, 80, 0.2);
`;

export const ModalBoxHelp = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 19px;
  font-weight: 600;
  justify-content: space-between;
`;

export const CalendarContainer = styled.div`
  background-color: ${COLORS.white};
  border-radius: 15px;
`;
