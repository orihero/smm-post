import React from "react";
import PrimaryButton from "../../../components/general/buttons/PrimaryButton";
import { CheckIcon } from "../../../constants/icons";
import {
  CardContent,
  PlansScrensContainerOne,
  PlansScrensDiv,
  PlansScrensGeneralText,
  PlansScrensTextEyt,
  PlansScrensTextFour,
  PlansScrensTextOne,
  PlansScrensTextSix,
  PlansScrensTextThree,
  PlansScrensTextTwo,
} from "./PlanCard.style";
export default function PlanCard({
  name = "S",
  description = "сольным  исполнителям",
  price = "13 $",
  options = ["1 проект", "1 рабочее место", "5 страниц"],
  bonus,
}) {
  return (
    <PlansScrensContainerOne>
      <PlansScrensDiv>
        <CardContent>
          <PlansScrensTextOne>{name}</PlansScrensTextOne>
          <PlansScrensTextTwo>{description}</PlansScrensTextTwo>
          <PlansScrensTextThree>
            {price}
            <PlansScrensTextFour>в месяц</PlansScrensTextFour>
          </PlansScrensTextThree>
          <PlansScrensTextEyt>{bonus}</PlansScrensTextEyt>
          {options.map((e) => {
            return (
              <PlansScrensGeneralText>
                <CheckIcon style={{ marginRight: "16px" }} /> {e}
              </PlansScrensGeneralText>
            );
          })}
          <PlansScrensTextSix> Все детали</PlansScrensTextSix>
        </CardContent>
        <PrimaryButton>Выбрать</PrimaryButton>
      </PlansScrensDiv>
    </PlansScrensContainerOne>
  );
}
