import React from "react";
import { IMAGES } from "../../constants/images";

import {
  ModalBacgrund,
  ModalContainer,
  ModalBox,
  ModalExit,
  ModalDescription,
  ModalText,
  ModalTextThree,
  ModalTextIcon,
  ModalTextIconTwo,
  ModalTextTwo,
  ModalButton,
} from "./Modal.styles";

export default function Modal({ claseModal }) {
  return (
    <>
      <ModalBacgrund>
        <ModalContainer>
          <ModalBox>
            Считайте клики по ссылкам из постов
            <ModalExit onClick={() => claseModal(false)}>x</ModalExit>
          </ModalBox>
          <ModalDescription>
            Включите сокращение ссылок и Амплифер покажет, какие <br /> ссылки
            получают больше кликов, чтобы вы могли <br /> скорректировать
            контент-план и быть в курсе интересов <br /> аудитории. У Амплифера
            свой алгоритм подсчёта переходов,
            <br /> поэтому данные могут незначительно отличаться от сведений в
            соцсетях и системах аналитики.
          </ModalDescription>

          <ModalText>
            <ModalTextIcon src={IMAGES.modal.check} /> Кому не подойдёт
          </ModalText>
          <ModalText>
            <ModalTextIcon src={IMAGES.modal.check} />
            Делает ссылки компактными и аккуратными
          </ModalText>
          <ModalTextTwo>
            <ModalTextIconTwo src={IMAGES.modal.vz} /> Kому не подойдёт
          </ModalTextTwo>
          <ModalTextThree>Тем, кто не добавляет ссылки к постам</ModalTextThree>
          <ModalButton primary active={true}>
            Включить сокращение
          </ModalButton>
        </ModalContainer>
      </ModalBacgrund>
    </>
  );
}
