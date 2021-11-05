import styled from "styled-components";
import { DefaultText } from "../../components/general/text/Text.style";
import { COLORS } from "../../constants/colors";

export const PlansScrensContainer = styled.div`
  margin-top: 20px;
  margin-left: 60px;
`;

export const PlansScrensHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7fafc;
  width: 100%;
  height: 120vh;
  padding: 40px;
`;

export const PlansScrensText = styled(DefaultText)`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.fontColors};
`;

export const PlansScreensSpan = styled.span `
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.fontColors};
  opacity: 0.7;
`

export const PlansCardContianer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PlansScrensCard = styled.div`
    flex-direction: column;
`

export const PlansScrensdiv = styled.div`
    display: flex;
    justify-content: space-between;
`
