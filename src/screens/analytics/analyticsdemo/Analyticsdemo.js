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
  { title: "Лучшие посты", Content: "" },
  { title: "Лучшие время", Content: "" },
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
      <AnalyticsParagraph>
        Взаимодействие аудитории с вашими постами. <br /> Данные обновляются
        несколько раз в день.
      </AnalyticsParagraph>
      <BarChart />
    </>
  );
}

export default Analyticsdemo;
