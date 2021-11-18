import React from "react";
import { IMAGES } from "../../../constants/images";
import {
  PlanModalHeader,
  ModalBoxHelp,
  PlanModalContainerBox,
  ModalExitHelp,
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
} from "./PlanModalTwo.style";

function PlanModalTwo({ claseModal }) {
  return (
    <>
      <PlanModalHeader>
        <PlanModalContainerBox>
          <ModalBoxHelp>
            Оплата на тариф L
            <ModalExitHelp onClick={() => claseModal(false)}>x</ModalExitHelp>
          </ModalBoxHelp>
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
              <PlanModalSectionBoxes src={IMAGES.plans.Pyme} />
            </PlanModalSec>
            <PlanModalSec>
              <PlanModalSectionBoxes src={IMAGES.plans.Click} />
            </PlanModalSec>
          </PlanModalSectionBox>
        </PlanModalContainerBox>
      </PlanModalHeader>
    </>
  );
}

export default PlanModalTwo;
