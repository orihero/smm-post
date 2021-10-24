import React from "react";
import { IMAGES } from "../../constants/images";

import {
  ProfileBox,
  ProfileImage,
  ProfileTextcontainer,
  ProfileText,
  ProfileTextOne,
} from "./ProfileHeader.styles";

export default function ProfileHeader() {
  return (
    <div>
      <ProfileBox>
        <ProfileImage src={IMAGES.profile.Hand} />
        <ProfileTextcontainer>
          <ProfileText>Добрый Вечер, </ProfileText>
          <ProfileTextOne>
            Cделйте первый пост в Aмплифепе и начинайте экономить время на
            публикации
          </ProfileTextOne>
        </ProfileTextcontainer>
      </ProfileBox>
    </div>
  );
}
