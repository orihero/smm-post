import React from 'react'
import { IMAGES } from '../../../constants/images'

import { NavbarDiv, NavbarHead, UserDiv, UserImg, UserParagraph, Vector } from '.././navbar/Navbar.style'

export default function NavBar() {
    return (
        <NavbarDiv>
            <NavbarHead>Расписание</NavbarHead>
            <UserDiv>
                <UserParagraph>Привет, Рафаэль</UserParagraph>
                <UserImg src={IMAGES.header.users} />
                <Vector src={IMAGES.header.arrowDown} />
            </UserDiv>
        </NavbarDiv>
    )
}
