import React, { useState } from "react";
import { useHistory } from "react-router";
import BarChart from "../../../components/charts/BarChart";
import { ArrowDownIcon, ExportIcon } from "../../../constants/icons";
import { TextsDiv } from "../../profile/Profile.styles";
import { AnalyticTextContainer, DateButtonBox, ExportBox, OptionBox, OptionsHeads } from "../Analytics.syles";
import DatanotCollected from "../datanotcollectedfiles/DatanotCollected";
import {
  AnalyticsParagraph,
  BarContainer,
  DateButtonContainer
} from "./Analyticsdemo.style";

let tabs = [
  { title: "Вовлечённость", Content: "" },
  { title: "Лучшие посты", Content: DatanotCollected },
  { title: "Лучшие время", Content: DatanotCollected },
]

function Analyticsdemo() {
  const [activeTab, setActiveTab] = useState(0);
  let Content = tabs[activeTab].Content;
  const [menuVisible, setMenuVisible] = useState(false);
  let toggleMenu = () => {
    setMenuVisible((e) => !e);
  };
  let history = useHistory();
  let onBarChart = () => {
    history.push("/analyticsdemo")
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
                  <OptionsHeads onClick={onBarChart}>Последние</OptionsHeads>
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
        <AnalyticsParagraph>
          Взаимодействие аудитории с вашими постами. <br /> Данные обновляются
          несколько раз в день.
        </AnalyticsParagraph>
        <BarChart />
      </BarContainer>
    </>
  );
}

export default Analyticsdemo;
