import styled from "styled-components";
import { DefaultText } from "../../../components/general/text/Text.style";
import { COLORS } from "../../../constants/colors";

export const SectionContainer = styled.div`
  /* width: 1000px; */
  /* height: 100vh; */
  display: flex;
  /* align-items: center; */
  /* justify-content: center\; */
  /* flex-direction: column; */
`;

export const LeftSideContainer = styled.div`
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 420px;
  margin-top: 65px;
`

export const RightSideContainer = styled.div`
  padding: 10px;
  margin-left: 300px;
  margin-top: 35px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const RightSideLanguageBox = styled(DefaultText)`
  color: ${COLORS.fontColors};
  font-size: 19px;
  font-weight: 500;
  margin-left: 15px;
  display: flex;
`
export const RightSideRuBox = styled(DefaultText)`
  margin-left: 20px;
  color: ${COLORS.fontColors};
  font-size: 19px;
  font-weight: 500;
`

export const ComeInHead = styled(DefaultText)`
  font-size: 60px;
  font-weight: 600;
  color: ${COLORS.fontColors};
`;

export const RegisterInputs = styled.input`
  width: 460px;
  font-size: 18px;
  padding: 16px 15px;
  margin: 25px 15px;
  border-radius: 15px;
  color: ${COLORS.fontColors};
  outline: none;
  border: 2px solid ${COLORS.inputBorderColor};
`;

export const ForgotPasswordContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ForgotPasswordParagraph = styled(DefaultText)`
  font-size: 19px;
  font-weight: 500;
  color: ${COLORS.blue};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const NetLogin = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 55px;
`;

export const NetTabDiv = styled.div`
  width: 500px;
  display: flex;
  border-top: 1px solid ${COLORS.borderGray};
  margin-top: 5px;
`;

export const NetLoginHead = styled(DefaultText)`
  font-size: 17px;
  font-weight: 500;
  color: ${COLORS.fontColors};
`;

export const GoogleIconsBox = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.googleBackgroundColor};
  color: ${COLORS.white};
  border-radius: 18px;
  cursor: pointer;
  margin-top: 5px;
`;

export const FaceBookIconsBox = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.facebookBackgroundColor};
  color: ${COLORS.white};
  border-radius: 18px;
  cursor: pointer;
  margin-left: 15px;
  margin-top: 5px;
`;

export const VkontakteIconsBox = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.vkontakteBackgroundColor};
  border-radius: 15px;
  cursor: pointer;
  margin-left: 15px;
  margin-top: 5px;
`;

export const TwitterIconsBox = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.twitterBackgroundColor};
  color: ${COLORS.white};
  border-radius: 15px;
  cursor: pointer;
  margin-left: 15px;
  margin-top: 5px;
`;
