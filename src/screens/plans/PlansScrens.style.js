import styled from "styled-components";
import { DefaultText } from "../../components/general/text/Text.style";
import { COLORS } from "../../constants/colors";

export const PlansScrensContainer = styled.div`
  margin-top: 20px;
  margin-left: 60px;
`;

export const PlansScrensHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7fafc;
  width: 100%;
  height: 150vh;
`;

export const PlansScrensText = styled(DefaultText)`
  font-size: 15px;
  font-weight: normal;
`;

export const PlansScrensContainerOne = styled.div`
    background-color: #fff;
    margin-left: 50px;
    margin-top: 30px;
    padding: 10px;
    display: flex;
    border-radius: 10px;
`

export const PlansScrensDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    border: solid 1px gray;
    width: 310px;
    height: 800px;
`   

export const PlansScrensTextOne = styled(DefaultText)`
    font-size: 80px;
    margin-left: 140px;
`
export const PlansScrensTextTwo = styled(DefaultText)`
    font-size: 22px;
    display: flex;
    flex-direction: column;
    font-weight: normal;
    color: gray;
    justify-content: center;
    text-align: center;
`
export const PlansScrensTextThree = styled(DefaultText)`
    display: flex;
    font-size: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`
export const PlansScrensTextFour = styled(DefaultText)`
    font-size: 25px;
    font-weight: 500;
    display: flex;
    margin-top: 25px;
    margin-left: 5px;
`
export const  PlansScrensTextFive = styled(DefaultText)`
    font-weight: 500;
    font-size: 17px;
    display: flex;
    margin-left: 40px;
    margin-bottom: 20px;
`
export const PlansScrensTextSix = styled(DefaultText)`
    color: ${COLORS.primaryPink};
    font-weight: 500;
    font-size: 19px;
    margin-left: 75px;
`