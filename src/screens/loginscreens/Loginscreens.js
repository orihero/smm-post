import React from "react";
import { useHistory } from "react-router";
import { Buttons } from "../../components/general/buttons/RectangleButton.styles";
import { COLORS } from "../../constants/colors";
import {
  BulpIcons,
  FaceBookIcon,
  GoogleIcon,
  OrangeIcons,
  TwitterIcon,
  VkontakteIcon,
} from "../../constants/icons";
import {
  BulpContainer,
  BulpIconContaier,
  BulpParagraph,
  FaceBookIconsBox,
  GoogleIconsBox,
  InfoParagraphContainer,
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
  RightSideInfoParagraph,
  RightSideRuBox,
  Section,
  TwitterIconsBox,
  VkontakteIconsBox,
} from "./Loginscreens.elements";


function Loginscreens() {
  const navigation = useHistory();
  let onStartClick = () => {
    navigation.push("/newpost")
  }
  let onComeInClick = () => {
    navigation.push("/register")
  }
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
          <Buttons primary active onClick={onStartClick}>
            Начать пользоваться
          </Buttons>
          <RegisterHeadSecond>
            Уже зарегистрированы? <RegisterLogin onClick={onComeInClick}>Войти</RegisterLogin>
          </RegisterHeadSecond>
          <NetLogin>
            <NetLoginHead >Войти через соцсеть</NetLoginHead>
            <NetTabDiv>
              <GoogleIconsBox>
                <GoogleIcon color="#FFFFFF" />
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
          <LanguageHead>Uz <RightSideRuBox>Ру</RightSideRuBox></LanguageHead>
          <InfoParagraphContainer>
            <OrangeIcons style={{ marginRight: "8px" }} />
            <RightSideInfoParagraph>
              Отложенная публикация во <br /> «ВКонтакте», Фейсбук, <br /> Инстаграм и ещё 8 <br />
              соцсетей из одного окна
            </RightSideInfoParagraph>
          </InfoParagraphContainer>
          <InfoParagraphContainer>
            <OrangeIcons style={{ marginRight: "8px" }} backgroundColor={COLORS.backgroundColorIconOrange} />
            <RightSideInfoParagraph>
              Получайте больше трафика и <br /> охвата для постов без усилий с <br /> «Автопилотом»
            </RightSideInfoParagraph>
          </InfoParagraphContainer>
          <InfoParagraphContainer>
            <OrangeIcons style={{ marginRight: "8px" }} backgroundColor={COLORS.backgroundColorIconOrange} />
            <RightSideInfoParagraph>
              Обсуждайте, комментируйте и <br /> дорабатывайте посты с <br /> коллегами и клиентами в <br /> одном приложении
            </RightSideInfoParagraph>
          </InfoParagraphContainer>
          <InfoParagraphContainer>
            <OrangeIcons style={{ marginRight: "8px" }} backgroundColor={COLORS.backgroundColorIconOrange} />
            <RightSideInfoParagraph>
              Прямая публикация в <br /> Инстаграм
            </RightSideInfoParagraph>
          </InfoParagraphContainer>
          <BulpContainer>
            <BulpIconContaier>
              <BulpIcons style={{ marginRight: "8px" }} color={COLORS.backgroundColorIconOrange} />
              <BulpParagraph> Мы выпускаем 60 постов в день <br /> и экономим с Амплифером 700+ <br /> часов в месяц.Без Модуль А <br /> пришлось бы нанять ещё трёх <br /> человек или сократить <br /> количество постов вдвое.</BulpParagraph>
            </BulpIconContaier>
          </BulpContainer>
        </RightSideContainer>
      </Section>
    </>
  );
}

export default Loginscreens;
