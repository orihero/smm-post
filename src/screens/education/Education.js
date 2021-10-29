import React from "react";
import {
  EducationHeader,
  EducationInner,
  EducationContainer,
  EducationInput,
  EducationCheck,
  EducationText,
  EducationImageContainer,
  EducationImage,
  EducationImage1,
  EducationImageText,
  EducationBoxContainer,
} from "./Education.styles";
import { IMAGES } from "../../constants/images";

export default function Education() {
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
              <EducationImageContainer >
                <EducationImage src={IMAGES.education.Iworkmyself} />
                <EducationImageText>Работаю сам</EducationImageText>
              </EducationImageContainer>
              <EducationImageContainer>
                <EducationImage1 src={IMAGES.education.Team} />
                <EducationImageText>Работаем командой</EducationImageText>
              </EducationImageContainer>
            </EducationBoxContainer>
          </EducationContainer>
        </EducationInner>
      </EducationHeader>
    </>
  );
}
