import React from "react";
import { IMAGES } from "../../../constants/images";
import {
  PlanModalHeader,
  ModalBoxHelp,
  PlanModalContainerBox,
  PlanModalContainerBoxOne,
  PlanModalContainer,
  PlanModalParagraph,
  PlanModalParagraphOne,
  PlanModalParagraphTwo,
  PlanModalParagraphs,
  PlanModalParagraphsOne,
  PlanModalParagraphsTwo,
  PlanModalParagraphe,
  PlanModalParagrapheOne,
  PlanModalParagrapheTwo,
  PlanModalSection,
  PlanModalSectionBox,
  PlanModalSectionBoxes,
  PlanModalSec,
  PlanModalButtonBoxess,
  PlanModalButtonTwo,
} from "./PlanModalTwo.style";

function PlanModalTwo({ claseModal }) {
  return (
    <>
      <PlanModalHeader>
        <PlanModalContainerBox>
          <ModalBoxHelp>Оплата на тариф L</ModalBoxHelp>
          <PlanModalContainer>
            <PlanModalContainerBoxOne>
              <PlanModalParagraph>Помесячно</PlanModalParagraph>
              <PlanModalParagraphOne>13 $</PlanModalParagraphOne>
              <PlanModalParagraphTwo>За 30 дней</PlanModalParagraphTwo>
            </PlanModalContainerBoxOne>
            <PlanModalContainerBoxOne>
              <PlanModalParagraphs>за полгода −15%</PlanModalParagraphs>
              <PlanModalParagraphsOne>66.3 $</PlanModalParagraphsOne>
              <PlanModalParagraphsTwo>
                Цена без скидки 78$
              </PlanModalParagraphsTwo>
            </PlanModalContainerBoxOne>
            <PlanModalContainerBoxOne>
              <PlanModalParagraphe>за год −20%</PlanModalParagraphe>
              <PlanModalParagrapheOne>124.8 $</PlanModalParagrapheOne>
              <PlanModalParagrapheTwo>
                Цена без скидки 156$
              </PlanModalParagrapheTwo>
            </PlanModalContainerBoxOne>
          </PlanModalContainer>
          <PlanModalSection>Выберите способ оплаты</PlanModalSection>
          <PlanModalSectionBox>
            <PlanModalSec>
              <PlanModalSectionBoxes src={IMAGES.plans.Click} />
            </PlanModalSec>
            <PlanModalSec>
              <PlanModalSectionBoxes src={IMAGES.plans.Payme} />
            </PlanModalSec>
            <PlanModalSec>
              <PlanModalSectionBoxes src={IMAGES.plans.Click} />
            </PlanModalSec>
          </PlanModalSectionBox>
          <PlanModalButtonBoxess>
            <PlanModalButtonTwo onClick={() => claseModal(false)}>
              отмена
            </PlanModalButtonTwo>
            <PlanModalButtonTwo
              style={{
                backgroundColor: "#E8427E",
                color: "#fff",
                border: "none",
              }}
            >
              Оплатить
            </PlanModalButtonTwo>
          </PlanModalButtonBoxess>
        </PlanModalContainerBox>
      </PlanModalHeader>
    </>
  );
}

export default PlanModalTwo;
