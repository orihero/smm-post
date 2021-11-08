import React from "react";
import PlanCard from "./components/PlanCard";
import {
  PlansScrensHeader,
  PlansCardContianer
} from "./PlansScrens.style";

function PlansScrens() {
  return (
    <>
      <PlansScrensHeader>
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
