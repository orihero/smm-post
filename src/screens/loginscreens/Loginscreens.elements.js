import styled from "styled-components";
import { DefaultText } from "../../components/general/text/Text.style";
import { COLORS } from "../../constants/colors";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const LeftSideContainer = styled.div`
  width: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${COLORS.backgroundColor};
`;

export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RightSideHead = styled(DefaultText)`
  font-size: 40px;
  font-weight: 600;
  margin-left: 65px;
  color: ${COLORS.fontColors};
`;

export const LoginInput = styled.input`
  width: 460px;
  font-size: 18px;
  padding: 15px 15px;
  margin: 15px 15px;
  border-radius: 15px;
  color: ${COLORS.fontColors};
  outline: none;
  border: 2px solid ${COLORS.inputBorderColor};
`;

export const RegisterHead = styled(DefaultText)`
  margin-right: 130px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const RegisterSpanHead = styled.span`
  color: ${COLORS.loginColors};
`;

export const RegisterHeadSecond = styled(DefaultText)`
  font-size: 17px;
  margin-right: 250px;
`;

export const RegisterLogin = styled.span`
  cursor: pointer;
  &:hover {
    color: ${COLORS.loginColors};
    border-bottom: 2px solid ${COLORS.loginColors};
  }
`;

export const NetLogin = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-right: 190px;
  margin-top: 55px;
`;

export const NetTabDiv = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${COLORS.borderGray};
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
  margin-top: 15px;
  &:hover {
    -webkit-box-shadow: 1px 1px 31px 3px rgba(244, 67, 54, 0.38);
    -moz-box-shadow: 1px 1px 31px 3px rgba(244, 67, 54, 0.38);
    box-shadow: 1px 1px 31px 3px rgba(244, 67, 54, 0.38);
  }
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
  margin-top: 15px;
  &:hover {
    -webkit-box-shadow: 1px 1px 31px 3px rgba(59, 89, 152, 0.38);
    -moz-box-shadow: 1px 1px 31px 3px rgba(59, 89, 152, 0.38);
    box-shadow: 1px 1px 31px 3px rgba(59, 89, 152, 0.38);
  }
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
  margin-top: 15px;
  &:hover {
    -webkit-box-shadow: 1px 1px 31px 3px rgba(68, 103, 141, 0.38);
    -moz-box-shadow: 1px 1px 31px 3px rgba(68, 103, 141, 0.38);
    box-shadow: 1px 1px 31px 3px rgba(68, 103, 141, 0.38);
  }
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
  margin-top: 15px;
  &:hover {
    -webkit-box-shadow: 1px 1px 31px 3px rgba(3, 169, 244, 0.38);
    -moz-box-shadow: 1px 1px 31px 3px rgba(3, 169, 244, 0.38);
    box-shadow: 1px 1px 31px 3px rgba(3, 169, 244, 0.38);
  }
`;

export const LanguageHead = styled(DefaultText)`
  color: ${COLORS.fontColors};
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 55px;
  margin-left: 300px;
  cursor: pointer;
  display: flex;
  ${(props) =>
    props.active &&
    `{
      color: ${COLORS.fontColors}
      opacity: 0.7;
    }`}
  &:hover {
    color: ${COLORS.fontColors};
    opacity: 0.7;
  }
`;

export const RightSideRuBox = styled(DefaultText)`
  color: ${COLORS.fontColors};
  font-size: 19px;
  font-weight: 500;
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
  ${(props) =>
    props.active &&
    `{
      color: ${COLORS.fontColors}
      opacity: 0.7;
    }`}
  &:hover {
    color: ${COLORS.fontColors};
    opacity: 0.7;
  }
`;

export const InfoParagraphContainer = styled.div`
  width: 500px;
  margin-left: 55px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RightSideInfoParagraph = styled(DefaultText)`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 25px;
  text-align: start;
  color: ${COLORS.fontColors};
`;

export const BulpParagraph = styled.p`
  font-weight: 500;
  font-size: 19px;
  color: ${COLORS.fontColors};
`;

export const BulpContainer = styled.div`
  width: 500px;
  display: flex;
  margin-left: 50px;
  border-top: 1px solid ${COLORS.borderGray};
`;

export const BulpIconContaier = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ChangeLanguagebox = styled.div`
  display: flex;
`;
