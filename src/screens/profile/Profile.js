import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  PencilIcon,
  ProfileCall,
  ProfileSms,
  ProfileUser,
} from "../../constants/icons";
import { IMAGES } from "../../constants/images";
import { ParagpaphFirst } from "../new-post/Newpost.styles";
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
  TextsDiv,
} from "./Profile.styles";
import ProfileHeader from "./ProfileHeader";
import InputMask from 'react-input-mask';

let tabs = ["Запланированные", "Уведомления"];

export default function Profile({ }) {
  let history = useHistory();
  const [activeTab, setActiveTab] = useState(0);
  let onNavigate = () => {
    history.push("/publicationchangepassword");
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
                  <InputMask
                    mask="+999 99 999 9999"
                    placeholder="+998 97 777 7777"
                    style={{
                      height: '100%',
                      border: 'none',
                      outline: 'none',
                      marginLeft: 12,
                      fontSize: 16,
                      textDecoration: 'none'
                    }} />
                  <ProfileCall style={{ marginLeft: 150 }} />
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
