import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Planned from "./modules/Planned";
import Published from "./modules/Published";
import { ICONS, Plus } from "../../constants/icons";

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
import Drafts from "./Drafts/Drafts";

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
