import styled from "styled-components";
const hoverColor = '#E8427E'

export const Container = styled.section`
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #E5E5E5;
    position: fixed;
`;

export const EmailImg = styled.img`
    margin-right: 35%;
    margin-top: 8%;
    width: 80px;
`;

export const ButtonsDiv = styled.div`
    width: 90%;
    height: 10%;
    display: flex;
    align-items: center;
`;

export const VectorImg = styled.img`
    margin-left: 8%;
    margin-top: 3%;
`;

export const LeftSideButton = styled.div`
    width: 170px;
    height: 40px;
    border-radius: 15px 0 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    cursor: pointer;
    border: none;
    border: 1px solid gray;
`;

export const ButtonParagpraph = styled.p``;

export const LeftSideButtonSecond = styled.button`
    width: 40px;
    height: 42px;
    border-radius: 0 15px 15px 0;
    margin-left: 1%;
    font-size: 20px;
    cursor: pointer;
    background-color: #fff;
    border: none;
    border: 1px solid gray;
`;

export const LeftSide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #fff;
`;

export const LeftSideBox = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`;

export const ElementsDiv = styled.div`
    width: 95%;
    height: 10%;
    display: flex;
    align-items: center; 
    justify-content: flex-start;
    margin-top: 5%;
    margin-left: 5%;
`

export const PostsParagraph = styled.p`
    margin-left: 7%;
    font-size: 16px;
    color: #102046;
    &:hover{
        color: ${hoverColor};
    }
`;

export const NewPostsImg = styled.img`
    width: 30px;
`;

export const PensolParagraph = styled.p`
    margin-left: 7%;
    font-size: 16px;
    color: #102046;
    &:hover{
        color: ${hoverColor};
    }
`;

export const PensolImg = styled.img`
    width: 30px;
`;

export const CalendarParagraph = styled.p`
    margin-left: 7%;
    font-size: 16px;
    &:hover{
        color: ${hoverColor};
    }
`;

export const CalendarImg = styled.img`
    width: 30px;
`;

export const AnalitkaParagraph = styled.p`
    margin-left: 7%;
    font-size: 16px;
    color: #102046;
    &:hover{
        color: ${hoverColor};
    }
`;

export const AnalitkaImg = styled.img`
    width: 30px;
`;

export const SettingsFirstParagraph = styled.p`
    margin-left: 7%;
    font-size: 16px;
    color: #102046;
    &:hover{
        color: ${hoverColor};
    }
`;

export const SettingsFirstImg = styled.img`
    width: 30px;
`;

export const SettingsSecondParagraph = styled.p`
    margin-left: 7%;
    font-size: 16px;
    color: #102046;
     &:hover{
        color: ${hoverColor};
    }
`;

export const SettingsSecondImg = styled.img`
    width: 30px;
`;
