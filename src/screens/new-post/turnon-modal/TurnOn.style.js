import styled from "styled-components";
import { DefaultText } from "../../../components/general/text/Text.style";
import { COLORS } from "../../../constants/colors";

export const ModalBackgrundHelp = styled.div`
  width: 100%;
  height: 120vh;
  background-color: rgba(200, 200, 200, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
`;

export const ModalContainerHelp = styled.div`
  width: 700px;
  height: 630px;
  padding-bottom: 40px;
  border-radius: 12px;
  background-color: ${COLORS.white};
  padding: 25px;
  margin-top: 5px;
  margin-right: 250px;
`;

export const ModalBoxHelp = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: 600;
  justify-content: space-between;
  padding-bottom: 11px;
  color: ${COLORS.fontColors};
`;

export const ModalExitHelp = styled.div`
  padding: 10px 10px;
  background-color: ${COLORS.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  cursor: pointer;
`;

export const WorkforPostsContainer = styled.div`
  padding: 15px 2px;
  display: flex;
  margin-right: 5px;
`;

export const WorkforPostsHead = styled(DefaultText)`
  font-size: 19px;
  font-weight: 400;
  color: ${COLORS.fontColors};
  opacity: 0.7;
`;

export const HeadPhoneContainer = styled.div`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
`;

export const HeadSPhoneParagraphBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ParagraphsBoxHead = styled(DefaultText)`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.fontColors};
`;

export const ParagraphsBoxHeadSpan = styled(DefaultText)`
  font-size: 19px;
  font-weight: 400;
  color: ${COLORS.fontColors};
  opacity: 0.7;
  margin-top: 5px;
`;

export const HandPhoneImageBox = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  background-color: ${COLORS.backgroundColor};
  border-radius: 8px;
  padding: 5px 5px;
`;

export const HandAndMassageContainer = styled.div`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
  border-top: 1px solid ${COLORS.borderGray};
`;

export const HandAndMassageImgBox = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: ${COLORS.backgroundColor};
  border-radius: 8px;
  padding: 5px 5px;
`;

export const HandAndMassageHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HandAndMassageParagraph = styled(DefaultText)`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.fontColors};
`;

export const HandAndMassageParagraphSpan = styled(DefaultText)`
  font-size: 17px;
  font-weight: 400;
  color: ${COLORS.fontColors};
  opacity: 0.7;
  margin-top: 5px;
`;

export const HeadPhoneImgContainer = styled.div`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
  border-top: 1px solid ${COLORS.borderGray};
`;

export const HeadPhoneImgDiv = styled.img`
  width: 50px;
  height: 50px;
  background-color: ${COLORS.backgroundColor};
  border-radius: 8px;
  margin-right: 15px;
  padding: 5px 5px;
`;

export const HeadPhoneImgDivParagraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HaedPhoneImgParagraph = styled(DefaultText)`
    font-size: 18px;
    font-weight: 600;
    color: ${COLORS.fontColors};
`

export const HeadPhoneImgParagraphSpan = styled(DefaultText)`
    font-size: 17px;
    font-weight: 400;
    color: ${COLORS.fontColors};
    opacity: 0.7;
    margin-top: 5px;
`

export const LikeHandImgContainer = styled.div`
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;
    border-top: 1px solid ${COLORS.borderGray};
    border-bottom: 1px solid ${COLORS.borderGray};
`

export const LikeHandImgBox = styled.img`
    padding: 5px 5px;
    width: 55px;
    height: 50px;
    background-color: ${COLORS.backgroundColor};
    border-radius: 8px;
    margin-right: 15px;
`

export const LikeHandImgParagraphBox = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

export const LikeHandImgParagraph = styled(DefaultText)`
    font-size: 17px;
    font-weight: 600;
    color: ${COLORS.fontColors};
`

export const LikeHandImgParagraphSpan = styled(DefaultText)`
    font-size: 16px; 
    font-weight: 400;
    color: ${COLORS.fontColors};
    opacity: 0.7;
    margin-top: 5px;
`

export const ButtonContainer = styled.div`
    padding: 15px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`