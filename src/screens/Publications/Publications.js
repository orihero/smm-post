import React, { useState } from "react";
import Plus from "../../assets/plus.svg";
import {
  PublicationsHeader,
  PublicationsBottom,
  PublicationsButtons,
  ParagpaphFirst,
  PublicationsButton,
  PublicationsBox,
  PublicationsBtn,
  PublicationsContainer,
  PublicationsSize,
  PublicationsSizeNo,
  PlusIcon,
  PublicationsPost,
} from "./Publications.styles";
let tabs = ["Запланированные", "Опубликованные", "Избранное", "Черновики"];

export default function Publications() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <PublicationsHeader>
        <PublicationsButtons>
          {tabs.map((e, i) => {
            return (
              <ParagpaphFirst
                active={i === activeTab}
                onClick={() => setActiveTab(i)}
              >
                {e}
              </ParagpaphFirst>
            );
          })}
        </PublicationsButtons>

        <PublicationsBottom>
          <PublicationsBox>
            <PublicationsButton>Сегодня </PublicationsButton>
            <PublicationsBtn>понедельник </PublicationsBtn>
          </PublicationsBox>
          <PublicationsContainer>
            <PublicationsSize>
              <PlusIcon src={Plus} />
              <PublicationsPost>Запланировать пост</PublicationsPost>
            </PublicationsSize>
            <PublicationsSizeNo />
            <PublicationsSizeNo />
            <PublicationsSizeNo />
            <PublicationsSizeNo />
          </PublicationsContainer>
        </PublicationsBottom>
        <PublicationsBottom>
          <PublicationsBox>
            <PublicationsButton>Завтра </PublicationsButton>
            <PublicationsBtn>вторник </PublicationsBtn>
          </PublicationsBox>
          <PublicationsContainer>
            <PublicationsSize>
              <PlusIcon src={Plus} />
              <PublicationsPost>Запланировать пост</PublicationsPost>
            </PublicationsSize>
            <PublicationsSizeNo />
            <PublicationsSizeNo />
            <PublicationsSizeNo />
            <PublicationsSizeNo />
          </PublicationsContainer>
        </PublicationsBottom>
      </PublicationsHeader>
    </>
  );
}
