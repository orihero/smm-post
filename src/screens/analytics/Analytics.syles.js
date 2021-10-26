import styled from "styled-components";
import { COLORS } from "../../constants/colors";
  
export const BarContainer = styled.div`
    /* border: none; */
    /* width: 100%; */
    height: 1000px;
    display: flex;
    flex-direction: column;
`

export const AnalyticTextContainer = styled.div`
  font-size: 18px;
  margin-top:35px 35px;
  /* margin-left: 15px; */
  padding-bottom: 10px;
  ${(props) => props.active && `{
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
