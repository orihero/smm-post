import React from "react";
import PlansButtonContainer from "../../components/general/buttons/PlansButton";
import PlanCard from "./components/PlanCard";
import {
  PlansCardContianer, PlansScreensSpan, PlansScrensContainer,
  PlansScrensHeader,
  PlansScrensText,
  PlansScrensdiv,
  PlansScrensCard,
} from "./PlansScrens.style";

function PlansScrens() {
  return (
    <>
      <PlansScrensHeader>
        <PlansScrensContainer>
          <PlansScrensdiv>
            <PlansScrensCard>
            <PlansScrensText>
            Ваш пробный период заканчивается через 7 дней.
          </PlansScrensText>
          <PlansScreensSpan>
            Выберите тариф, чтобы получить доступ ко всем функциям
          </PlansScreensSpan>
            </PlansScrensCard>
          <PlansButtonContainer>Пригласить друга</PlansButtonContainer>
          </PlansScrensdiv>
        </PlansScrensContainer>
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
