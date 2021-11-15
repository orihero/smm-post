import React from "react";
import { useHistory } from "react-router";
import { Buttons } from "../../../components/general/buttons/RectangleButton.styles";
import { LanguageHead } from "../Loginscreens.elements";
import {
    FaceBookIcon,
    GoogleIcon,
    TwitterIcon,
    VkontakteIcon,
} from "../../../constants/icons";
import {
    ComeInHead,
    FaceBookIconsBox,
    ForgotPasswordContainer,
    ForgotPasswordParagraph,
    GoogleIconsBox,
    LeftSideContainer,
    NetLogin,
    NetLoginHead,
    NetTabDiv,
    RegisterInputs,
    RightSideContainer,
    RightSideLanguageBox,
    RightSideRuBox,
    SectionContainer,
    TwitterIconsBox,
    VkontakteIconsBox,
} from "./Register.style";

function Register() {
    const navigation = useHistory();
    let onStartClick = () => {
        navigation.push("/newpost");
    };
    let onRegisterClick = () => {
        navigation.push("/login");
    };
    return (
        <>
            <SectionContainer>
                <LeftSideContainer>
                    <ComeInHead>Войти в Амплифер</ComeInHead>
                    <RegisterInputs
                        email="email"
                        placeholder="E-mail или  номер телефога"
                        required
                    />
                    <RegisterInputs
                        type="password"
                        id="pass"
                        minlength="8"
                        placeholder="Пароль"
                        required
                    />
                    <Buttons primary active onClick={onStartClick}>
                        Начать пользоваться
                    </Buttons>
                    <ForgotPasswordContainer>
                        <ForgotPasswordParagraph>Забыли пароль?</ForgotPasswordParagraph>
                        <ForgotPasswordParagraph onClick={onRegisterClick}>
                            Зарегистрироваться
                        </ForgotPasswordParagraph>
                    </ForgotPasswordContainer>
                    <NetLogin>
                        <NetLoginHead>Войти через соцсеть</NetLoginHead>
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
                    <RightSideLanguageBox>UZ <RightSideRuBox>Ру</RightSideRuBox></RightSideLanguageBox>
                </RightSideContainer>
            </SectionContainer>
        </>
    );
}

export default Register;
