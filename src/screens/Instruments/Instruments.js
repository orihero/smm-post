import { useState } from "react";
import { IMAGES } from "../../constants/images";
import {
  InstrumentsHeader,
  InstrumentsHeaderContainer,
  InstrumentsInner,
  InstrumentsContainer,
  InstrumentsText,
  InstrumentsBox,
  InstrumentsBoxText,
  InstrumentsBoxTextContainer,
  InstrumentsBoxTextOne,
  InstrumentsBoxTextTwo,
  InstrumentsBoxTextThree,
  InstrumentsBoxContainerImage,
  InstrumentsBoxContainerImageText,
  InstrumentsBoxContainerImageTextOne,
  InstrumentsBoxImage,
  InstrumentsBoxImag,
} from "./Instruments.styles";
import Modal from "./Modal";
import { EducationIcon } from "../../constants/icons";

export default function Instruments() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && <Modal claseModal={setOpenModal} />}
      <InstrumentsHeader>
        <InstrumentsHeaderContainer>
          <InstrumentsInner>
            <EducationIcon />
            <InstrumentsText>
              Используйте Модуль А по максимуму с полезными инструментами, чтобы
              <br /> экономить время при работе с соцсетями и успевать больше
            </InstrumentsText>
          </InstrumentsInner>
          <InstrumentsContainer>
            <InstrumentsBox>
              <InstrumentsBoxTextContainer>
                <InstrumentsBoxText>
                  Настройте расписание <br /> постов под себя
                </InstrumentsBoxText>
                <InstrumentsBoxTextOne>
                  Составьте расписание публикаций с учётом <br /> особенностей
                  вашего проекта для удобной и <br /> быстрой работы с
                  соцсетями...
                  <InstrumentsBoxTextThree
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    подробнее
                  </InstrumentsBoxTextThree>
                </InstrumentsBoxTextOne>
                <InstrumentsBoxTextTwo>
                  Для тех, кто хочет упростить работу с публикацией в соцсети
                </InstrumentsBoxTextTwo>
              </InstrumentsBoxTextContainer>
              <InstrumentsBoxContainerImage>
                <InstrumentsBoxContainerImageTextOne>
                  Вкл
                </InstrumentsBoxContainerImageTextOne>
                <InstrumentsBoxImage src={IMAGES.insturments.ok} />
              </InstrumentsBoxContainerImage>
            </InstrumentsBox>
            <InstrumentsBox>
              <InstrumentsBoxTextContainer>
                <InstrumentsBoxText>
                  Настройте расписание <br /> постов под себя
                </InstrumentsBoxText>
                <InstrumentsBoxTextOne>
                  Составьте расписание публикаций с учётом <br /> особенностей
                  вашего проекта для удобной и <br /> быстрой работы с
                  соцсетями...
                  <InstrumentsBoxTextThree
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    подробнее
                  </InstrumentsBoxTextThree>
                </InstrumentsBoxTextOne>
                <InstrumentsBoxTextTwo>
                  Для тех, кто хочет упростить работу с публикацией в соцсети
                </InstrumentsBoxTextTwo>
              </InstrumentsBoxTextContainer>
              <InstrumentsBoxContainerImage>
                <InstrumentsBoxContainerImageText>
                  Выкл
                </InstrumentsBoxContainerImageText>
                <InstrumentsBoxImage src={IMAGES.insturments.saly} />
              </InstrumentsBoxContainerImage>
            </InstrumentsBox>
          </InstrumentsContainer>
          <InstrumentsContainer>
            <InstrumentsBox>
              <InstrumentsBoxTextContainer>
                <InstrumentsBoxText>
                  Настройте расписание <br /> постов под себя
                </InstrumentsBoxText>
                <InstrumentsBoxTextOne>
                  Составьте расписание публикаций с учётом <br /> особенностей
                  вашего проекта для удобной и <br /> быстрой работы с
                  соцсетями...
                  <InstrumentsBoxTextThree
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    подробнее
                  </InstrumentsBoxTextThree>
                </InstrumentsBoxTextOne>
                <InstrumentsBoxTextTwo>
                  Для тех, кто хочет упростить работу с публикацией в соцсети
                </InstrumentsBoxTextTwo>
              </InstrumentsBoxTextContainer>
              <InstrumentsBoxContainerImage>
                <InstrumentsBoxContainerImageText>
                  Выкл
                </InstrumentsBoxContainerImageText>
                <InstrumentsBoxImage src={IMAGES.insturments.telephone} />
              </InstrumentsBoxContainerImage>
            </InstrumentsBox>
            <InstrumentsBox>
              <InstrumentsBoxTextContainer>
                <InstrumentsBoxText>
                  Настройте расписание <br /> постов под себя
                </InstrumentsBoxText>
                <InstrumentsBoxTextOne>
                  Составьте расписание публикаций с учётом <br /> особенностей
                  вашего проекта для удобной и <br /> быстрой работы с
                  соцсетями...
                  <InstrumentsBoxTextThree
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    подробнее
                  </InstrumentsBoxTextThree>
                </InstrumentsBoxTextOne>
                <InstrumentsBoxTextTwo>
                  Для тех, кто хочет упростить работу с публикацией в соцсети
                </InstrumentsBoxTextTwo>
              </InstrumentsBoxTextContainer>
              <InstrumentsBoxContainerImage>
                <InstrumentsBoxContainerImageText>
                  Выкл
                </InstrumentsBoxContainerImageText>
                <InstrumentsBoxImag src={IMAGES.insturments.icon} />
              </InstrumentsBoxContainerImage>
            </InstrumentsBox>
          </InstrumentsContainer>
        </InstrumentsHeaderContainer>
      </InstrumentsHeader>
    </>
  );
}
