import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  FaceBookIcon,
  PlannedCalendar,
  PlannedFacebookIcons,
  PlannedInstagramIcons,
  Plus,
} from "../../../constants/icons";
import { IMAGES } from "../../../constants/images";
import {
  FacebookContainer,
  ImageCol,
  ImageContent,
  ImagesRow,
  InstContainer,
  LoremIpsumContainer,
  PlannedDateHead,
  PlannedHead,
  PlusIcon,
  PublicationsBottom,
  PublicationsBox,
  PublicationsBtn,
  PublicationsButton,
  PublicationsContainer,
  PublicationsPost,
  PublicationsSize,
  PublicationsSizeNo,
  SellingButton,
  SetsDiv,
} from "../Publications.styles";

const arr = [
  {
    id: 1,
    url: IMAGES.planned.picnic,
  },
  {
    id: 2,
    url: IMAGES.planned.tableLaptop,
  },
  {
    id: 3,
    url: IMAGES.planned.cupImage,
  },
  {
    id: 4,
    url: IMAGES.planned.cameraImage,
  },
  {
    id: 5,
    url: IMAGES.planned.laptopTable,
  },
  {
    id: 6,
    url: IMAGES.planned.laptop,
  },
];

export default function Planned() {
  let history = useHistory();
  let [focusedIndex, setFocusedIndex] = useState(arr.length - 1);
  let [secondFocusIndex, setSecondFocusIndex] = useState(arr.length - 1);
  let [thordFocusedIndex, seThordFocusedIndex] = useState(arr.length - 1);
  let [fourthFocusedIndex, setFourthFocusedIndex] = useState(arr.length - 1);
  let onNewpost = () => {
    history.push("/newpost");
  };
  return (
    <>
      <PublicationsBottom>
        <PublicationsBox>
          <PublicationsButton>Сегодня</PublicationsButton>
          <PublicationsBtn>понедельник</PublicationsBtn>
        </PublicationsBox>
        <PublicationsContainer>
          <PublicationsSize>
            <PlusIcon onClick={onNewpost}>
              <Plus />
            </PlusIcon>
            <PublicationsPost>Запланировать пост</PublicationsPost>
          </PublicationsSize>
          <PublicationsSizeNo>
            <PlannedDateHead>
              <PlannedCalendar style={{ marginRight: 5, cursor: "pointer", }} />
              20 октября, 15:30
              <SellingButton>Разв</SellingButton>
            </PlannedDateHead>
            <LoremIpsumContainer>
              <PlannedHead>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit.
                <br />
                Tortor sollicitudin velit ...
              </PlannedHead>
            </LoremIpsumContainer>
            <ImagesRow>
              {arr.map((e, i) => (
                <ImageCol
                  onMouseMove={() => setFocusedIndex(i)}
                  onMouseLeave={() => setFocusedIndex(arr.length - 1)}
                  key={i}
                  style={{
                    zIndex: focusedIndex === i ? 1 : 0,
                    transform: `translate(${i * -17.5}px)`,
                  }}
                >
                  <ImageContent src={e.url} />
                </ImageCol>
              ))}
            </ImagesRow>
            <SetsDiv>
              <InstContainer>
                <PlannedInstagramIcons />
              </InstContainer>
              <FacebookContainer>
                <PlannedFacebookIcons />
              </FacebookContainer>
            </SetsDiv>
          </PublicationsSizeNo>
          <PublicationsSizeNo>
            <PlannedDateHead>
              <PlannedCalendar style={{ marginRight: 5, cursor: "pointer", }} />
              20 октября, 15:30
              <SellingButton>Разв</SellingButton>
            </PlannedDateHead>
            <LoremIpsumContainer>
              <PlannedHead>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit.
                <br />
                Tortor sollicitudin velit ...
              </PlannedHead>
            </LoremIpsumContainer>
            <ImagesRow>
              {arr.map((e, i) => (
                <ImageCol
                  onMouseMove={() => setSecondFocusIndex(i)}
                  onMouseLeave={() => setSecondFocusIndex(arr.length - 1)}
                  key={i}
                  style={{
                    zIndex: secondFocusIndex === i ? 1 : 0,
                    transform: `translate(${i * -17.5}px)`,
                  }}
                >
                  <ImageContent src={e.url} />
                </ImageCol>
              ))}
            </ImagesRow>
            <SetsDiv>
              <InstContainer>
                <PlannedInstagramIcons />
              </InstContainer>
              <FacebookContainer>
                <PlannedFacebookIcons />
              </FacebookContainer>
            </SetsDiv>
          </PublicationsSizeNo>
        </PublicationsContainer>
      </PublicationsBottom>
      <PublicationsBottom>
        <PublicationsBox>
          <PublicationsButton>Завтра</PublicationsButton>
          <PublicationsBtn>вторник</PublicationsBtn>
        </PublicationsBox>
        <PublicationsContainer>
          <PublicationsSize>
            <PlusIcon onClick={onNewpost}>
              <Plus />
            </PlusIcon>
            <PublicationsPost>Запланировать пост</PublicationsPost>
          </PublicationsSize>
          <PublicationsSizeNo>
            <PlannedDateHead>
              <PlannedCalendar style={{ marginRight: 5, cursor: "pointer" }} />
              20 октября, 15:30
              <SellingButton>Разв</SellingButton>
            </PlannedDateHead>
            <LoremIpsumContainer>
              <PlannedHead>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit.
                <br />
                Tortor sollicitudin velit ...
              </PlannedHead>
            </LoremIpsumContainer>
            <ImagesRow>
              {arr.map((e, i) => (
                <ImageCol
                  onMouseMove={() => seThordFocusedIndex(i)}
                  onMouseLeave={() => seThordFocusedIndex(arr.length - 1)}
                  key={i}
                  style={{
                    zIndex: thordFocusedIndex === i ? 1 : 0,
                    transform: `translate(${i * -17.5}px)`,
                  }}
                >
                  <ImageContent src={e.url} />
                </ImageCol>
              ))}
            </ImagesRow>
            <SetsDiv>
              <InstContainer>
                <PlannedInstagramIcons />
              </InstContainer>
              <FacebookContainer>
                <PlannedFacebookIcons />
              </FacebookContainer>
            </SetsDiv>
          </PublicationsSizeNo>
          <PublicationsSizeNo>
            <PlannedDateHead>
              <PlannedCalendar style={{ marginRight: 5, cursor: "pointer" }} />
              20 октября, 15:30
              <SellingButton>Разв</SellingButton>
            </PlannedDateHead>
            <LoremIpsumContainer>
              <PlannedHead>
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit.
                <br />
                Tortor sollicitudin velit ...
              </PlannedHead>
            </LoremIpsumContainer>
            <ImagesRow>
              {arr.map((e, i) => (
                <ImageCol
                  onMouseMove={() => setFourthFocusedIndex(i)}
                  onMouseLeave={() => setFourthFocusedIndex(arr.length - 1)}
                  key={i}
                  style={{
                    zIndex: fourthFocusedIndex === i ? 1 : 0,
                    transform: `translate(${i * -17.5}px)`,
                  }}
                >
                  <ImageContent src={e.url} />
                </ImageCol>
              ))}
            </ImagesRow>
            <SetsDiv>
              <InstContainer>
                <PlannedInstagramIcons />
              </InstContainer>
              <FacebookContainer>
                <PlannedFacebookIcons />
              </FacebookContainer>
            </SetsDiv>
          </PublicationsSizeNo>
        </PublicationsContainer>
      </PublicationsBottom>
    </>
  );
}