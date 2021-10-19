import React from 'react'
import emailimg from '../../../assets/email.png'
import posts from '../../../assets/Newpost.png'
import pensol from '../../../assets/Pensol.png'
import calendar from "../../../assets/Calendar.png"
import analitka from '../../../assets/Analitka.png'
import setting1 from '../../../assets/settings 1.png'
import settings2 from '../../../assets/settings 2.png'
import Vektor from "../../../assets/Vector.png"
import {
    AnalitkaImg,
    AnalitkaParagraph,
    ButtonParagpraph,
    ButtonsDiv,
    CalendarImg,
    CalendarParagraph,
    Container,
    ElementsDiv,
    EmailImg,
    LeftSide,
    LeftSideBox,
    LeftSideButton,
    LeftSideButtonSecond,
    NewPostsImg,
    PensolImg,
    PensolParagraph,
    PostsParagraph,
    SettingsFirstImg,
    SettingsFirstParagraph,
    SettingsSecondImg,
    SettingsSecondParagraph,
    VectorImg
} from './Sidebar.styles'
import { useHistory } from 'react-router';


function Sidebar() {
    let history = useHistory();
    let onNavigate = (link) => {
        return () => {
            history.push(link)
        }
    }
    return (
        <>
            <Container>
                <LeftSide>
                    <EmailImg src={emailimg} />
                    <ButtonsDiv>
                        <LeftSideButton>
                            <ButtonParagpraph>Первый проект</ButtonParagpraph>
                            <VectorImg src={Vektor} />
                        </LeftSideButton>
                        <LeftSideButtonSecond>+</LeftSideButtonSecond>
                    </ButtonsDiv>
                    <LeftSideBox>
                        <ElementsDiv onClick={onNavigate("/newpost")}>
                            <NewPostsImg src={posts} />
                            <PostsParagraph>Новый пост</PostsParagraph>
                        </ElementsDiv>
                        <ElementsDiv>
                            <PensolImg src={pensol} />
                            <PensolParagraph>Черновики</PensolParagraph>
                        </ElementsDiv>
                        <ElementsDiv>
                            <CalendarImg src={calendar} />
                            <CalendarParagraph>Публикации</CalendarParagraph>
                        </ElementsDiv>
                        <ElementsDiv>
                            <AnalitkaImg src={analitka} />
                            <AnalitkaParagraph>Аналитика</AnalitkaParagraph>
                        </ElementsDiv>
                        <ElementsDiv>
                            <SettingsFirstImg src={setting1} />
                            <SettingsFirstParagraph>Инструменты</SettingsFirstParagraph>
                        </ElementsDiv>
                        <ElementsDiv>
                            <SettingsSecondImg src={settings2} />
                            <SettingsSecondParagraph>Настройки</SettingsSecondParagraph>
                        </ElementsDiv>
                    </LeftSideBox>
                </LeftSide>
            </Container>
        </>
    )
}

export default Sidebar
