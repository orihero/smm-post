import React, { Component } from "react";
import Select from "react-select";
import {
  ProfileHeadr,
  ProfileBoxOne,
  ProfileInner,
  ProfileText,
  ProfileTextContaine,
  ProfileBoxLeft,
  ProfileBoxLeftInput,
  ProfileBoxLeftInputContiner,
  ProfileBoxLeftText,
  ProfileBoxLeftInputText,
  ProfileBoxRight,
  RoundtButton,
  ProfileBoxRightText,
  ProfileBoxRightInputContiner,
  ProfileBoxRightInputText,
} from "./ProfileChangePassword.styles";
import ProfileHeader from "./ProfileHeader";

let options = [
  { label: "UTC+03:00 Moscow" },
  { label: "UTC+03:00 Moscow" },
  { label: "UTC+03:00 Moscow" },
];

export default function ProfileChangePassword() {
  return (
    <>
      <ProfileHeadr>
        <ProfileInner>
          <ProfileHeader />
          <ProfileBoxOne>
            <ProfileBoxLeft>
              <ProfileBoxLeftText>Уведомление</ProfileBoxLeftText>
              <ProfileBoxLeftInputContiner>
                <ProfileBoxLeftInput type={"checkbox"}  />
                <ProfileBoxLeftInputText>
                  Ошибки публикации и аккаунта
                </ProfileBoxLeftInputText>
              </ProfileBoxLeftInputContiner>
              <ProfileBoxLeftInputContiner>
                <ProfileBoxLeftInput type={"checkbox"} />
                <ProfileBoxLeftInputText>
                  Обновления в обсуждаемых постах
                </ProfileBoxLeftInputText>
              </ProfileBoxLeftInputContiner>
              <ProfileBoxLeftInputContiner>
                <ProfileBoxLeftInput type={"checkbox"} />
                <ProfileBoxLeftInputText>
                  Персональные предложения
                </ProfileBoxLeftInputText>
              </ProfileBoxLeftInputContiner>
              <ProfileBoxLeftInputContiner>
                <ProfileBoxLeftInput type={"checkbox"} />
                <ProfileBoxLeftInputText>
                  Обновления Амплифера и блога
                </ProfileBoxLeftInputText>
              </ProfileBoxLeftInputContiner>
              <ProfileBoxLeftInputContiner>
                <ProfileBoxLeftInput type={"checkbox"} />
                <ProfileBoxLeftInputText>
                  Отчёты о метриках
                </ProfileBoxLeftInputText>
              </ProfileBoxLeftInputContiner>
              <ProfileBoxLeftInputContiner>
                <ProfileBoxLeftInput type={"checkbox"} />
                <ProfileBoxLeftInputText>Оплата </ProfileBoxLeftInputText>
              </ProfileBoxLeftInputContiner>
            </ProfileBoxLeft>
            <ProfileBoxRight>
              <ProfileBoxRightText>Интерфейс</ProfileBoxRightText>
              <ProfileBoxRightInputContiner>
                <ProfileBoxRightInputText>
                  Часовой пояс
                </ProfileBoxRightInputText>
                <Select options={options} placeholder={"UTC+03:00 Moscow"} />
              </ProfileBoxRightInputContiner>
              <ProfileBoxRightInputContiner>
                <ProfileBoxRightInputText>
                  Часовой пояс
                </ProfileBoxRightInputText>
                <Select options={options} placeholder={"UTC+03:00 Moscow"} />
              </ProfileBoxRightInputContiner>
              <ProfileText>Аккаунты в соцсетях для быстрого входа</ProfileText>
              <ProfileTextContaine>
                <RoundtButton> Войти через «ВКонтакте»</RoundtButton>
                <RoundtButton>Войти через Фейсбук</RoundtButton>
                <RoundtButton>Войти через Твиттер</RoundtButton>
              </ProfileTextContaine>
            </ProfileBoxRight>
          </ProfileBoxOne>
        </ProfileInner>
      </ProfileHeadr>
    </>
  );
}
