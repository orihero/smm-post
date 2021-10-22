import React from "react";
import {
  ModalBacgrundHelp,
  ModalContainerHelp,
  ModalBoxHelp,
  ModalExitHelp,
  ModalDescriptionHelp,
  ModalTextHelp,
  ModalTextThreeHelp,
  ModalTextIconHelp,
  ModalTextIconTwoHelp,
  ModalTextTwoHelp,
  ModalButtonHelp,
} from "./ModalHelp.styles";

export default function ModalHelp({ claseModalHelp }) {
  return (
    <ModalBacgrundHelp>
      <ModalContainerHelp>
        <ModalBoxHelp>
          Посмотрите обучающее видео, чтобы узнать, как пользоваться Амплифером
          <ModalExitHelp onClick={() => claseModalHelp(false)}>x</ModalExitHelp>
        </ModalBoxHelp>
        <ModalTextHelp>
          <ModalTextIconHelp  src={}/>
          <ModalDescriptionHelp>
          Как пользоваться Амплифером?
          </ModalDescriptionHelp>
              <ModalTextTwoHelp>
                  Получите ответы в Справочном центре
              </ModalTextTwoHelp>
        </ModalTextHelp>
      </ModalContainerHelp>
    </ModalBacgrundHelp>
  );
}
