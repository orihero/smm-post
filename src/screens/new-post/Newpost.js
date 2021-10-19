import React, { useState } from "react";
import scripka from '../../assets/scripka.svg';
import smile from '../../assets/smile.svg';
import previewimg from '../../assets/Vector.svg';
import RoundButton from "../../components/buttons/RoundButton";
import databutton from '../../assets/databutton.svg'
import {
    AttachmantsDiv, Container,
    ContainerBox, OptionsDiv, ParagpaphFirst, PostContainer, PostDivs, Preview, PreviewButton,
    PreviewIcon, ScripcsIcon, SmileIcon, Textarea, TextareaContainer, TextsDiv,
    TipDiv,
    TipHead,
    DataDiv,
    DataButton,
    DataImg
} from "./Newpost.styles";

let tabs = ["Запланированные", "Опубликованные", "Избранное", "Черновики"];

export default function Home() {
    const [activeTab, setActiveTab] = useState(0);

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
                                <PreviewButton>
                                    <PreviewIcon src={previewimg} />
                                </PreviewButton>
                            </TipDiv>
                            <TextareaContainer>
                                <Textarea id="w3review" name="w3review" rows="8" placeholder="Напишите текст" />
                                <AttachmantsDiv>
                                    <ScripcsIcon src={scripka} />
                                    <SmileIcon src={smile} />
                                </AttachmantsDiv>
                            </TextareaContainer>
                            <DataDiv>Время:
                                <DataButton>Сейчас
                                    <DataImg src={databutton} />
                                </DataButton>
                            </DataDiv>
                            <DataDiv>Время:</DataDiv>
                        </PostContainer>
                        <Preview></Preview>
                    </PostDivs>
                </ContainerBox>
            </Container>
        </>
    );
}
