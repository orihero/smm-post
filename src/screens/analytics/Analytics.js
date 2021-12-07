import React, { useState } from "react";
import { useHistory } from "react-router";
import { ArrowDownIcon, ExportIcon } from "../../constants/icons";
import { TextsDiv } from "../profile/Profile.styles";
import {
  AnalyticTextContainer,
  BarContainer,
  DateButtonBox,
  DateButtonContainer,
  ExportBox,
  OptionBox,
  OptionsHeads,
} from "./Analytics.syles";
import DatanotCollected from "./datanotcollectedfiles/DatanotCollected";
import Analyticsdemo from './analyticsdemo/Analyticsdemo'


function Analytics() {

  let [tabs, setTabs] = useState([
    { title: "Вовлечённость", Content: DatanotCollected },
    { title: "Лучшие посты", Content: DatanotCollected },
    { title: "Лучшее время", Content: DatanotCollected },
  ]);
  const [activeTab, setActiveTab] = useState(0);
  let Content = tabs[activeTab].Content;
  const [menuVisible, setMenuVisible] = useState(false);
  let toggleMenu = () => {
    setMenuVisible((e) => !e);
  };
  let history = useHistory();
  let onBarChart = (i) => {
    let newTabs = tabs.map((tab, index) => {
      if (index == i) {
        return { ...tab, Content: Analyticsdemo }
      }
      return tab
    })

    setTabs(newTabs)

  }
  return (
    <>
      <BarContainer>
        <TextsDiv>
          {tabs.map((e, i) => {
            return (
              <AnalyticTextContainer
                active={i === activeTab}
                onClick={() => setActiveTab(i)}
              >
                {e.title}
              </AnalyticTextContainer>
            );
          })}
          <DateButtonContainer>
            <DateButtonBox active={menuVisible} onClick={toggleMenu}>
              Последние
              <ArrowDownIcon style={{ marginLeft: "15px", color: "#102046" }} />
              {menuVisible && (
                <OptionBox>
                  <OptionsHeads onClick={() => onBarChart(0)}>Последние</OptionsHeads>
                  <OptionsHeads>За всё время</OptionsHeads>
                </OptionBox>
              )}
            </DateButtonBox>
            <ExportBox>
              <ExportIcon style={{ marginRight: "10px", color: "#102046" }} />
              Экспорт
            </ExportBox>
          </DateButtonContainer>
        </TextsDiv>
        {Content && <Content />}
      </BarContainer>
    </>
  );
}

export default Analytics;
