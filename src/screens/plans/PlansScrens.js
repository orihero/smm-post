import React from "react";
import {
  PlansCardContianer,
  PlansScrensHeader,
  PlansScrensTextContainer,
  PlansScrensTextContainerOne,
  PlansScrensTextSpan,
  TextContainer,
  IconContainer,
} from "./PlansScrens.style";
import PlanCard from "./components/PlanCard";
import PlansButton from "../../components/general/buttons/PlansButton";
import { EducationIcon } from "../../constants/icons";
function PlansScrens() {
  return (
    <>
      <PlansScrensHeader>
        
        <PlansScrensTextContainer>
          <TextContainer>
            <PlansScrensTextContainerOne>
            <IconContainer>
          <EducationIcon/>
            </IconContainer>
             Ваш пробный период заканчивается через 7 дней.
            </PlansScrensTextContainerOne>
            <PlansScrensTextSpan>
              Выберите тариф, чтобы получить доступ ко всем функциям
            </PlansScrensTextSpan>
          </TextContainer>
          <PlansButton>Пригласить друга</PlansButton>
         </PlansScrensTextContainer>
        <PlansCardContianer>
          <PlanCard
            name="S"
            description="сольным исполнителям"
            options={[
              "1 проект",
              "1 рабочее место",
              "5 страниц",
              "Базовая аналитика",
              "Автопилот",
              "2 импорта из RSS",
              "По почте",
            ]}
          />
          <PlanCard
            name="M"
            description="небольшим командам"
            bonus="Все, что есть в S, плюс ..."
            options={[
              "2 проект",
              "1 рабочее место",
              "5 страниц",
              "Базовая аналитика",
              "Автопилот",
              "2 импорта из RSS",
              "По почте",
            ]}
          />

          <PlanCard
            name="L"
            description="компаниям и изданиям"
            bonus="Все, что есть в M, плюс ..."
            options={[
              "1 проект",
              "1 рабочее место",
              "5 страниц",
              "Базовая аналитика",
              "Автопилот",
              "2 импорта из RSS",
              "По почте",
            ]}
          />

          <PlanCard
            name="XL"
            description="корпорациям и агентствам"
            bonus="Все, что есть в L, плюс ..."
            options={[
              "1 проект",
              "1 рабочее место",
              "5 страниц",
              "Базовая аналитика",
              "Автопилот",
              "2 импорта из RSS",
              "По почте",
            ]}
          />
        </PlansCardContianer>
      </PlansScrensHeader>
    </>
  );
}

export default PlansScrens;
