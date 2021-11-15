import React from "react";
import {
  PlusIcon,
  PublicationsBottom,
  PublicationsBox,
  PublicationsBtn,
  PublicationsButton,
  PublicationsContainer,
  PublicationsPost,
  PublicationsSize,
  PublicationsSizeNo,
} from "../Publications.styles";
import Plus from "../../../assets/plus.svg";
import { useHistory } from "react-router";

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
            <PlusIcon onClick={onNewpost} src={Plus} />
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
            <PlusIcon onClick={onNewpost} src={Plus} />
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
