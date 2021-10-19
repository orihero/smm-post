import styled from "styled-components";
const hoverColor = '#E8427E'

export const NavbarDiv = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
`;

export const NavbarHead = styled.h1`
    margin-left: 5%;
    font-weight: 700;
    font-size: 28px;
`;

export const UserDiv = styled.div`
    width: 23%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const UserParagraph = styled.p`
    font-weight: 500;
    margin-right: 4%;
    color: ${hoverColor};
`;

export const UserImg = styled.img`
    width: 70px;
`;

export const Vector = styled.img`
    margin-right: 5%;
    width: 16px;
`;
