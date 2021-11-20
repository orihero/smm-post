import React, { useState } from "react";
import { ComeBackMonth, NextMonth } from "../../../constants/icons";
import { CalendarContainer } from "../calendar-modal/ModalCalendar.style";
import {
  BackMonthBox,
  DateBoxs,
  DateSpan,
  DaysBox,
  MonthContainer,
  MothHeads,
  NextMothBox,
  NowBox,
  TimeBox,
  TomorrowBox,
  WeeksContainer,
  WeeksName,
} from "./Calendar.style";

function Calendar() {
  let [selectedTab, setSelectedTab] = useState();
  let [selectedTabOpacity, setSelectedTabOpacity] = useState();
  return (
    <>
      <MonthContainer>
        <MothHeads>Октябрь 2021</MothHeads>
        <BackMonthBox>
          <ComeBackMonth />
        </BackMonthBox>
        <NextMothBox>
          <NextMonth />
        </NextMothBox>
      </MonthContainer>
      <CalendarContainer>
        <WeeksContainer>
          <WeeksName>SAT</WeeksName>
          <WeeksName>SUN</WeeksName>
          <WeeksName>MON</WeeksName>
          <WeeksName>TUE</WeeksName>
          <WeeksName>WED</WeeksName>
          <WeeksName>TUS</WeeksName>
          <WeeksName>FRI</WeeksName>
        </WeeksContainer>
        <WeeksContainer>
          <DateBoxs
            active
            onClick={() => setSelectedTab(0)}
            active={selectedTab === 0}
          >
            01
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(1)}
            active={selectedTab === 1}
          >
            02
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(2)}
            active={selectedTab === 2}
          >
            03
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(3)}
            active={selectedTab === 3}
          >
            04
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(4)}
            active={selectedTab === 4}
          >
            05
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(5)}
            active={selectedTab === 5}
          >
            06
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(6)}
            active={selectedTab === 6}
          >
            07
          </DateBoxs>
        </WeeksContainer>
        <WeeksContainer>
          <DateBoxs
            active
            onClick={() => setSelectedTab(7)}
            active={selectedTab === 7}
          >
            08
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(8)}
            active={selectedTab === 8}
          >
            09
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(9)}
            active={selectedTab === 9}
          >
            10
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(10)}
            active={selectedTab === 10}
          >
            11
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(11)}
            active={selectedTab === 11}
          >
            12
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(12)}
            active={selectedTab === 12}
          >
            13
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(13)}
            active={selectedTab === 13}
          >
            14
          </DateBoxs>
        </WeeksContainer>
        <WeeksContainer>
          <DateBoxs
            active
            onClick={() => setSelectedTab(14)}
            active={selectedTab === 14}
          >
            15
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(15)}
            active={selectedTab === 15}
          >
            16
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(16)}
            active={selectedTab === 16}
          >
            17
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(17)}
            active={selectedTab === 17}
          >
            18
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(18)}
            active={selectedTab === 18}
          >
            19
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(19)}
            active={selectedTab === 19}
          >
            20
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(20)}
            active={selectedTab === 20}
          >
            21
          </DateBoxs>
        </WeeksContainer>
        <WeeksContainer>
          <DateBoxs
            active
            onClick={() => setSelectedTab(21)}
            active={selectedTab === 21}
          >
            22
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(22)}
            active={selectedTab === 22}
          >
            23
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(23)}
            active={selectedTab === 23}
          >
            24
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(24)}
            active={selectedTab === 24}
          >
            25
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(25)}
            active={selectedTab === 25}
          >
            26
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(26)}
            active={selectedTab === 26}
          >
            27
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(27)}
            active={selectedTab === 27}
          >
            28
          </DateBoxs>
        </WeeksContainer>
        <WeeksContainer>
          <DateBoxs
            active
            onClick={() => setSelectedTab(28)}
            active={selectedTab === 28}
          >
            29
          </DateBoxs>
          <DateBoxs
            active
            onClick={() => setSelectedTab(29)}
            active={selectedTab === 29}
          >
            30
          </DateBoxs>
          <DateSpan
            active
            onClick={() => setSelectedTab(30)}
            active={selectedTab === 30}
          >
            01
          </DateSpan>
          <DateSpan
            active
            onClick={() => setSelectedTab(31)}
            active={selectedTab === 31}
          >
            02
          </DateSpan>
          <DateSpan
            active
            onClick={() => setSelectedTab(32)}
            active={selectedTab === 32}
          >
            03
          </DateSpan>
          <DateSpan
            active
            onClick={() => setSelectedTab(33)}
            active={selectedTab === 33}
          >
            04
          </DateSpan>
          <DateSpan
            active
            onClick={() => setSelectedTab(34)}
            active={selectedTab === 34}
          >
            05
          </DateSpan>
        </WeeksContainer>
        <TimeBox>
          <NowBox
            active
            onClick={() => setSelectedTabOpacity(0)}
            active={selectedTabOpacity === 0}
          >
            Сейчас
          </NowBox>
          <DaysBox>
            <NowBox
              active
              onClick={() => setSelectedTabOpacity(1)}
              active={selectedTabOpacity === 1}
            >
              Через час
            </NowBox>
            <TomorrowBox
              active
              onClick={() => setSelectedTabOpacity(2)}
              active={selectedTabOpacity === 2}
            >
              Завтра
            </TomorrowBox>
          </DaysBox>
          <NowBox
            active
            onClick={() => setSelectedTabOpacity(3)}
            active={selectedTabOpacity === 3}
          >
            Ближайшее лучшее время
          </NowBox>
        </TimeBox>
      </CalendarContainer>
    </>
  );
}

export default Calendar;
