import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const Buttons = styled.div`
  padding: 12px;
  margin: 30px;
  color: ${COLORS.primaryPink};
  border: 2px solid ${COLORS.primaryPink};
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
   background-color: ${COLORS.primaryPink};
   color: ${COLORS.white};
  }
`;
