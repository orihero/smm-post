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
  color: ${COLORS.fontColors};
`;

export const PlansScrensText = styled(DefaultText)`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.fontColors};
`;

export const PlansScreensSpan = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.fontColors};
  opacity: 0.7;
`;

export const PlansCardContianer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PlansScrensCard = styled.div`
  flex-direction: column;
`;

export const PlansScrensdiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PlansScrensTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlansScrensTextContainerOne = styled.p`
  display: flex;
  align-items: center;
`;
export const IconContainer = styled.div`
  margin-right: 10px;
`;
export const PlansScrensTextSpan = styled.span`
  opacity: 0.7;
  margin-left: 33px;
`;
