import styled from "styled-components";
import { DefaultText } from "../../components/general/text/Text.style";
import { COLORS } from "../../constants/colors";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const LeftSideContainer = styled.div`
  width: 1070px;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${COLORS.backgroundColor};
`;

export const RightSideContainer = styled.div`
  width: 100px;
  height: 700px;
  display: flex;
`

export const RightSideHead = styled(DefaultText)`
  font-size: 40px;
  font-weight: 600;
  margin-left: 65px;
  color: ${COLORS.fontColors};
`;

export const LoginInput = styled.input`
  width: 460px;
  font-size: 18px;
  padding: 16px 15px;
  margin: 25px 15px;
  border-radius: 15px;
  color: ${COLORS.fontColors};
  outline: none;
  border: 2px solid ${COLORS.inputBorderColor};
`;

export const RegisterHead = styled.p`
  margin-right: 130px;
`
