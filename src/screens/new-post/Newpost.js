import React, { useState } from "react";
import scripka from "../../assets/scripka.svg";
import smile from "../../assets/smile.svg";
import previewimg from "../../assets/Vector.svg";
import RoundButton from "../../components/buttons/RoundButton";
import databutton from "../../assets/databutton.svg";
import {
    AttachmantsDiv,
    Container,
    ContainerBox,
    OptionsDiv,
    ParagpaphFirst,
    PostContainer,
    PostDivs,
    Preview,
    PreviewButton,
    PreviewIcon,
    ScripcsIcon,
    SmileIcon,
    Textarea,
    TextareaContainer,
    TextsDiv,
    TipDiv,
    TipHead,
    DataDiv,
    DataButton,
    DataImg,
    DataHead,
    TemasButton,
    ButtonsContainer,
    ButtonsDiv,
    PreviewContainer,
    PreviewHead,
} from "./Newpost.styles";
import { colors } from "../../constants/colors";

let tabs = ["Запланированные", "Опубликованные", "Избранное", "Черновики"];

export default function Home() {
    const [activeTab, setActiveTab] = useState(0);
    const [previewing, setPreviewing] = useState(false);
    return (
        <>
            <Container>
                <ContainerBox>
                    <TextsDiv>
                        {tabs.map((e, i) => {
                            return (
                                <ParagpaphFirst
                                    active={i === activeTab}
                                    onClick={() => setActiveTab(i)}
                                >
                                    {e}
                                </ParagpaphFirst>
                            );
                        })}
                    </TextsDiv>
                    <PostDivs>
                        <PostContainer>
                            <TipDiv>
                                <OptionsDiv>
                                    <TipHead>Тип:</TipHead>
                                    <RoundButton active text="Пост" />
                                    <RoundButton text="Сторис" />
                                    <RoundButton text="IGTV" />
                                    <RoundButton text="Карусель" />
                                </OptionsDiv>
                                <PreviewButton active={previewing} onClick={() => setPreviewing(!previewing)}>
                                    <svg width="32" height="25" viewBox="0 0 32 25" stroke={previewing ? colors.white : "#E8427E"} fill={previewing ? colors.white : "#E8427E"} xmlns="http://www.w3.org/2000/svg">
                                        <path stroke={previewing ? colors.white : "#E8427E"} d="M29.3242 0.125H3.07422C2.49406 0.125 1.93766 0.342298 1.52742 0.729092C1.11719 1.11589 0.886719 1.64049 0.886719 2.1875V22.8125C0.886719 23.3595 1.11719 23.8841 1.52742 24.2709C1.93766 24.6577 2.49406 24.875 3.07422 24.875H29.3242C29.9044 24.875 30.4608 24.6577 30.871 24.2709C31.2812 23.8841 31.5117 23.3595 31.5117 22.8125V2.1875C31.5117 1.64049 31.2812 1.11589 30.871 0.729092C30.4608 0.342298 29.9044 0.125 29.3242 0.125ZM3.07422 2.1875H20.5742V22.8125H3.07422V2.1875ZM29.3242 22.8125H22.7617V2.1875H29.3242V22.8125Z" />
                                    </svg>
                                </PreviewButton>
                            </TipDiv>
                            <TextareaContainer>
                                <Textarea
                                    id="w3review"
                                    name="w3review"
                                    rows="8"
                                    placeholder="Напишите текст"
                                />
                                <AttachmantsDiv>
                                    <ScripcsIcon src={scripka} />
                                    <SmileIcon src={smile} />
                                </AttachmantsDiv>
                            </TextareaContainer>
                            <DataDiv>
                                <DataHead>Время:</DataHead>
                                <DataButton>
                                    Сейчас
                                    <DataImg src={databutton} />
                                </DataButton>
                            </DataDiv>
                            <DataDiv>
                                <DataHead>Темы:</DataHead> <TemasButton>Образовательный</TemasButton> <TemasButton>Продающий</TemasButton>
                            </DataDiv>
                            <ButtonsContainer>
                                <RoundButton primary active={true} >В черновики</RoundButton>
                                <RoundButton active={true}>Опубликовать сейчас</RoundButton>
                            </ButtonsContainer>
                        </PostContainer>
                        <Preview>
                            <PreviewHead></PreviewHead>
                            <PreviewHead></PreviewHead>
                            {previewing ? "Предпросмотр" : null}
                            {previewing ? "Обсуждения" : null}
                        </Preview>
                    </PostDivs>
                </ContainerBox>
            </Container>
        </>
    );
}
