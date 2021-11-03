import styled from "styled-components";
import { DefaultText } from "../../components/general/text/Text.style";
import { COLORS } from "../../constants/colors";

export const Section = styled.section`
  /* width: 100; */
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const LeftSideContainer = styled.div`
  width: 1080px;
  height: 752px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${COLORS.backgroundColor};
`;

export const RightSideContainer = styled.div`
  width: 500px;
  height: 750px;
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
  padding: 16px 15px;
  margin: 25px 15px;
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
  /* width: 400px;
  height: 80px; */
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
  margin-top: 5px;
`;

export const NetLoginHead = styled(DefaultText)`
  font-size: 17px;
  font-weight: 500;
  /* margin-bottom: 15px; */
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

export const LanguageHead = styled(DefaultText)`
  color: ${COLORS.fontColors};
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 55px;
  margin-left: 300px;
  cursor: pointer;
  color: ${(props) => (props.primary ? COLORS.borderGray : COLORS.fontColors)};
`;

export const InfoParagraphContainer = styled.div`
  width: 500px;
  margin-left: 55px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

export const RightSideInfoParagraph = styled(DefaultText)`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 25px;
  /* margin-left: 25px; */
  /* padding: 5px 25px; */
  text-align: start;
  color: ${COLORS.fontColors};
`;

export const BulpParagraph = styled.p`
  font-weight: 500;
  font-size: 19px;
  margin-top: 10px;
  color: ${COLORS.fontColors};
`

export const BulpContainer = styled.div`
  width: 500px;
  display: flex;
  /* margin-right: 160px; */
  margin-left: 50px;
  /* align-items: flex-start; */
  /* justify-content: flex-start; */
  /* flex: start; */
  border-top: 1px solid ${COLORS.borderGray};
`