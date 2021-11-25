import React from "react";
import { useState } from "react";
import {
  ModalFacebookIcon,
  ModalInstagramIcon,
  ModalTelegramIcon,
  ModalVkontakteIcon,
} from "../../../constants/icons";
import {
  ActiveContainer,
  ModalBackgrundHelp,
  ModalBoxContainer,
  ModalBoxHelp,
  ModalContainerHelp,
  ModalExitHelp,
  ModalInfoParagraph,
} from "./ModalNewpost.style";

function ModalNewpost({ claseModal }) {
  let [selectedTab, setSelectedTab] = useState();
  return (
    <>
      <ModalBackgrundHelp>
        <ModalContainerHelp>
          <ModalBoxHelp>
            Подключение страниц в соцсетях
            <ModalExitHelp onClick={() => claseModal(false)}>x</ModalExitHelp>
          </ModalBoxHelp>
          <ModalInfoParagraph>
            Добавьте страницы в соцсетях, чтобы делать публикации, смотреть
            аналитику и <br /> пользоваться всеми возможностями Амплифера. Для
            подключения страницы нужно быть <br /> её администратором. Не
            забудьте предоставить доступы, чтобы всё работало корректно.
          </ModalInfoParagraph>
          <ActiveContainer>
            <ModalBoxContainer
              active
              onClick={() => setSelectedTab(0)}
              active={selectedTab === 0}
            >
              <ModalFacebookIcon /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer
              active
              onClick={() => setSelectedTab(1)}
              active={selectedTab === 1}
            >
              <ModalInstagramIcon style={{ marginBottom: "4px" }} /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer
              active
              onClick={() => setSelectedTab(2)}
              active={selectedTab === 2}
            >
              <ModalTelegramIcon style={{ marginBottom: "2px" }} /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer
              active
              onClick={() => setSelectedTab(3)}
              active={selectedTab === 3}
            >
              <ModalVkontakteIcon style={{ marginBottom: "2px" }} /> Подключить
            </ModalBoxContainer>
          </ActiveContainer>
          <ActiveContainer>
            <ModalBoxContainer
              active
              onClick={() => setSelectedTab(4)}
              active={selectedTab === 4}
            >
              <ModalFacebookIcon /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer
              active
              onClick={() => setSelectedTab(5)}
              active={selectedTab === 5}
            >
              <ModalInstagramIcon style={{ marginBottom: "4px" }} /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer
              active
              onClick={() => setSelectedTab(6)}
              active={selectedTab === 6}
            >
              <ModalTelegramIcon style={{ marginBottom: "2px" }} /> Подключить
            </ModalBoxContainer>
            <ModalBoxContainer
              active
              onClick={() => setSelectedTab(7)}
              active={selectedTab === 7}
            >
              <ModalVkontakteIcon style={{ marginBottom: "2px" }} /> Подключить
            </ModalBoxContainer>
          </ActiveContainer>
        </ModalContainerHelp>
      </ModalBackgrundHelp>
    </>
  );
}

export default ModalNewpost;
