import React from 'react'
import email from '../../assets/email.png'
import instagram from '../../assets/instagram.png'
import vk from '../../assets/vk.png'
import facebook from '../../assets/facebook.png'
import { DivButtonFirst, DivButtonSecond, DivButtonThird, EmailIcon, FaceBookIcon, Head, InstaIcon, ParagraphButtonFirst, ParagraphButtonSecond, ParagraphButtonThird, ParagraphFirst, ParagraphSecond, Section, SectionInner, SignInButton, VkIcon, WebsideDivs } from './Loginscreens.elements'

function Loginscreens() {
    return (
        <>
            <Section>
                <EmailIcon src={email} />
                <SectionInner>
                    <WebsideDivs>
                        <Head>Начнем анализ</Head>
                        <ParagraphFirst>Добавьте аккаунты соцсетей, с которыми вы работаете, и <br />
                            сервис начнет собирать статистику по ним.</ParagraphFirst>
                        <DivButtonFirst>
                            <InstaIcon src={instagram} />
                            <ParagraphButtonFirst>Добавить аккаунт Instagram</ParagraphButtonFirst>
                        </DivButtonFirst>
                        <DivButtonSecond>
                            <VkIcon src={vk} />
                            <ParagraphButtonSecond>Добавить аккаунт Vkontakte</ParagraphButtonSecond>
                        </DivButtonSecond>
                        <DivButtonThird>
                            <FaceBookIcon src={facebook} />
                            <ParagraphButtonThird>Добавить аккаунт Facebook</ParagraphButtonThird>
                        </DivButtonThird>
                        <ParagraphSecond>или</ParagraphSecond>
                        <SignInButton>Добавить чужой аккаунт</SignInButton>
                    </WebsideDivs>
                </SectionInner>
            </Section>
        </>
    )
}

export default Loginscreens;
