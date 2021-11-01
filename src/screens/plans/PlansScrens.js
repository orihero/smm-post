import React from "react";
import { CheckIcon, ExclamatoryIcons } from "../../constants/icons";
import {
  PlansScrensHeader,
  PlansScrensContainer,
  PlansScrensText,
  PlansScrensContainerOne,
  PlansScrensDiv,
  PlansScrensTextOne,
  PlansScrensTextTwo,
  PlansScrensTextThree,
  PlansScrensTextFour,
  PlansScrensTextFive,
  PlansScrensTextSix,
} from "./PlansScrens.style";

function PlansScrens() {
  return (
    <>
      <PlansScrensHeader>
        <PlansScrensContainer>
          <PlansScrensText>
            <ExclamatoryIcons />
            Ваш пробный период заканчивается через 7 дней.
          </PlansScrensText>
          <PlansScrensText>
            Выберите тариф, чтобы получить доступ ко всем функциям
          </PlansScrensText>
        </PlansScrensContainer>
        <PlansScrensContainerOne>
          <PlansScrensDiv>
            <PlansScrensTextOne>S</PlansScrensTextOne>
            <PlansScrensTextTwo>
              сольным <br /> исполнителям
            </PlansScrensTextTwo>
            <PlansScrensTextThree>
              13 $<PlansScrensTextFour>в месяц</PlansScrensTextFour>
            </PlansScrensTextThree>
            <PlansScrensTextFive>
              <CheckIcon /> 1 проект
            </PlansScrensTextFive>
            <PlansScrensTextFive> <CheckIcon /> рабочее место</PlansScrensTextFive>
            <PlansScrensTextFive> <CheckIcon /> 5 страниц</PlansScrensTextFive>
            <PlansScrensTextFive> <CheckIcon /> Базовая аналитика</PlansScrensTextFive>
            <PlansScrensTextFive> <CheckIcon /> Автопилот</PlansScrensTextFive>
            <PlansScrensTextFive> <CheckIcon /> 2 импорта из RSS</PlansScrensTextFive>
            <PlansScrensTextFive> <CheckIcon /> По почте</PlansScrensTextFive>
            <PlansScrensTextSix>  Все детали</PlansScrensTextSix>
          </PlansScrensDiv>
        </PlansScrensContainerOne>
      </PlansScrensHeader>
    </>
  );
}

export default PlansScrens;
