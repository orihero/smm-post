import React from "react";
import { useHistory } from "react-router";
import { Plus } from "../../../constants/icons";
import {
  PlusIcon,
  PublicationsBottom,
  PublicationsBox,
  PublicationsBtn,
  PublicationsButton,
  PublicationsContainer,
  PublicationsPost,
  PublicationsSize,
  PublicationsSizeNo
} from "../Publications.styles";

export default function Planned() {
  let history = useHistory();
  let onNewpost = () => {
    history.push("/newpost");
  };
  return (
    <>
      <PublicationsBottom>
        <PublicationsBox>
          <PublicationsButton>Сегодня </PublicationsButton>
          <PublicationsBtn>понедельник </PublicationsBtn>
        </PublicationsBox>
        <PublicationsContainer>
          <PublicationsSize>
            <PlusIcon onClick={onNewpost}>
              <Plus />
            </PlusIcon>
            <PublicationsPost>Запланировать пост</PublicationsPost>
          </PublicationsSize>
          <PublicationsSizeNo />
          <PublicationsSizeNo />
          <PublicationsSizeNo />
          <PublicationsSizeNo />
        </PublicationsContainer>
      </PublicationsBottom>
      <PublicationsBottom>
        <PublicationsBox>
          <PublicationsButton>Завтра </PublicationsButton>
          <PublicationsBtn>вторник </PublicationsBtn>
        </PublicationsBox>
        <PublicationsContainer>
          <PublicationsSize>
            <PlusIcon onClick={onNewpost}>
              <Plus />
            </PlusIcon>
            <PublicationsPost>Запланировать пост</PublicationsPost>
          </PublicationsSize>
          <PublicationsSizeNo />
          <PublicationsSizeNo />
          <PublicationsSizeNo />
          <PublicationsSizeNo />
        </PublicationsContainer>
      </PublicationsBottom>
    </>
  );
}
