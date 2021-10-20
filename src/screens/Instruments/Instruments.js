import { useState } from "react";
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
} from "./Instruments.styles";
import Modal from "./Modal";

import ok from "../../assets/ok.png";
import saly from "../../assets/Saly-12.png";
import telifon from "../../assets/Saly-24.png";
import icon from "../../assets/Group-2.png";

export default function Instruments() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <InstrumentsHeader>
        <InstrumentsHeaderContainer>
          <InstrumentsInner>
            <InstrumentsText>
              Используйте Модуль А по максимуму с полезными инструментами, чтобы{" "}
              <br /> экономить время при работе с соцсетями и успевать больше
            </InstrumentsText>
          </InstrumentsInner>
          <InstrumentsContainer>
            <InstrumentsBox
              
            >
              
              <InstrumentsBoxTextContainer>
                <InstrumentsBoxText>
                  Настройте расписание <br /> постов под себя
                </InstrumentsBoxText>
                <InstrumentsBoxTextOne>
                  Составьте расписание публикаций с учётом <br /> особенностей
                  вашего проекта для удобной и <br /> быстрой работы с
                  соцсетями...{" "}
                  <InstrumentsBoxTextThree> подробнее</InstrumentsBoxTextThree>
                </InstrumentsBoxTextOne>
                <InstrumentsBoxTextTwo>
                  Для тех, кто хочет упростить работу с публикацией в соцсети
                </InstrumentsBoxTextTwo>
              </InstrumentsBoxTextContainer>
              <InstrumentsBoxContainerImage>
                <InstrumentsBoxContainerImageTextOne>
                  Вкл
                </InstrumentsBoxContainerImageTextOne>
                
                <InstrumentsBoxImage src={ok} />
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
                  соцсетями...{" "}
                  <InstrumentsBoxTextThree  onClick={() => {
                setOpenModal(true);
              }}> подробнее</InstrumentsBoxTextThree>
                </InstrumentsBoxTextOne>
                <InstrumentsBoxTextTwo>
                  Для тех, кто хочет упростить работу с публикацией в соцсети
                </InstrumentsBoxTextTwo>
              </InstrumentsBoxTextContainer>
              <InstrumentsBoxContainerImage>
                <InstrumentsBoxContainerImageText>
                  Выкл
                </InstrumentsBoxContainerImageText>
                <InstrumentsBoxImage src={telifon} />
              </InstrumentsBoxContainerImage>
            </InstrumentsBox>
          </InstrumentsContainer>
          <InstrumentsContainer>
          {openModal &&<Modal claseModal={setOpenModal}/>  }
            <InstrumentsBox>
              <InstrumentsBoxTextContainer>
                <InstrumentsBoxText>
                  Настройте расписание <br /> постов под себя
                </InstrumentsBoxText>
                <InstrumentsBoxTextOne>
                  Составьте расписание публикаций с учётом <br /> особенностей
                  вашего проекта для удобной и <br /> быстрой работы с
                  соцсетями...{" "}
                  <InstrumentsBoxTextThree> подробнее</InstrumentsBoxTextThree>
                </InstrumentsBoxTextOne>
                <InstrumentsBoxTextTwo>
                  Для тех, кто хочет упростить работу с публикацией в соцсети
                </InstrumentsBoxTextTwo>
              </InstrumentsBoxTextContainer>
              <InstrumentsBoxContainerImage>
                <InstrumentsBoxContainerImageText>
                  Выкл
                </InstrumentsBoxContainerImageText>
                <InstrumentsBoxImage src={saly} />
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
                  соцсетями...{" "}
                  <InstrumentsBoxTextThree> подробнее</InstrumentsBoxTextThree>
                </InstrumentsBoxTextOne>
                <InstrumentsBoxTextTwo>
                  Для тех, кто хочет упростить работу с публикацией в соцсети
                </InstrumentsBoxTextTwo>
              </InstrumentsBoxTextContainer>
              <InstrumentsBoxContainerImage>
                <InstrumentsBoxContainerImageText>
                  Выкл
                </InstrumentsBoxContainerImageText>
                <InstrumentsBoxImage src={icon} />
              </InstrumentsBoxContainerImage>
            </InstrumentsBox>
          </InstrumentsContainer>
        </InstrumentsHeaderContainer>
      </InstrumentsHeader>
    </>
  );
}
