import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const OptionsDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Preview = styled.div`
  display: flex;
  flex: 1;
  margin-left: 15px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 60px 40px;
  padding: 40px;
  background-color: ${colors.white};
`;

export const ContainerBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7fafc;
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
  font-size: 17px;
  font-weight: 400;
  &:hover {
    border-bottom: 3px solid ${colors.primaryPink};
    color: ${colors.primaryPink};
  }
  ${(props) =>
        props.active &&
        `{
        border-bottom: 3px solid ${colors.primaryPink};
        color: ${colors.primaryPink};
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
  color: #fff;
  background-color: ${colors.primaryPink};
  margin-top: 5%;
`;

export const PostDivs = styled.div`
  display: flex;
  flex: 1;
`;

export const TipDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(16, 32, 70, 0.1);
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
  background-color: ${props => props.active ? colors.primaryPink : colors.white};
  color: ${(props) => (props.active ? colors.white : colors.primaryPink)};
`;

export const PreviewIcon = styled.img`
  color: ${colors.white};
`;

export const TextareaContainer = styled.div`
  border: 1px solid rgba(16, 32, 70, 0.6);
  border-radius: 10px;
  padding: 17px;
  flex: 1;
  /* margin-top: 15px; */
`;

export const Textarea = styled.textarea`
  width: 100%;
  display: flex;
  resize: none;
  outline: none;
  border: none;
  font-size: 16px;
  flex: 1;
  border-bottom: 1px solid rgba(16, 32, 70, 0.1);
  /* margin-top: 40px; */
`;

export const AttachmantsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 50px; */
`;

export const ScripcsIcon = styled.img`
  height: 46px;
  width: 30px;
  left: 456px;
  top: 544px;
  border-radius: 10px;
`;

export const SmileIcon = styled.img`
  height: 31px;
  width: 50px;
  left: 3px;
  top: 3px;
  border-radius: 0px;
`;

export const DataDiv = styled.div`
  display: flex;
  align-items: center;
  color: #102046;
  flex: 1;
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(16, 32, 70, 0.1);
`;

export const DataButton = styled.div`
  padding: 2px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  border: 1px solid ${colors.primaryPink};
  font-weight: 400;
  color: #102046;
  margin-left: 15px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const DataHead = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;

export const DataImg = styled.img`
  margin-left: 10px;
`;

export const TemasButton = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.primaryPink};
  border-radius: 15px;
  padding: 1px;
  padding-left: 15px;
  padding-right: 15px;
  color: ${colors.primaryPink};
  font-weight: 500;
  margin-left: 15px;
`;

export const ButtonsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsDiv = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 25px;
  border: 1px solid ${colors.primaryPink};
  color: ${colors.primaryPink};
  font-weight: 500;
  /* margin-left: 5px; */
`;

export const PreviewContainer = styled.div `
    padding: 15px;
    margin-left: 5px;
    /* font-size: 18px; */
    /* line-height: none; */
`
export const PreviewHead = styled.h1 ``

