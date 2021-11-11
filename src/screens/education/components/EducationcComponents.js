import React from "react";
import {
  EducationcComponentsContainer,
  EducationcComponentsNuber,
  EducationcComponentsNuberContainer,
  EducationcComponentsText,
} from "./EducationcComponents.styles";

export default function EducationcComponents() {
  return (
    <EducationcComponentsContainer>
      <EducationcComponentsNuberContainer>
        <EducationcComponentsNuber>1</EducationcComponentsNuber>
        <EducationcComponentsText>Расскажите о себе</EducationcComponentsText>
      </EducationcComponentsNuberContainer>
      <EducationcComponentsNuberContainer>
        <EducationcComponentsNuber>2</EducationcComponentsNuber>
        <EducationcComponentsText>Подключите страницы</EducationcComponentsText>
      </EducationcComponentsNuberContainer>
      <EducationcComponentsNuberContainer>
        <EducationcComponentsNuber>3</EducationcComponentsNuber>
        <EducationcComponentsText>Запланируйте первый пост</EducationcComponentsText>
      </EducationcComponentsNuberContainer>
    </EducationcComponentsContainer>
  );
}
