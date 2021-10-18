import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
    font-size: 16px;
    font-weight: bold;
    padding:6px 20px;
    border-width: 2px;
    border: 1px solid ${colors.primaryPink};
    border-radius: 20px;
    cursor: pointer;
    opacity: ${props => props.active ? 1 : .5};
    color: ${props => props.primary ? colors.white : colors.primaryPink};
    background-color:  ${props => props.primary ? colors.primaryPink : colors.white};
    margin:0px 3px
`

