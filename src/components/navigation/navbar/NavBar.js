import React from 'react';
import { useHistory } from "react-router-dom";
import { IMAGES } from '../../../constants/images';
import { NavbarDiv, NavbarHead, UserDiv, UserImg, UserParagraph, Vector } from '.././navbar/Navbar.style';

export default function NavBar() {
  let history = useHistory();

  let onProfile = () => {
    history.push("/profile")
  }
  return (
    <NavbarDiv>
      <NavbarHead>Расписание</NavbarHead>
      <UserDiv>
        <UserParagraph>Привет, Рафаэль</UserParagraph>
        <UserImg onClick={onProfile} src={IMAGES.header.users} />
        <Vector src={IMAGES.header.arrowDown} />
      </UserDiv>
    </NavbarDiv>
  )
}
