import React, { useState } from "react";
import Modal from "react-modal";
import Calendar from "../newpost-calendar/Calendar";
import {
  CalendarContainer,
  ModalBackgrundHelp,
  ModalBoxHelp,
  ModalContainerHelp,
} from "./ModalCalendar.style";

function ModalCalendar({ claseModal, openModal }) {
  const [value, onChange] = useState(new Date());
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const customStyles = {
    overlay: {
      background: "transparent",
      opacity: "1",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overlay: "hidden",
      flexShrink: 1,
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -30%)",
      border: "none",
      borderRadius: "10px",
      color: "#fff",
      background: "white",
      padding: 0,
    },
  };

  function closeModal() {
    claseModal();
  }
  return (
    <>
      <Modal
        isOpen={openModal}
        onAfterOpen={claseModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalBackgrundHelp>
          <ModalContainerHelp>
            <ModalBoxHelp></ModalBoxHelp>
            <CalendarContainer>
              <div>
                <Calendar onChange={onChange} value={value} />
              </div>
            </CalendarContainer>
          </ModalContainerHelp>
        </ModalBackgrundHelp>
      </Modal>
    </>
  );
}

export default ModalCalendar;
