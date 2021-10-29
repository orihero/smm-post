import React from "react";
import RoundButton from "../../components/general/buttons/RoundButton";
import {
    LeftSideContainer,
    LoginInput,
    RightSideContainer,
    RightSideHead,
    Section,
    RegisterHead,
    RoundButtonContainer,
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
                    <RegisterHead>Регистрируясь, вы соглашаетесь с Лицензией и <br /> Политикой обработки данных</RegisterHead>
                    <RoundButton primary active >Начать пользоваться</RoundButton>
                </LeftSideContainer>
                <RightSideContainer></RightSideContainer>
            </Section>
        </>
    );
}

export default Loginscreens;
