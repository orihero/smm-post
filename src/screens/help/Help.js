import { useState } from "react";
import { BUTTON } from "./Help.styles";
import ModalHelp from "./ModalHelp";

export default function Help() {
  const [openModalHelp, setOpenModalHelp] = useState(false);
  return (
    <>
      {openModalHelp && <ModalHelp setOpenModalHelp={setOpenModalHelp} />}

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
