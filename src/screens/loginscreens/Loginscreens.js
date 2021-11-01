import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Buttons } from "../../components/general/buttons/RectangleButton.styles";
import {
  FaceBookIcon,
  GoogleIcon,
  TwitterIcon,
  VkontakteIcon,
} from "../../constants/icons";
import { TextsDiv } from "../profile/Profile.styles";
import {
  FaceBookIconsBox,
  GoogleIconsBox,
  LanguageHead,
  LeftSideContainer,
  LoginInput,
  NetLogin,
  NetLoginHead,
  NetTabDiv,
  RegisterHead,
  RegisterHeadSecond,
  RegisterLogin,
  RegisterSpanHead,
  RightSideContainer,
  RightSideHead,
  Section,
  TwitterIconsBox,
  VkontakteIconsBox,
} from "./Loginscreens.elements";

function Loginscreens() {
  // const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <Section>
        <LeftSideContainer>
          <RightSideHead>
            Заполните почту и пароль, <br /> чтобы начать пользоваться
          </RightSideHead>
          <LoginInput
            email="email"
            placeholder="E-mail или номер телефона"
            required
          />
          <LoginInput
            type="password"
            id="pass"
            minlength="8"
            placeholder="Пароль (Минимум 8 символов)"
            required
          />
          <LoginInput
            type="password"
            id="pass"
            minlength="8"
            placeholder="Подтвердите пароль"
            required
          />
          <RegisterHead>
            Регистрируясь, вы соглашаетесь с
            <RegisterSpanHead> Лицензией </RegisterSpanHead> и <br />
            <RegisterSpanHead> Политикой обработки данных</RegisterSpanHead>
          </RegisterHead>
          <Buttons primary active>
            Начать пользоваться
          </Buttons>
          <RegisterHeadSecond>
            Уже зарегистрированы? <RegisterLogin>Войти</RegisterLogin>
          </RegisterHeadSecond>
          <NetLogin>
            <NetLoginHead>Войти через соцсеть</NetLoginHead>
            <NetTabDiv>
              <GoogleIconsBox>
                <GoogleIcon backgrundColor="#FFFFFF" />
              </GoogleIconsBox>
              <FaceBookIconsBox>
                <FaceBookIcon color="#fff" />
              </FaceBookIconsBox>
              <VkontakteIconsBox>
                <VkontakteIcon color="#fff" />
              </VkontakteIconsBox>
              <TwitterIconsBox>
                <TwitterIcon color="#fff" />
              </TwitterIconsBox>
            </NetTabDiv>
          </NetLogin>
        </LeftSideContainer>
        <RightSideContainer>
          <LanguageHead>Uz Ру</LanguageHead>
        </RightSideContainer>
      </Section>
    </>
  );
}

export default Loginscreens;
