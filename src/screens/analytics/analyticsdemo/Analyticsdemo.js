import React, { useState } from "react";
import { useHistory } from "react-router";
import BarChart from "../../../components/charts/BarChart";
import { NewpostFacebook, NewpostInstagram, NewpostTwitter, NewpostVkontakte } from "../../../constants/icons";
import { AnalyticsNetsFaceBookBox, AnalyticsNetsInstagramBox, AnalyticsNetsTwitterBox, AnalyticsNetsVkontankteBox, AnalyticsParagraph, NetsContainer, NetsInBox, PlusBox } from "./Analyticsdemo.style";

let tabs = [
  { title: "Вовлечённость", Content: "" },
  { title: "Лучшие посты", Content: "" },
  { title: "Лучшие время", Content: "" },
];

function Analyticsdemo() {
  const [activeTab, setActiveTab] = useState(0);
  let Content = tabs[activeTab].Content;
  const [menuVisible, setMenuVisible] = useState(false);
  let toggleMenu = () => {
    setMenuVisible((e) => !e);
  };
  let history = useHistory();
  let onBarChart = () => {
    history.push("/analyticsdemo");
  };
  let [isprimaryTab, setPrimaryTab] = useState()
  return (
    <>
      <AnalyticsParagraph>
        Взаимодействие аудитории с вашими постами. <br /> Данные обновляются
        несколько раз в день.
      </AnalyticsParagraph>
      <NetsContainer>
        <NetsInBox
          active
          onClick={() => setPrimaryTab(0)}
          active={isprimaryTab === 0}
        >
          MB
          <AnalyticsNetsFaceBookBox>
            <NewpostFacebook />
          </AnalyticsNetsFaceBookBox>
        </NetsInBox>
        <NetsInBox
          active
          onClick={() => setPrimaryTab(1)}
          active={isprimaryTab === 1}
        >
          MB
          <AnalyticsNetsVkontankteBox>
            <NewpostVkontakte style={{ marginTop: 2 }} />
          </AnalyticsNetsVkontankteBox>
        </NetsInBox>
        <NetsInBox
          active
          onClick={() => setPrimaryTab(2)}
          active={isprimaryTab === 2}
        >
          MB
          <AnalyticsNetsTwitterBox>
            <NewpostTwitter />
          </AnalyticsNetsTwitterBox>
        </NetsInBox>
        <NetsInBox
          active
          onClick={() => setPrimaryTab(3)}
          active={isprimaryTab === 3}
        >
          MB
          <AnalyticsNetsInstagramBox>
            <NewpostInstagram />
          </AnalyticsNetsInstagramBox>
        </NetsInBox>
        <PlusBox>+</PlusBox>
      </NetsContainer>
      <BarChart />
    </>
  );
}

export default Analyticsdemo;
