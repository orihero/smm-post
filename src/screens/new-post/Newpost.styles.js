import styled from "styled-components";
import { DefaultText } from "../../components/general/text/Text.style";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
`

export const OptionsDiv = styled.div`
  display: flex;
  align-items: center;
`

export const Preview = styled.div`
  display: flex;
  margin-top: 60px;
  flex: 1;
  margin-left: 15px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 60px 40px;
  padding: 40px;
  background-color: ${COLORS.white};
`;

export const ContainerBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.backgroundColor};
`;

export const UserIcon = styled.img``;

export const ComponentsDiv = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const TextsDiv = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 28%;
  cursor: pointer;
`;

export const ParagpaphFirst = styled.p`
  padding-bottom: 6px;
  margin-right: 40px;
  font-size: 17px;
  font-weight: 400;
  &:hover {
    border-bottom: 3px solid ${COLORS.primaryPink};
    color: ${COLORS.primaryPink};
  }
  ${(props) =>
    props.active &&
    `{
        border-bottom: 3px solid ${COLORS.primaryPink};
        color: ${COLORS.primaryPink};
    }`}
`;

export const MakePostDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LotusIcon = styled.img`
  width: 80px;
  margin-bottom: 2%;
`;

export const PostsHead = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 2%;
`;

export const PostParagraph = styled.p`
  text-align: center;
  color: #10204666;
`;

export const ButtonFirst = styled.button`
  width: 180px;
  height: 38px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  color: ${COLORS.white};
  background-color: ${COLORS.primaryPink};
  margin-top: 5%;
`;

export const PostDivs = styled.div`
  display: flex;
  flex: 1;
`;

export const TipDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const TipHead = styled.h1`
  color: #102046;
  font-weight: 600;
  font-size: 20px;
`;

export const PreviewButton = styled.div`
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? COLORS.primaryPink : COLORS.white};
  color: ${(props) => (props.active ? COLORS.white : COLORS.primaryPink)};
`;

export const PreviewIcon = styled.img`
  color: ${COLORS.white};
`;

export const TextareaContainer = styled.div`
  border: 1px solid rgba(16, 32, 70, 0.6);
  border-radius: 10px;
  padding: 10px;
  flex: 1;
`;

export const Textarea = styled.textarea`
  width: 100%;
  display: flex;
  resize: none;
  outline: none;
  border: none;
  font-size: 16px;
  flex: 1;
  border-bottom: 1px solid ${COLORS.borderGray};
  padding-top: 5px;
`;

export const AttachmantsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
`;

export const ScripcsIcon = styled.img`
  height: 46px;
  width: 30px;
  left: 456px;
  top: 544px;
  border-radius: 10px;
  cursor: pointer;
`;

export const SmileIcon = styled.img`
  height: 31px;
  width: 50px;
  left: 3px;
  top: 3px;
  border-radius: 0px;
  cursor: pointer;
`;

export const DataDiv = styled.div`
  display: flex;
  align-items: center;
  color: #102046;
  flex: 1;
  margin-top: 25px;
  border-top: 1px solid rgba(16, 32, 70, 0.1);
`;

export const DataButton = styled.div`
  padding: 2px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  border: 1px solid ${COLORS.primaryPink};
  font-weight: 400;
  color: #102046;
  margin-left: 15px;
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;
  margin-top: 15px;
`;

export const DataHead = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
`;

export const DataImg = styled.img`
  margin-left: 10px;
`;

export const TemasButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.primaryPink};
  border-radius: 15px;
  padding: 1px 10px;
  padding-bottom: 3px;
  color: ${COLORS.primaryPink};
  font-weight: 500;
  margin-left: 15px;
  margin-top: 15px;
  cursor: pointer;
  opacity: 0.6;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  color: ${(props) => (props.primary ? COLORS.white : COLORS.primaryPink)};
  background-color: ${(props) =>
    props.primary ? COLORS.primaryPink : COLORS.white};
  &:hover {
    color: ${COLORS.white};
    background-color: ${COLORS.primaryPink};
  }
  ${(props) =>
    props.active &&
    `{
        background-color: ${COLORS.primaryPink};
        color: ${COLORS.white};
    }`}
`;

export const AddPLusBox = styled.div`
  border-radius: 25px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

export const ButtonsDiv = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 25px;
  border: 1px solid ${COLORS.primaryPink};
  color: ${COLORS.primaryPink};
  font-weight: 500;
`;

export const PreviewContainer = styled.div`
  padding: 15px;
  margin-left: 5px;
`;

export const PreviewHead = styled.h1``;

export const PreviewContainerOne = styled.div`
  width: 400px;
  border-radius: 20px;
  margin-bottom: 70px;
  background-color: #fcfcfc;
  box-shadow: 0px 1px 17px rgba(124, 124, 124, 0.08);
`;

export const PreviewInstaPage = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  outline: 2px solid ${COLORS.instaborderColor};
  background-color: ${COLORS.white};
`;

export const InstaPageIn = styled.div`
  display: flex;
  padding: 15px 15px;
  margin-right: 169px;
`;

export const InstaBox = styled.div`
  padding: 10px 10px;
  border-radius: 25px;
  outline: 1px solid ${COLORS.borderGray};
  background-color: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const InstaPostsImageBox = styled.img`
  width: 370px;
  height: 360px;
`;

export const CommentsContainer = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 15px;
`;

export const NiceIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;
  font-size: 13px;
  font-weight: 500;
  color: ${COLORS.fontColors};
  opacity: 0.7;
  cursor: pointer;
`;

export const SendIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 10px;
  font-size: 13px;
  font-weight: 500;
  color: ${COLORS.fontColors};
  opacity: 0.7;
  cursor: pointer;
`;

export const CommentsIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  font-size: 12px;
  font-weight: 500;
  color: ${COLORS.fontColors};
  opacity: 0.7;
  cursor: pointer;
`;

export const PreviewInstaInHead = styled(DefaultText)`
  font-size: 19px;
  font-weight: 400;
  color: ${COLORS.fontColors};
  margin-bottom: 5px;
`;

export const PreviewInstaInHeadSpan = styled(DefaultText)`
  font-size: 13px;
  font-weight: 500;
  color: ${COLORS.fontColors};
  opacity: 0.7;
`;

export const PreviewContainerHeader = styled.div`

display: flex;
background-color: ${COLORS.white};
justify-content: space-between;
border-radius: 20px;
`

export const PreviewContainerHeaderIcon = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PreviewContainerHeaderIconOne = styled.div`
  margin-top: 80px;
  margin-bottom: 20px;
`;

export const MassageImageBox = styled.img`
  width: 97px;
  height: 90px;
  color: ${COLORS.fontColors};
  opacity: 0.5;
`
export const DiscussionsBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 75px;
`

export const DiscussionsHead = styled(DefaultText)`
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.fontColors};
  opacity: 0.7;
  margin-top: 45px;
`
export const TurnOnButton = styled.button`
  padding: 10px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.primaryPink};
  color: ${COLORS.white};    
  border: none;
  border-radius: 15px;
  padding-bottom: 8px;
  cursor: pointer;
  margin-top: 35px;
  &:hover {
    box-shadow: 0px 5px 15px 2px rgba(242, 30, 58, 0.2);
  }
`

export const PreviewContainerHeaderText = styled.p`
  padding: 15px 48px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid ${COLORS.primaryPink};
    color: ${COLORS.primaryPink};
  }
  ${(props) =>
    props.active &&
    `{
        border-bottom: 3px solid ${COLORS.primaryPink};
        color: ${COLORS.primaryPink};
    }`}
`;

export const NetsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  margin-right: 25px;
`;

export const MBContainer = styled.div`
  padding: 22px;
  border-radius: 35px;
  position: relative;
  background-color: ${COLORS.backgroundColor};
  outline: 2px solid ${COLORS.borderGray};
  color: ${COLORS.fontColors};
  cursor: pointer;
  margin-left: 15px;
  &:hover {
    outline: 1px solid ${COLORS.primaryPink};
  }
  ${(props) =>
    props.active &&
    `{
     outline: 3px solid ${COLORS.primaryPink}
   }`}
`;

export const NewpostFacebookIcon = styled.div`
  width: 20px;
  height: 30px;
  background-color: ${COLORS.facebookBackgroundColor};
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 35px;
  padding: 2px 7px;
  margin: -8px -2px;
  cursor: pointer;
`;

export const NewpostVkontakteIcon = styled.div`
  width: 20px;
  height: 30px;
  background-color: ${COLORS.vkontakteBackgroundColor};
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 35px;
  padding: 2px 7px;
  margin: -8px -2px;
  cursor: pointer;
`;

export const NewpostTwitterIcon = styled.div`
  width: 20px;
  height: 30px;
  background-color: ${COLORS.twitterBackgroundColor};
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 35px;
  padding: 2px 7px;
  margin: -8px -2px;
  cursor: pointer;
`;

export const NewpostInstagramIcon = styled.div`
  width: 20px;
  height: 30px;
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
  padding: 2px 7px;
  margin: -8px -2px;
  cursor: pointer;
`;

export const MBPlusContainer = styled.div`
  padding: 15px 23px;
  border-radius: 35px;
  position: relative;
  background-color: ${COLORS.backgroundColor};
  outline: 2px solid ${COLORS.borderGray};
  cursor: pointer;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    outline: 2px solid ${COLORS.primaryPink};
  }
`;

export const MBPlusParagraph = styled(DefaultText)`
  font-size: 25px;
  opacity: 0.7;
  margin-top: 5px;
  color: ${COLORS.fontColors};
`;
