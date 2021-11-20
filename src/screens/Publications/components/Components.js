import React from "react";
import Images from "./Images"
import {
  ComponentsHeader,
  ComponentsIconContainer,
  ComponentsimgContainer,
  ComponentsDateText,
  ComponentsText,
  ComponentsImg,
} from "./Components.styles";
import { ICONS, Colendar } from "../../../constants/icons";

export default function Components() {
  return (
    <>
      <ComponentsHeader>
        <ComponentsIconContainer>
          <Colendar />
          <ComponentsDateText>20 октября, 15:30</ComponentsDateText>
        </ComponentsIconContainer>
        <ComponentsText>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Tortor sollicitudin velit ...</ComponentsText>
      <ComponentsimgContainer>
      <Images
       images={[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJDttHYVBlulouyL1abAg9Qrnya8JwN_UkQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJDttHYVBlulouyL1abAg9Qrnya8JwN_UkQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJDttHYVBlulouyL1abAg9Qrnya8JwN_UkQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJDttHYVBlulouyL1abAg9Qrnya8JwN_UkQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJDttHYVBlulouyL1abAg9Qrnya8JwN_UkQ&usqp=CAU",
       ]}
      />
      </ComponentsimgContainer>
      </ComponentsHeader>
    </>
  );
}
