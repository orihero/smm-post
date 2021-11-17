import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  PencilIcon,
  ProfileCall,
  ProfileSms,
  ProfileUser,
} from "../../constants/icons";
import { IMAGES } from "../../constants/images";
import { ParagpaphFirst, TextsDiv } from "../new-post/Newpost.styles";
import {
  IconContainer,
  ProfileBoxOne,
  ProfileContainer,
  ProfileDelete,
  ProfileHeadr,
  ProfileIconContainer,
  ProfileImageOne,
  ProfileInner,
  ProfileInnercontainer,
  ProfileInput,
  ProfileInput1,
  ProfileInputContainer,
  ProfileInputText,
  ProfileTextTwo,
} from "./Profile.styles";
import ProfileHeader from "./ProfileHeader";

let tabs = ["Запланированные", "Уведомления"];

export default function Profile({}) {
  let history = useHistory();
  const [activeTab, setActiveTab] = useState(0);
  let onNavigate = () => {
    history.push("/changePassword");
  };
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
                <IconContainer>
                  <PencilIcon />
                </IconContainer>
              </ProfileIconContainer>
              <ProfileInputContainer>
                <ProfileInputText>Имя пользователя</ProfileInputText>
                <ProfileInput>
                  <ProfileInput1 placeholder="Рафаэль  Рафаэль" />
                  <ProfileUser />
                </ProfileInput>
              </ProfileInputContainer>
              <ProfileInputContainer>
                <ProfileInputText>Адресс почты</ProfileInputText>
                <ProfileInput>
                  <ProfileInput1 placeholder="rafael@gmail.com" />
                  <ProfileSms />
                </ProfileInput>
              </ProfileInputContainer>
              <ProfileInputContainer>
                <ProfileInputText>Номер телефона</ProfileInputText>
                <ProfileInput>
                  <ProfileInput1 placeholder="+998 99 888 8888 " />
                  <ProfileCall />
                </ProfileInput>
              </ProfileInputContainer>
            </ProfileInnercontainer>
            <ProfileContainer>
              <ProfileDelete> Удалить профиль</ProfileDelete>
              <ProfileTextTwo onClick={onNavigate}>
                Сменить пароль
              </ProfileTextTwo>
            </ProfileContainer>
          </ProfileBoxOne>
        </ProfileInner>
      </ProfileHeadr>
    </>
  );
}
