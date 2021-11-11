import React from "react";
import { useHistory } from "react-router";
import { Buttons } from "../../../components/general/buttons/RectangleButton.styles";
import {
    FaceBookIcon,
    GoogleIcon,
    TwitterIcon,
    VkontakteIcon,
} from "../../../constants/icons";
import { RightSideHead } from "../Loginscreens.elements";
import {
    ComeInHead,
    ForgotPasswordContainer,
    RegisterInputs,
    SectionContainer,
    ForgotPasswordParagraph,
    NetLoginHead,
    NetLogin,
    NetTabDiv,
    GoogleIconsBox,
    FaceBookIconsBox,
    VkontakteIconsBox,
    TwitterIconsBox,
    RightSideLanguageContainer,
} from "./Register.style";

function Register() {
    const navigation = useHistory();
    let onStartClick = () => {
        navigation.push("/newpost")
    }
    return (
        <>
            <SectionContainer>
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
                    <ForgotPasswordParagraph>Зарегистрироваться</ForgotPasswordParagraph>
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
            </SectionContainer>
            <RightSideLanguageContainer>sdsd</RightSideLanguageContainer>
        </>
    );
}

export default Register;
