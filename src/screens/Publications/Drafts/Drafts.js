import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  DraftsButtonContainer,
  DraftsHeader,
  DraftsContainer,
  DraftsBox,
  DraftsInner,
  DraftsLogo,
  DraftsText,
  DraftsTextOne,
} from "./Drafts.styles";
import { IMAGES } from "../../../constants/images";
import PrimaryButton from "../../../components/general/buttons/RoundButton";

export default function Drafts() {
  let history = useHistory();
  let onNewpost = () => {
    history.push("/newpost");
  };
  return (
    <>
      <DraftsHeader>
        <DraftsInner>
          <DraftsLogo src={IMAGES.Drafts.DraftsLogo} />
          <DraftsText>Пока нет постов в черновиках</DraftsText>
          <DraftsTextOne>
            Черновики — отличное место, чтобы хранить посты, <br />
            над которыми вы работаете
          </DraftsTextOne>
        </DraftsInner>
        <DraftsButtonContainer>
          <DraftsContainer onClick={onNewpost} primary active={true}>
            Создать
          </DraftsContainer>
          <DraftsContainer  onClick={onNewpost} primary active={true}>
            Создать
          </DraftsContainer>
        </DraftsButtonContainer>
      </DraftsHeader>
    </>
  );
}
