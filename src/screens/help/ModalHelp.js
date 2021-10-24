import React from "react";
import {
  ModalBacgrundHelp,
  ModalContainerHelp,
  ModalContainerHelpIcon,
  ModalBoxHelp,
  ModalExitHelp,
  ModalDescriptionHelp,
  ModalTextHelp,
  ModalTextIconHelp,
  ModalTextTwoHelp,
  ModalBoxHelpContainer,
  ModalVido,
} from "./ModalHelp.styles";
import vido from "../../Vido/Vido.mp4"
import { IMAGES } from "../../constants/images";

export default function ModalHelp({ claseModalHelp }) {
  return (
    <ModalBacgrundHelp>
      <ModalContainerHelp>
        <ModalBoxHelp>
          Посмотрите обучающее видео, чтобы узнать, как пользоваться Амплифером
          <ModalExitHelp onClick={() => claseModalHelp(false)}>x</ModalExitHelp>
        </ModalBoxHelp>
        <ModalVido autoPlay loop muted src={vido} type="vido/mp4" />
        <ModalTextHelp>
          <ModalContainerHelpIcon>
            <ModalTextIconHelp src={IMAGES.modalhelp.ModalHelpTelefon} />
          </ModalContainerHelpIcon>
             <ModalBoxHelpContainer>
          <ModalDescriptionHelp>
            Как пользоваться Амплифером?
          </ModalDescriptionHelp>
          <ModalTextTwoHelp>
            Получите ответы в Справочном центре
          </ModalTextTwoHelp>
             </ModalBoxHelpContainer>
        </ModalTextHelp>
        <ModalTextHelp>
          <ModalContainerHelpIcon>
            <ModalTextIconHelp src={IMAGES.modalhelp.Modalhelpsms} />
          </ModalContainerHelpIcon>
             <ModalBoxHelpContainer>
          <ModalDescriptionHelp>
            Как пользоваться Амплифером?
          </ModalDescriptionHelp>
          <ModalTextTwoHelp>
            Получите ответы в Справочном центре
          </ModalTextTwoHelp>
             </ModalBoxHelpContainer>
        </ModalTextHelp>
        <ModalTextHelp>
          <ModalContainerHelpIcon>
            <ModalTextIconHelp src={IMAGES.modalhelp.ModalhelpLike} />
          </ModalContainerHelpIcon>
             <ModalBoxHelpContainer>
          <ModalDescriptionHelp>
            Как пользоваться Амплифером?
          </ModalDescriptionHelp>
          <ModalTextTwoHelp>
            Получите ответы в Справочном центре
          </ModalTextTwoHelp>
             </ModalBoxHelpContainer>
        </ModalTextHelp>
        <ModalTextHelp>
          <ModalContainerHelpIcon>
            <ModalTextIconHelp src={IMAGES.modalhelp.ModalhelpOperator} />
          </ModalContainerHelpIcon>
             <ModalBoxHelpContainer>
          <ModalDescriptionHelp>
            Как пользоваться Амплифером?
          </ModalDescriptionHelp>
          <ModalTextTwoHelp>
            Получите ответы в Справочном центре
          </ModalTextTwoHelp>
             </ModalBoxHelpContainer>
        </ModalTextHelp>
        <ModalTextHelp>
          <ModalContainerHelpIcon>
            <ModalTextIconHelp src={IMAGES.modalhelp.ModalhelpStar} />
          </ModalContainerHelpIcon>
             <ModalBoxHelpContainer>
          <ModalDescriptionHelp>
            Как пользоваться Амплифером?
          </ModalDescriptionHelp>
          <ModalTextTwoHelp>
            Получите ответы в Справочном центре
          </ModalTextTwoHelp>
             </ModalBoxHelpContainer>
        </ModalTextHelp>
      </ModalContainerHelp>
    </ModalBacgrundHelp>
  );
}
