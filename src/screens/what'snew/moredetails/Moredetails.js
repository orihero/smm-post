import React, { useState } from "react";
import { COLORS } from "../../../constants/colors";
import PrimaryButton from "../../../components/general/buttons/RoundButton";
import { IMAGES } from "../../../constants/images";
import {
  WhatsnewButtonContainer,
  WhatsnewContainer,
  WhatsnewData,
  WhatsnewIconContainer,
  WhatsnewImages,
  WhatsnewImagesContainer,
  WhatsnewImagesOne,
  WhatsnewNuber,
  WhatsnewText,
  WhatsnewTextOne,
} from "../Whatsnew.styles";
import {
  WhatsnewHeader,
  WhatsnewInner,
  MoredetailsText,
  MoredetailsTextBold,
  MoredetailsTextRed,
  MoredetailsTextOne,
  WhatsnewContainerOne,
  WhatnewImage,
} from "./Moredetails.styles";
import { HeartIcon } from "../../../constants/icons";

function Moredetails() {
  const [active, setActive] = useState(false);
  let onHeartPress = () => {
    setActive((e) => !e);
  };
  return (
    <>
      <WhatsnewHeader>
        <WhatsnewImagesContainer>
          <WhatsnewImagesOne src={IMAGES.sidebar.emailimg} /> Изменения и
          улучшения
        </WhatsnewImagesContainer>
        <WhatsnewInner>
          <WhatsnewContainerOne>
            <WhatsnewText>
              Гиперссылки во «ВКонтакте»
              <WhatsnewIconContainer>
                <HeartIcon onClick={onHeartPress} active={active} />{" "}
                <WhatsnewNuber>+185</WhatsnewNuber>
              </WhatsnewIconContainer>
            </WhatsnewText>
            <WhatsnewData>15.09.2021</WhatsnewData>
            <WhatsnewImages src={IMAGES.Whatsnew.Whatsnew} />
            <WhatsnewTextOne>
              Научили предпросмотр распознавать гиперссылки во «ВКонтакте»
            </WhatsnewTextOne>
            <MoredetailsText>
              Соцсеть даёт возможность через АПИ публиковать гиперссылки — это
              работает только <br /> с внутренними ссылками «ВКонтакте». А
              предпросмотр в Амплифере теперь знает, как <br /> это отображать
            </MoredetailsText>
            <MoredetailsText>
              Для создания гиперссылки добавьте в пост @ссылка на публикацию в
              соцсети и в <br /> скобках указать текст для отображения:
            </MoredetailsText>
            <WhatnewImage src={IMAGES.Whatsnew.Whatsnewimage} />
            <MoredetailsText>
              Важно: после ссылки должен быть пробел, а только потом скобки с
              текстом
            </MoredetailsText>
            <MoredetailsText>
              <MoredetailsTextBold>Реализовывал </MoredetailsTextBold> : Аркадий
              Раковский, фронтенд-разработчик
            </MoredetailsText>
            <MoredetailsText>
              ↓ Понравилось улучшение? Отметьте лайком, нам будет приятно. Нашли <br/>
              ошибку или есть идеи для других улучшений? Пишите на<br/> <br/>
              <MoredetailsTextRed>
              help@amplifr.com.
              </MoredetailsTextRed>
            </MoredetailsText>

            <WhatsnewButtonContainer>
              <PrimaryButton primary active={true}>
                Подробнее
              </PrimaryButton>
            </WhatsnewButtonContainer>
          </WhatsnewContainerOne>
        </WhatsnewInner>
      </WhatsnewHeader>
    </>
  );
}

export default Moredetails;
