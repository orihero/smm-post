import React from "react";
import {
  EducationTwoText,
  EducationTwoHeader,
  EducationTwoInner,
  EducationTwoContainer,
  EducationTwoTextContainer,
  EducationTwoTextContainerTwo,
  EducationTwoTextTwo,
  EducationIconContainer,
  EducationTextTwo,
  EducationTextTwoContainer
} from "./EducationTwo.styles";
import { ICONS, EducationIconmark, EducationIcon } from "../../constants/icons";

export default function EducationTwo() {
  return (
    <>
      <EducationTwoHeader>
        <EducationTwoInner>
          <EducationTextTwoContainer>
            <EducationIcon />
            <EducationTextTwo>
            Шаг 2. Подключите страницы, чтобы начать работу            </EducationTextTwo>
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
            <EducationTwoTextContainerTwo>
              <EducationIconContainer>Подключить</EducationIconContainer>
            </EducationTwoTextContainerTwo>
          </EducationTwoContainer>
        </EducationTwoInner>
      </EducationTwoHeader>
    </>
  );
}
