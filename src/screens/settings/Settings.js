import React from 'react'
import { IMAGES } from '../../constants/images'
import CardItem from './components/card-item/CardItem'
import { CardContainer } from './Settings.styles'

function Settings() {
    return (
        <>
            <CardContainer>
                <CardItem image={IMAGES.settings.userIcon} text="Пользователи" description="Приглашайте новых и управляйте доступами">
                    DAdasddsadas
                </CardItem>
                <CardItem image={IMAGES.settings.userIcon} text="Пользователи" description="Приглашайте новых и управляйте доступами" />
                <CardItem image={IMAGES.settings.userIcon} text="Пользователи" description="Приглашайте новых и управляйте доступами" />
                <CardItem image={IMAGES.settings.userIcon} text="Пользователи" description="Приглашайте новых и управляйте доступами" />
            </CardContainer>
            <CardContainer>

            </CardContainer>
        </>
    )
}

export default Settings
