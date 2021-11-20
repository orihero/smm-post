import styled from "styled-components";
import { DefaultText } from "../../../components/general/text/Text.style";
import { COLORS } from "../../../constants/colors";

export const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const PlansScrensContainerOne = styled.div`
  background-color: #fff;
  margin-left: 15px;
  margin-top: 10px;
  display: flex;
  border-radius: 10px;
  color: ${COLORS.fontColors};
`;

export const PlansScrensDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: solid 1px gray;
  width: 290px;
  height: 800px;
`;

export const PlansScrensTextOne = styled(DefaultText)`
  font-size: 80px;
  font-weight: 800;
  margin-top: 20px;
  text-align: center;
`;
export const PlansScrensTextTwo = styled(DefaultText)`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  font-weight: normal;
  color: gray;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  margin: 0px 40px;
`;
export const PlansScrensTextThree = styled(DefaultText)`
  display: flex;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 40px;
`;
export const PlansScrensTextFour = styled(DefaultText)`
  font-size: 25px;
  font-weight: 500;
  display: flex;
  margin-top: 25px;
  margin-left: 5px;
`;
export const PlansScrensGeneralText = styled(DefaultText)`
  font-weight: 500;
  font-size: 17px;
  display: flex;
  margin-left: 40px;
  margin-bottom: 20px;
`;
export const PlansScrensTextSix = styled(DefaultText)`
  color: ${COLORS.primaryPink};
  font-weight: 500;
  font-size: 19px;
  margin-left: 40px;
  cursor: pointer;
`;

export const PlansScrensTextEyt = styled(DefaultText)`
  margin-left: 35px;
  font-weight: 600;
  margin-bottom: 10px;
`;
