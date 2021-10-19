import React from 'react'
import users from '../../../assets/users.png'
import vector2 from '../../../assets/Vector2.png'
import { NavbarDiv, NavbarHead, UserDiv, UserImg, UserParagraph, Vector } from '.././navbar/Navbar.style'

export default function NavBar() {
    return (
        <NavbarDiv>
            <NavbarHead>Расписание</NavbarHead>
            <UserDiv>
                <UserParagraph>Привет, Рафаэль</UserParagraph>
                <UserImg src={users} />
                <Vector src={vector2} />
            </UserDiv>
        </NavbarDiv>
    )
}
