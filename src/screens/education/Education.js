import React, { useState } from "react";
import {
  EducationHeader,
  EducationInner,
  EducationContainer,
  EducationInput,
  EducationCheck,
  EducationCheckText,
  EducationCheckContainer,
  EducationText,
  EducationTextOne,
  EducationImageContainer,
  EducationImage,
  EducationImage1,
  EducationImageText,
  EducationBoxContainer,
  EducationButton,
  // EducationContainerRight,  
} from "./Education.styles";
import { IMAGES } from "../../constants/images";

export default function Education() {
  let [selectedTab, setSelectedTab] = useState();
  return (
    <>
      <EducationHeader>
        <EducationInner>
          
          <EducationContainer>
            <EducationText>
              Чтобы мы знали, как обращаться к вам в Модуле А, <br /> отчётах и
              рассылках.
            </EducationText>
            <EducationInput placeholder={"Как вас зовут?"} />
            <EducationBoxContainer>
              <EducationImageContainer
                onClick={() => setSelectedTab(0)}
                active={selectedTab === 0}
              >
                <EducationImage src={IMAGES.education.Iworkmyself} />
                <EducationImageText>Работаю сам</EducationImageText>
              </EducationImageContainer>
              <EducationImageContainer
                onClick={() => setSelectedTab(1)}
                active={selectedTab === 1}
              >
                <EducationImage1 src={IMAGES.education.Team} />
                <EducationImageText>Работаем командой</EducationImageText>
              </EducationImageContainer>
            </EducationBoxContainer>
            <EducationTextOne>Откуда вы узнали про Модуль А</EducationTextOne>
            <EducationCheckContainer>
              <EducationCheck type={"checkbox"} />
              <EducationCheckText>От друзей</EducationCheckText>
            </EducationCheckContainer>
            <EducationCheckContainer>
              <EducationCheck type={"checkbox"} />
              <EducationCheckText>
                Из поисковых систем (Яндекс, Google и другие)
              </EducationCheckText>
            </EducationCheckContainer>
            <EducationCheckContainer>
              <EducationCheck type={"checkbox"} />
              <EducationCheckText>Из блога Модуль А</EducationCheckText>
            </EducationCheckContainer>
            <EducationCheckContainer>
              <EducationCheck type={"checkbox"} />
              <EducationCheckText>Нетология</EducationCheckText>
            </EducationCheckContainer>
            <EducationCheckContainer>
              <EducationCheck type={"checkbox"} />
              <EducationCheckText>Skillbox</EducationCheckText>
            </EducationCheckContainer>
            <EducationCheckContainer>
              <EducationCheck type={"checkbox"} />
              <EducationCheckText>Другое</EducationCheckText>
            </EducationCheckContainer>
          </EducationContainer>
          <EducationButton>Пропустить</EducationButton>
        </EducationInner>
      </EducationHeader>
    </>
  );
}
