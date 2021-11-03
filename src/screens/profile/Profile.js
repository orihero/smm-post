import React, { useState } from "react";
import { IMAGES } from "../../constants/images";
import { ICONS, PencilIcon, ProfileSms, ProfileUser, ProfileCall, } from "../../constants/icons";

import {
  ProfileHeadr,
  ProfileInner,
  ProfileInputContainer,
  ProfileInput,
  ProfileInput1,
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
                <ProfileInput><ProfileInput1  placeholder="Рафаэль  Рафаэль  " /><ProfileUser/></ProfileInput>
              </ProfileInputContainer>
              <ProfileInputContainer>
                <ProfileInputText>Адресс почты</ProfileInputText>
                <ProfileInput><ProfileInput1  placeholder="rafael@gmail.com" /><ProfileSms/></ProfileInput>
              </ProfileInputContainer>
              <ProfileInputContainer>
                <ProfileInputText>Номер телефона</ProfileInputText>
                <ProfileInput><ProfileInput1  placeholder="+998 99 888 8888 " /><ProfileCall/></ProfileInput>
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
