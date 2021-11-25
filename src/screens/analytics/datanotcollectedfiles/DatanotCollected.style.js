import styled from "styled-components";
import { DefaultText } from "../../../components/general/text/Text.style";
import { COLORS } from "../../../constants/colors";

export const NotCollecteBox = styled.div`
  padding: 205px 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.white};
`;

export const NotCollectedHeads = styled.div`
  padding: 15px 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const SandTimeImageBox = styled.img`
    width: 60px;
    height: 100px;
    margin-bottom: 15px;
`;

export const HeadsThisBox = styled(DefaultText)`
  font-size: 35px;
  font-weight: 600;
  color: ${COLORS.fontColors};
  margin-bottom: 15px;
`;

export const ParagraphThisBox = styled(DefaultText)`
  color: ${COLORS.fontColors};
  font-size: 19px;
  font-weight: 400;
  margin-bottom: 15px;
`;
