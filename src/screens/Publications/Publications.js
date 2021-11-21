import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Drafts from "./Drafts/Drafts";
import Planned from "./modules/Planned";
import Published from "./modules/Published";
import {
  ParagpaphFirst,
  PublicationsButtons,
  PublicationsHeader,
} from "./Publications.styles";

let tabs = [
  { title: "Запланированные", Content: Planned },
  { title: "Опубликованные", Content: Published },
  { title: "Избранное", Content: null },
  { title: "Черновики", Content: Drafts },
];

export default function Publications() {
  const [activeTab, setActiveTab] = useState(0);
  let Content = tabs[activeTab].Content;
  let history = useHistory();
  let onNewpost = () => {
    history.push("/newpost");
  };
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
        {Content && <Content />}
      </PublicationsHeader>
    </>
  );
}
