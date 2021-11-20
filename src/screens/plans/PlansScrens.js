import React, { useState } from "react";
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
import PlansModal from "./plans-modal/PlansModal";
import PlanModalTwo from "./plans-modal/PlanModalTwo";

function PlansScrens() {
  const [openPlanModal, setOpanPlanModal] = useState(false);
  const [openPlanModalTwo, setOpanPlanModalTwo] = useState(false);
  return (
    <>
      <PlansScrensHeader>
        <PlansScrensTextContainer>
          <TextContainer>
            <PlansScrensTextContainerOne>
              <IconContainer>
                <EducationIcon />
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
            onSelect={setOpanPlanModal}
            onDetails={setOpanPlanModalTwo}
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
            onSelect={setOpanPlanModal}
            onDetails={setOpanPlanModalTwo}
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
            onSelect={setOpanPlanModal}
            onDetails={setOpanPlanModalTwo}
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
            onSelect={setOpanPlanModal}
            onDetails={setOpanPlanModalTwo}
          />
        </PlansCardContianer>
      </PlansScrensHeader>
      {openPlanModal && <PlansModal clasePlanModal={setOpanPlanModal} />}
      {openPlanModalTwo && <PlanModalTwo claseModal={setOpanPlanModalTwo} />}
    </>
  );
}

export default PlansScrens;
