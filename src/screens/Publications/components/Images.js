import React from "react";
import {ImagesContainer, Imagesimg} from "./Images.styles";

export default function Images({ images = [] }) {
  return (
    <>
      <ImagesContainer>
        {images.map((e, i) => {
          return (
            <Imagesimg max={images.length} index={images.length - i} src={e} />
          );
        })}
      </ImagesContainer>
    </>
  );
}
