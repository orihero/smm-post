import React, { useState } from "react";
import {
  WhatsnewHeader,
  WhatsnewInner,
  WhatsnewContainer,
  WhatsnewText,
  WhatsnewTextOne,
  WhatsnewData,
  WhatsnewImages,
  WhatsnewButtonContainer,
  WhatsnewImagesContainer,
  WhatsnewImagesOne,
  WhatsnewIconContainer,
  WhatsnewNuber,
} from "./Whatsnew.styles";
import { IMAGES } from "../../constants/images";
import { useHistory } from "react-router-dom";
import PrimaryButton from "../../components/general/buttons/RoundButton";
import { HeartIcon } from "../../constants/icons";

export default function Whatsnew() {
  let history = useHistory();
  let onMoredetails = () => {
    history.push("/moredetails");
  };
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
          <WhatsnewContainer>
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
              Научили предпросмотр распознавать гиперссылки во «ВКонтакте».
            </WhatsnewTextOne>
            <WhatsnewButtonContainer>
              <PrimaryButton primary active={true} onClick={onMoredetails}>
                Подробнее
              </PrimaryButton>
            </WhatsnewButtonContainer>
          </WhatsnewContainer>
          <WhatsnewContainer>
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
              Научили предпросмотр распознавать гиперссылки во «ВКонтакте».
            </WhatsnewTextOne>
            <WhatsnewButtonContainer>
              <PrimaryButton primary active={true} onClick={onMoredetails}>
                Подробнее
              </PrimaryButton>
            </WhatsnewButtonContainer>
          </WhatsnewContainer>
          <WhatsnewContainer>
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
              Научили предпросмотр распознавать гиперссылки во «ВКонтакте».
            </WhatsnewTextOne>
            <WhatsnewButtonContainer>
              <PrimaryButton primary active={true} onClick={onMoredetails}>
                Подробнее
              </PrimaryButton>
            </WhatsnewButtonContainer>
          </WhatsnewContainer>
        </WhatsnewInner>
      </WhatsnewHeader>
    </>
  );
}
