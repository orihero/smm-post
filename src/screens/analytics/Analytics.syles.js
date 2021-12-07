import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  background-color: ${COLORS.backgroundColor};
`;

export const AnalyticTextContainer = styled.p`
  font-size: 18px;
  margin-left: 18px;
  padding: 15px 15px;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.active &&
    `{
   border-bottom: 3px solid ${COLORS.primaryPink};
   color: ${COLORS.primaryPink};
    }`}
    &:hover {
      color: ${COLORS.primaryPink};
      border-bottom: 3px solid ${COLORS.primaryPink};
    }
`;

export const AnalyticsParagraph = styled.p`
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: 600;
  color: ${COLORS.fontColors};
`;

export const DateButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  margin-left: 360px;
`;

export const DateButtonBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  border-radius: 10px;
  background-color: ${COLORS.white};
  color: ${COLORS.fontColors};
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export const ExportBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 15px;
  color: ${COLORS.fontColors};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export const OptionBox = styled.div`
  position: absolute;
  display: flex;
  padding: 5px 5px;
  background-color: ${COLORS.white};
  /* bottom: 0; */
  right: 100;
  top: 30;
  margin-top: 150px;
  flex-direction: column;
  box-shadow: 0px 1px 16px rgba(90, 90, 90, 0.06);
  border-radius: 15px;
`;

export const OptionsHeads = styled.div`
  padding: 10px 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 19px;
  font-weight: 500;
  &:hover{
    color: ${COLORS.primaryPink};
  }
`;
