import React from "react";
import {
  ExitModalIcon,
  ModalFacebookIcon,
  ModalInstagramIcon,
  ModalTelegramIcon,
  ModalVkontakteIcon
} from "../../../constants/icons";
import {
  ActiveContainer,
  ModalBackgrundHelp,
  ModalBoxContainer,
  ModalBoxHelp,
  ModalContainerHelp,
  ModalExitHelp,
  ModalInfoParagraph
} from "./ModalNewpost.style";

function ModalNewpost({ claseModal }) {
  return (
    <>
      <ModalBackgrundHelp>
        <ModalContainerHelp>
          <ModalBoxHelp>
            Подключение страниц в соцсетях
            <ModalExitHelp
              onClick={() =>
                claseModal(false)}
            >
              <ExitModalIcon />
            </ModalExitHelp>
          </ModalBoxHelp>
          <ModalInfoParagraph>
            Добавьте страницы в соцсетях, чтобы делать публикации, смотреть
            аналитику и <br /> пользоваться всеми возможностями Амплифера. Для
            подключения страницы нужно быть <br /> её администратором. Не
            забудьте предоставить доступы, чтобы всё работало корректно.
          </ModalInfoParagraph>
          <ActiveContainer>
            <ModalBoxContainer>
              <ModalFacebookIcon /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer>
              <ModalInstagramIcon style={{ marginBottom: "4px" }} /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer>
              <ModalTelegramIcon style={{ marginBottom: "2px" }} /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer>
              <ModalVkontakteIcon style={{ marginBottom: "2px" }} /> Подключить
            </ModalBoxContainer>
          </ActiveContainer>
          <ActiveContainer>
            <ModalBoxContainer>
              <ModalFacebookIcon /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer>
              <ModalInstagramIcon style={{ marginBottom: "4px" }} /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer>
              <ModalTelegramIcon style={{ marginBottom: "2px" }} /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer>
              <ModalVkontakteIcon style={{ marginBottom: "2px" }} /> Подключить
            </ModalBoxContainer>
          </ActiveContainer>
        </ModalContainerHelp>
      </ModalBackgrundHelp>
    </>
  );
}

export default ModalNewpost;
