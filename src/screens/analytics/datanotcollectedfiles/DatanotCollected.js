import React from "react";
import { IMAGES } from "../../../constants/images";
import {
  HeadsThisBox,
  NotCollecteBox,
  NotCollectedHeads,
  ParagraphThisBox,
  SandTimeImageBox,
} from "./DatanotCollected.style";

function DatanotCollected() {
  return (
    <>
      <NotCollecteBox>
        <NotCollectedHeads>
          <SandTimeImageBox src={IMAGES.datanotcollected.SandTime} />
          <HeadsThisBox>Данные пока не собраны</HeadsThisBox>
          <ParagraphThisBox>
            Зайдите на эту вкладку позже или изучите лучшее время для поста
          </ParagraphThisBox>
        </NotCollectedHeads>
      </NotCollecteBox>
    </>
  );
}

export default DatanotCollected;
