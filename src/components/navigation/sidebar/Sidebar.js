import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { IMAGES } from "../../../constants/images";
import { MENUS } from "../../../constants/navigation";
import {
  ButtonParagpraph,
  ButtonsContainer,
  Container,
  ElementsContainer,
  EmailImg,
  IsShowdHead,
  IsShowedContainer, LeftSide,
  LeftSideBox,
  LeftSideButton,
  PostsParagraph,
  RightSideButton,
  VectorImg
} from "./Sidebar.styles";

function Sidebar() {
  let history = useHistory();
  let location = useLocation();
  let onNavigate = (link) => {
    return () => {
      history.push(link);
    };
  };
  let [isShowed, setIsShowed] = useState(false);

  const enableShow = () => {
    setIsShowed(true)
  }

  const disableShow = () => {
    setIsShowed(false)
  }

  return (
    <>
      <Container>
        <LeftSide>
          <EmailImg src={IMAGES.sidebar.emailimg} />
          <ButtonsContainer>
            <LeftSideButton onClick={!isShowed ? enableShow : disableShow} >
              <ButtonParagpraph>Первый проект</ButtonParagpraph>
              <VectorImg src={IMAGES.sidebar.vektor} />
              {isShowed ? (
                <IsShowedContainer>
                  <IsShowdHead>
                    QWERTY.UZ
                  </IsShowdHead>
                  <IsShowdHead>
                    QWERTY.UZ
                  </IsShowdHead>
                  <IsShowdHead>
                    QWERTY.UZ
                  </IsShowdHead>
                  <IsShowdHead>
                    QWERTY.UZ
                  </IsShowdHead>
                </IsShowedContainer>
              ) : null}
            </LeftSideButton>
            <RightSideButton>+</RightSideButton>
          </ButtonsContainer>
          <LeftSideBox>
            {MENUS.map(({ link, text, image: Icon }, i) => {
              return (
                <ElementsContainer onClick={onNavigate(link)}>
                  <Icon active={location.pathname === link} />
                  <PostsParagraph active={location.pathname === link}>
                    {text}
                  </PostsParagraph>
                </ElementsContainer>
              );
            })}
          </LeftSideBox>
        </LeftSide>
      </Container>
    </>
  );
}

export default Sidebar;
