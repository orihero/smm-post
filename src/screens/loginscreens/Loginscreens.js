import React from "react";
import { Buttons } from "../../components/general/buttons/RectangleButton.styles";
import RoundButton from "../../components/general/buttons/RoundButton";
import {
    LeftSideContainer,
    LoginInput,
    RightSideContainer,
    RightSideHead,
    Section,
    RegisterHead,
    RoundButtonContainer,
    RegisterHeadSecond,
    RegisterLogin,
    RegisterSpanHead,
    NetLoginHead,
    NetLogin,
} from "./Loginscreens.elements";

function Loginscreens() {
    return (
        <>
            <Section>
                <LeftSideContainer>
                    <RightSideHead>
                        Заполните почту и пароль, <br /> чтобы начать пользоваться
                    </RightSideHead>
                    <LoginInput email="email" placeholder="E-mail или номер телефона" required />
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
                    <RegisterHead>Регистрируясь, вы соглашаетесь с <RegisterSpanHead> Лицензией </RegisterSpanHead> и <br /> <RegisterSpanHead> Политикой обработки данных</RegisterSpanHead> </RegisterHead>
                    <Buttons primary active >Начать пользоваться</Buttons>
                    <RegisterHeadSecond>Уже зарегистрированы? <RegisterLogin>Войти</RegisterLogin></RegisterHeadSecond>
                    <NetLogin>
                        <NetLoginHead>Войти через соцсеть</NetLoginHead>
                    </NetLogin>
                </LeftSideContainer>
                <RightSideContainer></RightSideContainer>
            </Section>
        </>
    );
}

export default Loginscreens;
