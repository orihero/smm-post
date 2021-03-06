import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { EducationIcon } from "../../constants/icons";
import { IMAGES } from "../../constants/images";
import EducationcComponents from "./components/EducationcComponents";
import {
  EducationBoxContainer,
  EducationButton,
  EducationCheck,
  EducationCheckContainer,
  EducationCheckText,
  EducationContainer,
  EducationHeader,
  EducationImage,
  EducationImage1,
  EducationImageContainer,
  EducationImageText,
  EducationInner,
  EducationInput,
  EducationText,
  EducationTextOne,
  EducationTextTwo,
  EducationTextTwoContainer,
} from "./Education.styles";

export default function Education() {
  let history = useHistory();
  let onNext = () => {
    history.push("/educationtwo");
  };

  let [selectedTab, setSelectedTab] = useState();
  let [isSelectedTab, setIsSelectedTab] = useState();
  return (
    <>
      <EducationHeader>
        <EducationInner>
          <EducationTextTwoContainer>
            <EducationIcon />
            <EducationTextTwo>
              Шаг 1. Расскажите немного о себе
            </EducationTextTwo>
          </EducationTextTwoContainer>
          <EducationContainer>
            <EducationText>
              Чтобы мы знали, как обращаться к вам в Модуле А, <br /> отчётах и
              рассылках.
            </EducationText>
            <EducationInput placeholder={"Как вас зовут?"} />
            <EducationBoxContainer>
              <EducationImageContainer
                active
                onClick={() => setIsSelectedTab(0)}
                active={isSelectedTab === 0}
              >
                <EducationImage src={IMAGES.education.Iworkmyself} />
                <EducationImageText>Работаю сам</EducationImageText>
              </EducationImageContainer>
              <EducationImageContainer
                active
                onClick={() => setIsSelectedTab(1)}
                active={isSelectedTab === 1}
              >
                <EducationImage1 src={IMAGES.education.Team} />
                <EducationImageText>Работаем командой</EducationImageText>
              </EducationImageContainer>
            </EducationBoxContainer>
            <EducationTextOne>Откуда вы узнали про Модуль А</EducationTextOne>
            <EducationCheckContainer>
              <EducationCheck type="checkbox" />
              <EducationCheckText>От друзей</EducationCheckText>
            </EducationCheckContainer>
            <EducationCheckContainer>
              <EducationCheck type="checkbox" />
              <EducationCheckText>
                Из поисковых систем (Яндекс, Google и другие)
              </EducationCheckText>
            </EducationCheckContainer>
            <EducationCheckContainer>
              <EducationCheck type="checkbox" />
              <EducationCheckText>Из блога Модуль А</EducationCheckText>
            </EducationCheckContainer>
            <EducationCheckContainer>
              <EducationCheck type="checkbox" />
              <EducationCheckText>Нетология</EducationCheckText>
            </EducationCheckContainer>
            <EducationCheckContainer>
              <EducationCheck type="checkbox" />
              <EducationCheckText>Skillbox</EducationCheckText>
            </EducationCheckContainer>
            <EducationCheckContainer>
              <EducationCheck type="checkbox" />
              <EducationCheckText>Другое</EducationCheckText>
            </EducationCheckContainer>
          </EducationContainer>
          <EducationButton onClick={onNext}>Пропустить</EducationButton>
        </EducationInner>
        <EducationcComponents />
      </EducationHeader>
    </>
  );
}
