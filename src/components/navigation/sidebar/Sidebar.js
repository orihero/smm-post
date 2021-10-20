import React from "react";
import { useHistory, useLocation } from "react-router";
import emailimg from "../../../assets/email.png";
import Vektor from "../../../assets/Vector.png";
import { MENUS } from "../../../constants/navigation";
import {
  ButtonParagpraph,
  ButtonsDiv,
  Container,
  ElementsDiv,
  EmailImg,
  LeftSide,
  LeftSideBox,
  LeftSideButton,
  LeftSideButtonSecond,
  PostsParagraph,
  VectorImg,
} from "./Sidebar.styles";

function Sidebar() {
  let history = useHistory();
  let location = useLocation();
  let onNavigate = (link) => {
    return () => {
      history.push(link);
    };
  };
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
            {MENUS.map(({ link, text, image: Icon }, i) => {
              return (
                <ElementsDiv onClick={onNavigate(link)}>
                  {/* <NewPostsImg src={Icon} /> */}
                  <Icon active={location.pathname === link} />
                  <PostsParagraph active={location.pathname === link}>
                    {text}
                  </PostsParagraph>
                </ElementsDiv>
              );
            })}
            {/* <ElementsDiv onClick={onNavigate("/newpost")}>
                            <NewPostsImg src={posts} />
                            <PostsParagraph>Новый пост</PostsParagraph>
                        </ElementsDiv>
                          <ElementsDiv onClick={onNavigate("/publications")}>
                            <CalendarImg src={calendar} />
                            <CalendarParagraph>Публикации</CalendarParagraph>
                        </ElementsDiv>
                        <ElementsDiv onClick={onNavigate("/analytics")}>
                            <AnalitkaImg src={analitka} />
                            <AnalitkaParagraph>Аналитика</AnalitkaParagraph>
                        </ElementsDiv>
                        <ElementsDiv onClick={onNavigate("/newpost")}>
                            <SettingsFirstImg src={setting1} />
                            <SettingsFirstParagraph>Инструменты</SettingsFirstParagraph>
                        </ElementsDiv>
                        <ElementsDiv onClick={onNavigate("/newpost")}>
                            <SettingsSecondImg src={settings2} />
                            <SettingsSecondParagraph>Настройки</SettingsSecondParagraph>
                        </ElementsDiv> */}
          </LeftSideBox>
        </LeftSide>
      </Container>
    </>
  );
}

export default Sidebar;
