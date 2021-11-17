import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Planned from "./modules/Planned";
import Published from "./modules/Published";
import {
  ParagpaphFirst,
  PlusIcon,
  PublicationsBottom,
  PublicationsBox,
  PublicationsBtn,
  PublicationsButton,
  PublicationsButtons,
  PublicationsContainer,
  PublicationsHeader,
  PublicationsPost,
  PublicationsSize,
  PublicationsSizeNo,
} from "./Publications.styles";

let tabs = [
  { title: "Запланированные", Content: Planned },
  { title: "Опубликованные", Content: Published },
  { title: "Избранное", Content: null },
  { title: "Черновики", Content: null },
];

export default function Publications() {
  const [activeTab, setActiveTab] = useState(0);
  let Content = tabs[activeTab].Content;
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
                {e.title}
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
              {/* <PlusIcon onClick={onNewpost} src={PlusIcon} /> */}
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
              {/* <PlusIcon onClick={onNewpost} src={PlusIcon} /> */}
              <PublicationsPost>Запланировать пост</PublicationsPost>
            </PublicationsSize>
            <PublicationsSizeNo />
            <PublicationsSizeNo />
            <PublicationsSizeNo />
            <PublicationsSizeNo />
          </PublicationsContainer>
        </PublicationsBottom>
        {Content && <Content />}
      </PublicationsHeader>
    </>
  );
}
