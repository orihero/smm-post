import React, { useState } from "react";
import RoundButton from "../../components/general/buttons/RoundButton";
import {
  EducationTwoText,
  EducationTwoTextOne,
  EducationTwoHeader,
  EducationTwoInner,
  EducationTwoContainer,
  EducationTwoTextContainer,
  EducationTwoTextContainerTwo,
  EducationTwoTextTwo,
  EducationIconContainer,
  EducationTextTwo,
  EducationBox,
  EducationTextTwoContainer,
  EducationBoxOne,
  EducationTwoBtn,
  ButtonsContainerOne,
} from "./EducationTwo.styles";
import { useHistory } from "react-router-dom";

import {
  ICONS,
  EducationIconmark,
  EducationIcon,
  instagramIcons,
  TelegramIcons,
} from "../../constants/icons";

export default function EducationTwo() {
  let history = useHistory();
  let onBack = () => {
    history.push("/education");
  };
  let onNext = () => {
    history.push("/educationthree");
  };
  let [selectedTab, setSelectedTab] = useState();

  return (
    <>
      <EducationTwoHeader>
        <EducationTwoInner>
          <EducationTextTwoContainer>
            <EducationIcon />
            <EducationTextTwo>
              Шаг 2. Подключите страницы, чтобы начать работу{" "}
            </EducationTextTwo>
          </EducationTextTwoContainer>
          <EducationTwoContainer>
            <EducationTwoTextContainer>
              <EducationIconmark />
              <EducationTwoText>
                Bexzod, подключите страницы, чтобы планировать публикации,{" "}
                <br />
                пользоваться аналитикой и всеми возможностями Амплифр
              </EducationTwoText>
            </EducationTwoTextContainer>
            <EducationTwoTextTwo>
              Для подключения нужно быть администратором страницы и предоставить{" "}
              <br /> все доступы, которые запрашивает Модуль А, чтобы всё
              работало корректно. Подключить страницы можно позже в настройках.
            </EducationTwoTextTwo>
            <EducationBox>
              <EducationTwoTextContainerTwo
                onClick={() => setSelectedTab(0)}
                active={selectedTab === 0}
              >
                <EducationIconContainer>
                  <TelegramIcons /> Подключить
                </EducationIconContainer>
              </EducationTwoTextContainerTwo>
              <EducationTwoTextContainerTwo
                onClick={() => setSelectedTab(1)}
                active={selectedTab === 1}
              >
                <EducationIconContainer>
                  <TelegramIcons /> Подключить
                </EducationIconContainer>
              </EducationTwoTextContainerTwo>
              <EducationTwoTextContainerTwo
                onClick={() => setSelectedTab(2)}
                active={selectedTab === 2}
              >
                <EducationIconContainer>
                  <TelegramIcons /> Подключить
                </EducationIconContainer>
              </EducationTwoTextContainerTwo>
              <EducationTwoTextContainerTwo
                onClick={() => setSelectedTab(3)}
                active={selectedTab === 3}
              >
                <EducationIconContainer>
                  <TelegramIcons /> Подключить
                </EducationIconContainer>
              </EducationTwoTextContainerTwo>
              <EducationTwoTextContainerTwo
                onClick={() => setSelectedTab(4)}
                active={selectedTab === 4}
              >
                <EducationIconContainer>
                  <TelegramIcons /> Подключить
                </EducationIconContainer>
              </EducationTwoTextContainerTwo>
              <EducationTwoTextContainerTwo
                onClick={() => setSelectedTab(5)}
                active={selectedTab === 5}
              >
                <EducationIconContainer>
                  <TelegramIcons /> Подключить
                </EducationIconContainer>
              </EducationTwoTextContainerTwo>
              <EducationTwoTextContainerTwo
                onClick={() => setSelectedTab(6)}
                active={selectedTab === 6}
              >
                <EducationIconContainer>
                  <TelegramIcons /> Подключить
                </EducationIconContainer>
              </EducationTwoTextContainerTwo>
              <EducationTwoTextContainerTwo
                onClick={() => setSelectedTab(7)}
                active={selectedTab === 7}
              >
                <EducationIconContainer>
                  <TelegramIcons /> Подключить
                </EducationIconContainer>
              </EducationTwoTextContainerTwo>
            </EducationBox>

            <EducationBoxOne>
              <EducationIconmark />{" "}
              <EducationTwoTextOne>
                Амплифер не хранит ваши данные и использует <br /> официальные
                API соцсетей. Вы можете отключить <br /> страницы и отозвать
                доступы{" "}
              </EducationTwoTextOne>{" "}
            </EducationBoxOne>
          </EducationTwoContainer>
          <ButtonsContainerOne>
            <EducationTwoBtn onClick={onBack} >Назад</EducationTwoBtn>
            <RoundButton onClick={onNext} primary active={true}>
              Слудуюший шаг{" "}
            </RoundButton>
          </ButtonsContainerOne> 
        </EducationTwoInner>
      </EducationTwoHeader>
    </>
  );
}
