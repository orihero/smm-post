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
  LeftSide,
  LeftSideBox,
  LeftSideButton,
  PostsParagraph,
  RightSideButton,
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
  const [menuVisible, setMenuVisible] = useState(false);
  let toggleMenu = () => {
    setMenuVisible((e) => !e);
  };
  return (
    <>
      <Container>
        <LeftSide>   
          <EmailImg src={IMAGES.sidebar.emailimg} />
          <ButtonsContainer active={menuVisible} onClick={toggleMenu}>
            <LeftSideButton>
              <ButtonParagpraph>Первый проект</ButtonParagpraph>
              <VectorImg src={IMAGES.sidebar.vektor} />
            </LeftSideButton>
            <RightSideButton>+</RightSideButton>
          </ButtonsContainer> 
          {menuVisible && (
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
          )}
        </LeftSide>
      </Container>
    </>
  );
}

export default Sidebar;
