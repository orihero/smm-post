import { useState } from "react";
import ModalHelp from "./ModalHelp";
import { BUTTON } from "./Help.styles";

export default function Help() {
  const [openModalHelp, setOpenModalHelp] = useState(false);
  return (
    <>
      {openModalHelp && <ModalHelp claseModal={setOpenModalHelp} />}

      <BUTTON
        onClick={() => {
          setOpenModalHelp(true);
        }}
      >
        11
      </BUTTON>
    </>
  );
}
