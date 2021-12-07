import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const Container = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding: 6px 20px;
  border-width: 2px;
  border: 1px solid ${COLORS.primaryPink};
  border-radius: 20px;
  padding-bottom: 8px;
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  color: ${(props) => (props.primary ? COLORS.white : COLORS.primaryPink)};
  background-color: ${(props) =>
    props.primary ? COLORS.primaryPink : COLORS.white};
  margin: 0px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${COLORS.white};
    background-color: ${COLORS.primaryPink};
  }
  ${(props) =>
    props.active &&
    `{
    color: ${COLORS.white};
    background-color: ${COLORS.primaryPink};
  }`}
`;
