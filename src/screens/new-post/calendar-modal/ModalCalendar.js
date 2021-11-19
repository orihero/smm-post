import React, { useState } from "react";
import Calendar from "../newpost-calendar/Calendar";
import {
    CalendarContainer,
    ModalBackgrundHelp,
    ModalBoxHelp,
    ModalContainerHelp,
    ModalExitHelp,
} from "./ModalCalendar.style";

function ModalCalendar() {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <ModalBackgrundHelp>
                <ModalContainerHelp>
                    <ModalBoxHelp>
                        {/* <ModalExitHelp onClick={() => claseModal(false)}>x</ModalExitHelp> */}
                    </ModalBoxHelp>
                    <CalendarContainer>
                        <Calendar onChange={onChange} value={value} />
                    </CalendarContainer>
                </ModalContainerHelp>
            </ModalBackgrundHelp>
        </>
    );
}

export default ModalCalendar;
