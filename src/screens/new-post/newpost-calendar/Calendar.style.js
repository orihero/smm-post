import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { DefaultText } from "../../../components/general/text/Text.style";

export const CalendarContainer = styled.div`
    padding: 15px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${COLORS.white};
`

export const WeeksContainer = styled.div`
    padding: 15px 10px;
    display: flex;
`

export const WeeksName = styled(DefaultText)`
    margin-left: 20px;
    font-weight: 400;
    font-size: 16px;
    opacity: 0.7;
    color: ${COLORS.fontColors};
`