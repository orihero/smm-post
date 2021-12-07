import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { DefaultText } from "../../../components/general/text/Text.style";

export const MonthContainer = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MothHeads = styled(DefaultText)`
  color: ${COLORS.fontColors};
  font-weight: 500;
  font-size: 18px;
  margin-top: 5px;
`;

export const NextMothBox = styled.div`
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${COLORS.white};
`;

export const BackMonthBox = styled.div`
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-left: 250px;
  cursor: pointer;
  background-color: ${COLORS.white};
`;

export const CalendarContainer = styled.div`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WeeksContainer = styled.div`
  padding: 15px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const WeeksName = styled(DefaultText)`
  margin: 10px 10px;
  font-weight: 400;
  font-size: 16px;
  opacity: 0.7;
  color: ${COLORS.fontColors};
  cursor: pointer;
`;

export const DateBoxs = styled(DefaultText)`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.fontColors};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 10px;
  ${(props) =>
    props.active &&
    `{
      background-color: ${COLORS.primaryPink};
      color: ${COLORS.white};
      // padding: 8px 10px; 
  }`}
`;

export const DateSpan = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.fontColors};
  opacity: 0.7;
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  ${(props) =>
    props.active &&
    `{
      background-color: ${COLORS.primaryPink};
      color: ${COLORS.white};
  }`}
`;

export const DaysBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NowBox = styled(DefaultText)`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.blueColor};
  margin-bottom: 15px;
  cursor: pointer;
  ${(props) =>
    props.active &&
    `{
       opacity: 0.7;
  }`}
`;

export const TomorrowBox = styled(DefaultText)`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.blueColor};
  margin-bottom: 15px;
  margin-left: 15px;
  cursor: pointer;
  ${(props) =>
    props.active &&
    `{
      opacity: 0.7;
  }`}
`;

export const TimeBox = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 15px;
`;
