import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
`;

export const AnalyticTextContainer = styled.p`
  font-size: 18px;
  margin-left: 18px;
  ${(props) =>
    props.active &&
    `{
   border-bottom: 3px solid ${COLORS.primaryPink};
   color: ${COLORS.primaryPink};
    }`}
`;

export const AnalyticsParagraph = styled.p`
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: 600;
  color: ${COLORS.fontColors};
`;
