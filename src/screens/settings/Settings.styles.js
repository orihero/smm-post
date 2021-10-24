import styled from "styled-components";
import { DefaultText } from "../../components/general/text/Text.style";
import { COLORS } from "../../constants/colors";

export const SettingsContainer = styled.div`
  background-color: ${COLORS.backgroundColor};
`;

export const CardContainer = styled(DefaultText)`
  background-color: ${COLORS.white};
  border-radius: 20px;
  width: 900px;
  margin-left: 55px;
  box-shadow: 0px 1px 17px rgba(124, 124, 124, 0.08);
`;

export const CardHead = styled.h1`
  font-size: 25px;
  font-weight: 600;
  padding: 25px;
  margin-left: 45px;
  margin-top: 15px;
  color: ${COLORS.fontColors};
`;

export const HeadCard = styled.p`
    font-size: 19px;
    font-weight: 400;
    padding: 5px;
    margin: 15px 0px;
    margin-left: 55px;
`

export const ButtonContainer = styled.div`
    display: flex;
    margin-left: 50px;
    padding-bottom: 20px;
`