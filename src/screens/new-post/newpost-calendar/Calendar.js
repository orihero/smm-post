import React from "react";
import { CalendarContainer } from "../calendar-modal/ModalCalendar.style";
import { WeeksContainer, WeeksName } from "./Calendar.style";

function Calendar() {
  return (
    <>
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
      </CalendarContainer>
    </>
  );
}

export default Calendar;
