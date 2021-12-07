import React, { useState } from "react";
import databutton from "../../assets/databutton.svg";
import scripka from "../../assets/scripka.svg";
import smile from "../../assets/smile.svg";
import RoundButton from "../../components/general/buttons/RoundButton";
import { COLORS } from "../../constants/colors";

import {
  CommentsIcon,
  EyeIcon,
  NewpostFacebook,
  NewpostInstagram,
  NewpostTwitter,
  NewpostVkontakte,
  NiceIcon,
  PreviewInstaIcon,
  SendsIcon,
} from "../../constants/icons";
import { IMAGES } from "../../constants/images";
import ModalCalendar from "./calendar-modal/ModalCalendar";
import Modal from "./newpost-modal/ModalNewpost";
import {
  AddPLusBox,
  AttachmantsDiv,
  ButtonsContainer,
  CommentsContainer,
  CommentsIconContainer,
  Container,
  ContainerBox,
  DataButton,
  DataDiv,
  DataHead,
  DataImg,
  DiscussionsBox,
  DiscussionsHead,
  InstaBox,
  InstaPageIn,
  InstaPostsImageBox,
  MassageImageBox,
  MBContainer,
  MBPlusContainer,
  MBPlusParagraph,
  NetsContainer,
  NewpostFacebookIcon,
  NewpostInstagramIcon,
  NewpostTwitterIcon,
  NewpostVkontakteIcon,
  NiceIconContainer,
  OptionsDiv,
  PostContainer,
  PostDivs,
  Preview,
  PreviewButton,
  PreviewContainerHeader,
  PreviewContainerHeaderIcon,
  PreviewContainerHeaderIconOne,
  PreviewContainerHeaderText,
  PreviewContainerOne,
  PreviewHead,
  PreviewInstaInHead,
  PreviewInstaInHeadSpan,
  PreviewInstaPage,
  ScripcsIcon,
  SendIconContainer,
  SmileIcon,
  TemasButton,
  Textarea,
  TextareaContainer,
  TextBox,
  TipDiv,
  TipHead,
  TurnOnButton,
} from "./Newpost.styles";
import TurnOn from "./turnon-modal/TurnOn";
import { ModalBackgrundHelp } from "./turnon-modal/TurnOn.style";

let tabs = ["Запланированные", "Опубликованные", "Избранное", "Черновики"];

export default function Home() {
  const [previewing, setPreviewing] = useState(false);
  const [openModalNewpost, setOpenModalNewpost] = useState(false);
  let [selectedTab, setSelectedTab] = useState();
  const [openModalCalendar, setOpanModalCalendar] = useState(false);
  let [isSelectedTab, setIsSelectedTab] = useState();
  const [openModalTurnOn, setOpenModalTurnOn] = useState(false);
  return (
    <>
      <Container>
        <ContainerBox>
          <PostDivs>
            <PostContainer>
              <NetsContainer>
                <MBContainer
                  active
                  onClick={() => setSelectedTab(20)}
                  active={selectedTab === 20}
                >
                  MB
                  <NewpostFacebookIcon>
                    <NewpostFacebook
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "1px",
                        marginTop: "8px",
                      }}
                    />
                  </NewpostFacebookIcon>
                </MBContainer>
                <MBContainer
                  active
                  onClick={() => setSelectedTab(21)}
                  active={selectedTab === 21}
                >
                  MB
                  <NewpostVkontakteIcon>
                    <NewpostVkontakte
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "1px",
                        marginTop: "11px",
                      }}
                    />
                  </NewpostVkontakteIcon>
                </MBContainer>
                <MBContainer
                  active
                  onClick={() => setSelectedTab(22)}
                  active={selectedTab === 22}
                >
                  MB
                  <NewpostTwitterIcon>
                    <NewpostTwitter
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "1px",
                        marginTop: "9px",
                      }}
                    />
                  </NewpostTwitterIcon>
                </MBContainer>
                <MBContainer
                  active
                  onClick={() => setSelectedTab(23)}
                  active={selectedTab === 23}
                >
                  MB
                  <NewpostInstagramIcon>
                    <NewpostInstagram
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "0.5px",
                        marginTop: "5px",
                      }}
                    />
                  </NewpostInstagramIcon>
                </MBContainer>
                <MBPlusContainer
                  onClick={() => {
                    setOpenModalNewpost(true);
                  }}
                >
                  <MBPlusParagraph>+</MBPlusParagraph>
                </MBPlusContainer>
              </NetsContainer>
              <TipDiv>
                <OptionsDiv>
                  <TipHead>Тип:</TipHead>
                  <RoundButton
                    active
                    onClick={() => setSelectedTab(11)}
                    active={selectedTab === 11}
                    text="Пост"
                  />
                  <RoundButton
                    active
                    onClick={() => setSelectedTab(10)}
                    active={selectedTab === 10}
                    text="Сторис"
                  />
                  <RoundButton
                    active
                    onClick={() => setSelectedTab(12)}
                    active={selectedTab === 12}
                    text="IGTV"
                  />
                  <RoundButton
                    active
                    onClick={() => setSelectedTab(13)}
                    active={selectedTab === 13}
                    text="Карусель"
                  />
                </OptionsDiv>
                <PreviewButton
                  active={previewing}
                  onClick={() => setPreviewing(!previewing)}
                >
                  <svg
                    width="32"
                    height="25"
                    viewBox="0 0 32 25"
                    stroke={previewing ? COLORS.white : "#E8427E"}
                    fill={previewing ? COLORS.white : "#E8427E"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke={previewing ? COLORS.white : "#E8427E"}
                      d="M29.3242 0.125H3.07422C2.49406 0.125 1.93766 0.342298 1.52742 0.729092C1.11719 1.11589 0.886719 1.64049 0.886719 2.1875V22.8125C0.886719 23.3595 1.11719 23.8841 1.52742 24.2709C1.93766 24.6577 2.49406 24.875 3.07422 24.875H29.3242C29.9044 24.875 30.4608 24.6577 30.871 24.2709C31.2812 23.8841 31.5117 23.3595 31.5117 22.8125V2.1875C31.5117 1.64049 31.2812 1.11589 30.871 0.729092C30.4608 0.342298 29.9044 0.125 29.3242 0.125ZM3.07422 2.1875H20.5742V22.8125H3.07422V2.1875ZM29.3242 22.8125H22.7617V2.1875H29.3242V22.8125Z"
                    />
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
                <DataButton
                  onClick={() => {
                    setOpanModalCalendar(true);
                  }}
                >
                  Сейчас
                  <DataImg src={databutton} />
                </DataButton>
              </DataDiv>
              <DataDiv>
                <DataHead>Темы:</DataHead>
                <TemasButton
                  active
                  onClick={() => setIsSelectedTab(0)}
                  active={isSelectedTab === 0}
                >Образовательный</TemasButton>
                <TemasButton
                  active
                  onClick={() => setIsSelectedTab(1)}
                  active={isSelectedTab === 1}
                >
                  Продающий
                </TemasButton>
                <TemasButton>+</TemasButton>
              </DataDiv>
              <ButtonsContainer>
                <RoundButton
                  active={true}
                  active
                  onClick={() => setSelectedTab(15)}
                  active={selectedTab === 15}
                >
                  В черновики
                </RoundButton>
                <RoundButton
                  active={true}
                  active
                  onClick={() => setSelectedTab(14)}
                  active={selectedTab === 14}
                >
                  Опубликовать сейчас
                </RoundButton>
              </ButtonsContainer>
            </PostContainer>
            <Preview>
              <PreviewHead></PreviewHead>
              <PreviewHead></PreviewHead>
              {previewing ? (
                <PreviewContainerOne>
                  <PreviewContainerHeader>
                    <PreviewContainerHeaderText
                      onClick={() => setSelectedTab(0)}
                      active={selectedTab === 0}
                    >
                      Предпросмотр
                    </PreviewContainerHeaderText>
                    <PreviewContainerHeaderText
                      onClick={() => setSelectedTab(1)}
                      active={selectedTab === 1}
                    >
                      Обсуждения
                    </PreviewContainerHeaderText>
                  </PreviewContainerHeader>
                  <PreviewContainerHeaderIcon>
                    {selectedTab === 0 ? (
                      <PreviewInstaPage>
                        <InstaPageIn>
                          <InstaBox>
                            <PreviewInstaIcon />
                          </InstaBox>
                          <TextBox>
                            <PreviewInstaInHead>
                              Имя аккаунта
                            </PreviewInstaInHead>
                            <PreviewInstaInHeadSpan>
                              Только что
                            </PreviewInstaInHeadSpan>
                          </TextBox>
                        </InstaPageIn>
                        <InstaPostsImageBox src={IMAGES.newpost.instasposts} />
                        <CommentsContainer>
                          <NiceIconContainer>
                            <NiceIcon
                              style={{
                                marginRight: 10,
                                marginBottom: 2,
                                marginLeft: 15,
                              }}
                            />
                            Нравится
                          </NiceIconContainer>
                          <SendIconContainer>
                            <SendsIcon style={{ marginRight: 10 }} />
                            Поделиться
                          </SendIconContainer>
                          <CommentsIconContainer>
                            <CommentsIcon
                              style={{ marginRight: 10, marginTop: 2 }}
                            />
                            Комментировать
                          </CommentsIconContainer>
                        </CommentsContainer>
                      </PreviewInstaPage>
                    ) : selectedTab === 1 ? (
                      <DiscussionsBox>
                        <MassageImageBox src={IMAGES.newpost.massage} />
                        <DiscussionsHead>
                          Включите «Обсуждение постов» и пригласите <br /> коллег,
                          чтобы вместе работать над публикацией
                        </DiscussionsHead>
                        <TurnOnButton onClick={() => {
                          setOpenModalTurnOn(true);
                        }} >Включить</TurnOnButton>
                      </DiscussionsBox>
                    ) : null}
                  </PreviewContainerHeaderIcon>
                </PreviewContainerOne>
              ) : null}
            </Preview>
          </PostDivs>
        </ContainerBox>
      </Container>
      {openModalCalendar && (
        <ModalCalendar
          claseModal={setOpanModalCalendar}
          openModal={openModalCalendar}
          openModalTurnOn={openModalTurnOn}
        />
      )}
      {openModalNewpost && <Modal claseModal={setOpenModalNewpost} />}
      {openModalTurnOn && <TurnOn closeModal={setOpenModalTurnOn} />}
    </>
  );
}
