import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { IMAGES } from "../../../constants/images";
// import useDropdownMenu from "react-accessible-dropdown-menu-hook";

import {
  DropDownBox,
  NavbarDiv,
  NavbarHead,
  UserDiv,
  UserImg,
  UserParagraph,
  Vector,
} from ".././navbar/Navbar.style";

export default function NavBar({ routes = [] }) {
  let history = useHistory();
  let onProfile = () => {
    history.push("/profile");
  };
  let location = useLocation();
  // const { buttonProps, itemProps, isOpen } = useDropdownMenu(numberOfItems);
  let route = routes.find(e => e.path === location.pathname)
  return (
    <NavbarDiv>
      <NavbarHead>{route?.key}</NavbarHead>
      <UserDiv>
        <UserParagraph>Привет, Рафаэль</UserParagraph>
        <UserImg onClick={onProfile} src={IMAGES.header.users} />
        <Vector src={IMAGES.header.arrowDown} />
      </UserDiv>
    </NavbarDiv >
  );
}
