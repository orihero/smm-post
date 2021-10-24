import React, { useState } from "react";
import { IMAGES } from "../../constants/images";


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
  ProfileTextTwo,
  ParagpaphFirst,
  TextsDiv
} from "./Profile.styles";
import ProfileHeader from './ProfileHeader'


let tabs = ["Запланированные", "Опубликованные", ];

export default function Profile() {
  function onChangePassword() {}
  const [activeTab, setActiveTab] = useState(0);
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
            <ProfileHeader/>
          <ProfileBoxOne>
            <ProfileInnercontainer>
              <ProfileImageOne src={IMAGES.profile.ProfileImage} />
              <ProfileInputContainer>
                <ProfileInputText>Имя пользователя</ProfileInputText>
                <ProfileInput placeholder="Рафаэль  Рафаэль" type="text" />
              </ProfileInputContainer>
              <ProfileInputContainer>
                <ProfileInputText>Адресс почты</ProfileInputText>
                <ProfileInput placeholder="rafael@gmail.com" />
              </ProfileInputContainer>
              <ProfileInputContainer>
                <ProfileInputText>Номер телефона</ProfileInputText>
                <ProfileInput placeholder="+998 99 888 8888" type="number" />
              </ProfileInputContainer>
            </ProfileInnercontainer>
            <ProfileContainer>
              <ProfileDelete> Удалить профиль</ProfileDelete>
              <ProfileTextTwo>Сменить пароль</ProfileTextTwo>
            </ProfileContainer>
          </ProfileBoxOne>
        </ProfileInner>
      </ProfileHeadr>
    </>
  );
}
