import styled from "styled-components";
import { DefaultText } from "../../../../components/general/text/Text.style";
import { COLORS } from "../../../../constants/colors";

export const Container = styled.div`
    border-bottom-width: ${props => props.hasBorder ? "1px" : "0px"};
    border-color: ${COLORS.borderGray};
    padding: 40px;
    display: flex;
    justify-content: space-between;
`

export const LeftContainer = styled.div`
    display: flex;

`

export const SettingsImage = styled.img`
    width: 80px;
    height: 80px;
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled(DefaultText)`
    font-size: 25px;
    color: ${COLORS.fontColors};
`


export const Description = styled(DefaultText)`
    font-size: 19px;
    margin-top: 10px;
`

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
