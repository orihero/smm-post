import React, { useState } from "react";
import BarChart from "../../components/charts/BarChart";
import { TextsDiv } from "../profile/Profile.styles";
import { AnalyticsParagraph, AnalyticTextContainer, BarContainer } from "./Analytics.syles";

let tabs = ["Вовлечённость", "Лучшие посты", "Лучшее время"];

function Analytics() {
    const [activeTab, setActiveTab] = useState(0)
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
                                {e}
                            </AnalyticTextContainer>

                        );
                    })}

                </TextsDiv>
                <AnalyticsParagraph>Взаимодействие аудитории с вашими постами. <br /> Данные обновляются несколько раз в день.</AnalyticsParagraph>
                <BarChart />
            </BarContainer>
        </>
    );
}

export default Analytics;
