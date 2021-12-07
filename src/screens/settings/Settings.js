import React from "react";
import RoundButton from "../../components/general/buttons/RoundButton";
import { IMAGES } from "../../constants/images";
import Avatars from "./components/avatars/Avatars";
import CardItem from "./components/card-item/CardItem";
import {
  ButtonContainer,
  CardContainer,
  CardHead,
  HeadCard,
  SettingsContainer,
} from "./Settings.styles";

function Settings() {
  return (
    <>
      <SettingsContainer>
        <CardHead>Основные</CardHead>
        <CardContainer>
          <CardItem
            image={IMAGES.settings.likeIcon}
            text="Страницы в соцсетях и наборы"
            description="Добавляйте страницы и объединяйте их в группы"
          >
            <RoundButton primary>0 страниц</RoundButton>
          </CardItem>
          <CardItem
            image={IMAGES.settings.userIcon}
            text="Пользователи"
            description="Приглашайте новых и управляйте доступами"
          >
            <Avatars
              images={[
                "https://www.exibartstreet.com/wp-content/uploads/avatars/2465/5e0de52aeee8b-bpfull.jpg",
                "https://assets.sohoapp.com/production/uploads/user/avatar/45285/avatar_93d0af5c-c792-4987-be34-76ef4558d047.jpg",
                "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
                "https://i.pinimg.com/280x280_RS/2d/03/5e/2d035ed0c94d6e8eedac0c7c7974b866.jpg",
              ]}
            />
          </CardItem>
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
        <HeadCard>
          Используйте Амплифер по максимуму и экономьте время с продвинутыми
          инструментами
        </HeadCard>
        <ButtonContainer>
          <RoundButton active>Удалить</RoundButton>
        </ButtonContainer>
      </SettingsContainer>
    </>
  );
}

export default Settings;
