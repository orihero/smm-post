import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { DefaultText } from "../text/Text.style";

export const PlansButtonContainer = styled(DefaultText)`
  font-weight: 600;
  font-size: 19px;
  width: 262px;
  height: 55px;
  border: 1px solid ${COLORS.primaryPink};
  border-radius: 25px;
  cursor: pointer;
  background-color: ${COLORS.primaryPink}
  margin-left: 30px;
`
