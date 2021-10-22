import React from "react";
import { useHistory, useLocation } from "react-router";
import { IMAGES } from "../../../constants/images";
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
          <EmailImg src={IMAGES.sidebar.emailimg} />
          <ButtonsDiv>
            <LeftSideButton>
              <ButtonParagpraph>Первый проект</ButtonParagpraph>
              <VectorImg src={IMAGES.sidebar.vektor} />
            </LeftSideButton>
            <LeftSideButtonSecond>+</LeftSideButtonSecond>
          </ButtonsDiv>
          <LeftSideBox>
            {MENUS.map(({ link, text, image: Icon}, i) => {
              return (
                <ElementsDiv onClick={onNavigate(link)}>
                  <Icon active={location.pathname === link} />
                  <PostsParagraph active={location.pathname === link}>
                    {text}
                  </PostsParagraph>
                </ElementsDiv>
              );
            })}
          </LeftSideBox>
        </LeftSide>
      </Container>
    </>
  );
}

export default Sidebar;
