import React from "react";
import { CheckIcon } from "../../../constants/icons";
import {
  ModalBoxHelp,
  ModalContainerHelp,
  ModalBackgroundHelp,
  ModalExitHelp,
  ModalContainerBox,
  ModalContainerBoxOne,
  ModalContainerParagraf,
  ModalContainerBoxSpan,
} from "./PlansModal.style";

function PlansModal({ clasePlanModal }) {
  return (
    <>
      <ModalBackgroundHelp>
        <ModalContainerHelp>
          <ModalContainerBox>
            <ModalBoxHelp>
              Тариф L включает в себе
              <ModalExitHelp onClick={() => clasePlanModal(false)}>
                x
              </ModalExitHelp>
            </ModalBoxHelp>
            <ModalContainerParagraf>
              <ModalContainerBoxOne> 5 проектов</ModalContainerBoxOne>
              <CheckIcon style={{  marginBottom: "15px" }} />
              <ModalContainerBoxOne>
                5 рабочих мест
                <ModalContainerBoxSpan>
                  20 $ за доп. место
                </ModalContainerBoxSpan>
              </ModalContainerBoxOne>
              <ModalContainerBoxOne>
                25 страниц
                <ModalContainerBoxSpan>
                  без ограничений в Инстаграме
                </ModalContainerBoxSpan>
              </ModalContainerBoxOne>
              <ModalContainerBoxOne>
                Полная аналитика
                <ModalContainerBoxSpan>
                  по постам, дням и проектам, метриками <br /> по показам и
                  вовлечённости, с Эксель- <br /> отчётом
                </ModalContainerBoxSpan>
              </ModalContainerBoxOne>
              <ModalContainerBoxOne>
                Автопилот
                <ModalContainerBoxSpan>
                  заново публикует ваши лучшие <br /> посты по расписанию
                </ModalContainerBoxSpan>
              </ModalContainerBoxOne>
              <ModalContainerBoxOne>
                Совместная работа
                <ModalContainerBoxSpan>
                  комментируйте, дорабатывайте и <br /> утверждайте посты с
                  коллегами
                </ModalContainerBoxSpan>
              </ModalContainerBoxOne>
              <ModalContainerBoxOne>
                Предпросмотр публикаций
                <ModalContainerBoxSpan>
                  как будет выглядеть пост в соцсетях
                </ModalContainerBoxSpan>
              </ModalContainerBoxOne>
              <ModalContainerBoxOne>∞ импорты из RSS</ModalContainerBoxOne>
              <ModalContainerBoxOne>API</ModalContainerBoxOne>
              <ModalContainerBoxOne>По почте, в чате,</ModalContainerBoxOne>
            </ModalContainerParagraf>
          </ModalContainerBox>
        </ModalContainerHelp>
      </ModalBackgroundHelp>
    </>
  );
}

export default PlansModal;
