import React from "react";
import { IMAGES } from "../../constants/images";
import CardItem from "./components/card-item/CardItem";
import { RightButton } from "./components/card-item/CardItem.style";
import { CardContainer } from "./Settings.styles";

function Settings() {
    return (
        <>
            <CardContainer>
                <CardItem
                    image={IMAGES.settings.likeIcon}
                    text="Страницы в соцсетях и наборы"
                    description="Добавляйте страницы и объединяйте их в группы"
                >
                    <RightButton primary>0 страниц</RightButton>
                </CardItem>
                <CardItem
                    image={IMAGES.settings.userIcon}
                    text="Пользователи"
                    description="Приглашайте новых и управляйте доступами"
                />
                <CardItem
                    image={IMAGES.settings.calendarIcon}
                    text="Расписание публикаций"
                    description="Настройки слотов для постов"
                />
                <CardItem
                    image={IMAGES.settings.starsIcon}
                    text="Название проекта"
                    description="Смена названия проекта"
                />
                <CardItem
                    image={IMAGES.settings.temsIcon}
                    text="Темы"
                    description="Цветные метки для публикаций"
                />
                <CardItem
                    image={IMAGES.settings.templatesIcon}
                    text="Шаблоны"
                    description="Текстовые фрагменты для быстрой вставки"
                />
            </CardContainer>
            <CardContainer></CardContainer>
        </>
    );
}

export default Settings;
