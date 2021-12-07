import styled from "styled-components"
import { COLORS } from "../../../constants/colors"

export const NewPostModalsButton = styled.div`
    padding: 10px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none; 
    cursor: pointer;
    border-radius: 125px;
    border: 1px solid ${COLORS.borderGray};
    color: ${COLORS.fontColors};
    font-weight: 500;
`