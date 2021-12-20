import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { DefaultText } from "../text/Text.style";

export const Buttons = styled(DefaultText)`
  font-size: 18px;
  font-weight: 500;
  padding: 17px 155px;
  border: 1px solid ${COLORS.primaryPink};
  border-radius: 20px;
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  color: ${(props) => (props.primary ? COLORS.white : COLORS.primaryPink)};
  background-color: ${(props) =>
    props.primary ? COLORS.primaryPink : COLORS.white};
  margin: 15px;
  margin-right: 30px;
  &:hover {
    -webkit-box-shadow: 1px 0px 29px 6px rgba(232, 66, 126, 0.2);
    -moz-box-shadow: 1px 0px 29px 6px rgba(232, 66, 126, 0.2);
    box-shadow: 1px 0px 29px 6px rgba(232, 66, 126, 0.2);
  }
`;
