import React from "react";
import { IMAGES } from "../../constants/images";
import {
    DivButtonFirst,
    DivButtonSecond,
    DivButtonThird,
    EmailIcon,
    FaceBookIcon,
    Head,
    InstaIcon,
    ParagraphButtonFirst,
    ParagraphButtonSecond,
    ParagraphButtonThird,
    ParagraphFirst,
    ParagraphSecond,
    Section,
    SectionInner,
    SignInButton,
    VkIcon,
    WebsideDivs,
} from "./Loginscreens.elements";

function Loginscreens() {
    return (
        <>
            <Section>
                <EmailIcon src={IMAGES.loginscreens.email} />
                <SectionInner>
                    <WebsideDivs>
                        <Head>Начнем анализ</Head>
                        <ParagraphFirst>
                            Добавьте аккаунты соцсетей, с которыми вы работаете, и <br />
                            сервис начнет собирать статистику по ним.
                        </ParagraphFirst>
                        <DivButtonFirst>
                            <InstaIcon src={IMAGES.loginscreens.instagram} />
                            <ParagraphButtonFirst>
                                Добавить аккаунт Instagram
                            </ParagraphButtonFirst>
                        </DivButtonFirst>
                        <DivButtonSecond>
                            <VkIcon src={IMAGES.loginscreens.vk} />
                            <ParagraphButtonSecond>
                                Добавить аккаунт Vkontakte
                            </ParagraphButtonSecond>
                        </DivButtonSecond>
                        <DivButtonThird>
                            <FaceBookIcon src={IMAGES.loginscreens.facebook} />
                            <ParagraphButtonThird>
                                Добавить аккаунт Facebook
                            </ParagraphButtonThird>
                        </DivButtonThird>
                        <ParagraphSecond>или</ParagraphSecond>
                        <SignInButton>Добавить чужой аккаунт</SignInButton>
                    </WebsideDivs>
                </SectionInner>
            </Section>
        </>
    );
}

export default Loginscreens;
