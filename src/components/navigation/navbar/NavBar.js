import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { COLORS } from "../../../constants/colors";
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
  OptionHovered,
} from ".././navbar/Navbar.style";

export default function NavBar({ routes = [] }) {
  let location = useLocation();
  let hoveredStyle = {
    color: COLORS.white,
    backgroundColor: COLORS.primaryPink,
    borderRadius: "15px",
  };
  let route = routes.find((e) => e.path === location.pathname);

  const [menuVisible, setMenuVisible] = useState(false);
  let toggleMenu = () => {
    setMenuVisible((e) => !e);
  };
  let [selectedTab, setSelectedTab] = useState();
  let [hoveredItem, setHoveredItem] = useState({});

  const navigation = useHistory();
  let onProfileClick = () => {
    navigation.push("/profile");
  };
  let onPlansClick = () => {
    navigation.push("/plans");
  };
  let onHelpClick = () => {
    navigation.push("/help");
  };
  let onEducationClick = () => {
    navigation.push("/education");
  };
  let onExitClick = () => {
    navigation.push("/login");
  };
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
              <Option
                onClick={onProfileClick}
                style={hoveredItem.d ? hoveredStyle : null}
                onMouseMove={() => setHoveredItem({ d: true })}
                onMouseLeave={() => setHoveredItem({ d: false })}
              >
                <UserProfileIcon
                  style={{ marginRight: "15px", }}
                  color={hoveredItem.d ? '#fff' : '#000'}
                />
                Мой профиль
              </Option>
              <Option
                onClick={onPlansClick}
                style={hoveredItem.a ? hoveredStyle : null}
                onMouseMove={() => setHoveredItem({ a: true })}
                onMouseLeave={() => setHoveredItem({ a: false })}
              >
                <NoteBookICon
                  style={{ marginRight: "15px" }}
                  color={hoveredItem.a ? "#fff" : "#000"}
                />
                Оплатить
              </Option>
              <Option
                onClick={onHelpClick}
                style={hoveredItem.b ? hoveredStyle : null}
                onMouseMove={() => setHoveredItem({ b: true })}
                onMouseLeave={() => setHoveredItem({ b: false })}
              >
                <HelpIcon
                  style={{ marginRight: "15px" }}
                  color={hoveredItem.b ? "#fff" : "#000"}
                />
                Помощь
              </Option>
              <Option
                onClick={onEducationClick}
                style={hoveredItem.c ? hoveredStyle : null}
                onMouseMove={() => setHoveredItem({ c: true })}
                onMouseLeave={() => setHoveredItem({ c: false })}
              >
                <StudyIcon
                  style={{ marginRight: "15px" }}
                  color={hoveredItem.c ? "#fff" : "#000"}
                />
                Обучение
              </Option>
              <Option
                onClick={onExitClick}
                style={hoveredItem.o ? hoveredStyle : null}
                onMouseMove={() => setHoveredItem({ o: true })}
                onMouseLeave={() => setHoveredItem({ o: false })}
              >
                <ExitIcon
                  style={{ marginRight: "15px" }}
                  color={hoveredItem.o ? '#fff' : '#000'}
                />
                Выйти
              </Option>
              <Option
                onClick={onExitClick}
                style={hoveredItem.p ? hoveredStyle : null}
                onMouseMove={() => setHoveredItem({ p: true })}
                onMouseLeave={() => setHoveredItem({ p: false })}
              >
                <ChangeAccountIcon
                  style={{ marginRight: "15px" }}
                  color={hoveredItem.p ? '#fff' : '#000'}
                />
                Сменить аккаунт
              </Option>
            </OptionsContainer>
          )}
        </UserDiv>
      </NavbarDiv>
    </>
  );
}
