import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  ChangeAccountIcon,
  ExitIcon,
  HelpIcon,
  NoteBookICon,
  StudyIcon,
  UserProfileIcon,
} from "../../../constants/icons";
import { IMAGES } from "../../../constants/images";
import {
  ArrowDownButton,
  NavbarDiv,
  NavbarHead,
  UserDiv,
  UserImg,
  UserParagraph,
  Vector,
  OptionsContainer,
  Option,
} from ".././navbar/Navbar.style";

export default function NavBar({ routes = [] }) {
  let location = useLocation();
  let route = routes.find((e) => e.path === location.pathname);
  const [menuVisible, setMenuVisible] = useState(false);
  let toggleMenu = () => {
    setMenuVisible((e) => !e);
  };
  let [selectedTab, setSelectedTab] = useState();
  const navigation = useHistory();
  let onProfileClick = () => {
    navigation.push('/profile')
  }
  let onPlansClick = () => {
    navigation.push("/plans")
  }
  let onHelpClick = () => {
    navigation.push("/help")
  }
  let onEducationClick = () => {
    navigation.push("/education")
  }
  let onExitClick = () => {
    navigation.push("/login")
  }
  return (
    <>
      <NavbarDiv>
        <NavbarHead>{route?.key}</NavbarHead>
        <UserDiv active={menuVisible} onClick={toggleMenu}>
          <UserParagraph>Привет, Рафаэль</UserParagraph>
          <UserImg src={IMAGES.header.users} />
          <ArrowDownButton>
            <Vector src={IMAGES.header.arrowDown} />
          </ArrowDownButton>
          {menuVisible && (
            <OptionsContainer>
              <Option active onClick={() => setSelectedTab(0)} active={selectedTab === 0} onClick={onProfileClick}>
                <UserProfileIcon style={{ marginRight: "15px" }} /> Мой профиль
              </Option>
              <Option onClick={onPlansClick}>
                <NoteBookICon style={{ marginRight: "15px" }} />
                Оплатить
              </Option>
              <Option onClick={onHelpClick}>
                <HelpIcon style={{ marginRight: "15px" }} /> Помощь
              </Option>
              <Option onClick={onEducationClick}>
                <StudyIcon style={{ marginRight: "15px" }} />
                Обучение
              </Option>
              <Option onClick={onExitClick} >
                <ExitIcon style={{ marginRight: "15px" }} />
                Выйти
              </Option>
              <Option onClick={onExitClick}>
                <ChangeAccountIcon style={{ marginRight: "15px" }} /> Сменить
                аккаунт
              </Option>
            </OptionsContainer>
          )}
        </UserDiv>
      </NavbarDiv>
    </>
  );
}
