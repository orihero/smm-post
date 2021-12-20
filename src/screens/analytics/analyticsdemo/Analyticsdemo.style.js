import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  background-color: ${COLORS.backgroundColor};
`;

export const HeadsBox = styled.div`
  padding: 15px 10px;
  display: flex;
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
`;

export const AnalyticsParagraph = styled.p`
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: 600;
  margin-left: 25px;
  color: ${COLORS.fontColors};
`;

export const NetsContainer = styled.div`
  padding: 15px 15px;
  display: flex;
  align-items: center;
`

export const NetsInBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 15px;
  border-radius: 35px;
  outline: 1px solid ${COLORS.borderGray}; 
  background-color: ${COLORS.backgroundColor};
  margin-left: 15px;
  position: relative;
  cursor: pointer;
  &:hover{
    outline: 1px solid ${COLORS.primaryPink};
  }
  ${(props) =>
    props.active &&
    `{
      outline: 3px solid ${COLORS.primaryPink}
    }`
  }
`

export const PlusBox = styled.div`
  padding: 12px 18px;
  border-radius: 35px;
  outline: 1px solid ${COLORS.borderGray};
  cursor: pointer;
  background-color: ${COLORS.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-left: 15px;
  &:hover {
    outline: 1px solid ${COLORS.primaryPink};
  }
`

export const AnalyticsNetsFaceBookBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${COLORS.facebookBackgroundColor};
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 35px;
  padding: 5px 5px;
  margin: -10px -2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AnalyticsNetsVkontankteBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${COLORS.vkontakteBackgroundColor};
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 35px;
  padding: 5px 5px;
  margin: -10px -2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AnalyticsNetsTwitterBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${COLORS.twitterBackgroundColor};
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 35px;
  padding: 5px 5px;
  margin: -10px -2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AnalyticsNetsInstagramBox = styled.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(
    49.33deg,
    #ffdd55 7%,
    #ff543e 50.26%,
    #c837ab 93.53%
  );
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 35px;
  padding: 5px 5px;
  margin: -10px -2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
