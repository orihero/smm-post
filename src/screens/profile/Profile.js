import React, { useState } from "react";
import { IMAGES } from "../../constants/images";
import { ICONS, PencilIcon } from "../../constants/icons";

import {
  ProfileHeadr,
  ProfileInner,
  ProfileInputContainer,
  ProfileInput,
  ProfileBoxOne,
  ProfileImageOne,
  ProfileInnercontainer,
  ProfileInputText,
  ProfileContainer,
  ProfileDelete,
  ProfileIcon,
  ProfileTextTwo,
  ParagpaphFirst,
  TextsDiv,
  ProfileIconContainer,
} from "./Profile.styles";
import ProfileHeader from "./ProfileHeader";
import { useHistory } from "react-router-dom";

let tabs = ["Запланированные", "Уведомления"];

export default function Profile({}) {
  let history = useHistory();
  const [activeTab, setActiveTab] = useState(0);
  let onNavigate = ()=>{
    history.push("/changePassword")
  }
  return (
    <>
      <ProfileHeadr>
        <ProfileInner>
          <TextsDiv>
            {tabs.map((e, i) => {
              return (
                <ParagpaphFirst
                  active={i === activeTab}
                  onClick={() => setActiveTab(i)}
                >
                  {e}
                </ParagpaphFirst>
              );
            })}
          </TextsDiv>
          <ProfileHeader />
          <ProfileBoxOne>
            <ProfileInnercontainer>
              <ProfileIconContainer>
                <ProfileImageOne src={IMAGES.profile.ProfileImage} />
                <PencilIcon />
              </ProfileIconContainer>
              <ProfileInputContainer>
                <ProfileInputText>Имя пользователя</ProfileInputText>
                <ProfileInput placeholder="Рафаэль  Рафаэль" type="text" />
              </ProfileInputContainer>
              <ProfileInputContainer>
                <ProfileInputText>Адресс почты</ProfileInputText>
                <ProfileInput placeholder="rafael@gmail.com"></ProfileInput>
              </ProfileInputContainer>
              <ProfileInputContainer>
                <ProfileInputText>Номер телефона</ProfileInputText>
                <ProfileInput placeholder="+998 99 888 8888" type="number" />
              </ProfileInputContainer>
            </ProfileInnercontainer>
            <ProfileContainer>
              <ProfileDelete> Удалить профиль</ProfileDelete>
              <ProfileTextTwo onClick={onNavigate}>Сменить пароль</ProfileTextTwo>
            </ProfileContainer>
          </ProfileBoxOne>
        </ProfileInner>
      </ProfileHeadr>
    </>
  );
}
