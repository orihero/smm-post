import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const WhatsnewHeader = styled.div`
  width: 100%;
  height: 270vh;
  background-color: ${COLORS.backgroundColor};
`;
export const WhatsnewContainer = styled.div`
  background-color: ${COLORS.white};
  width: 700px;
  height: 500px;
  border-radius: 10px;
  padding: 20px 20px 20px 40px;
  margin-top: 30px;
`;
export const WhatsnewText = styled.h1`
  font-size: 27px;
  display: flex;
  justify-content: space-between;
`;
export const WhatsnewTextOne = styled.div`
  font-weight: bold;
`;
export const WhatsnewData = styled.div`
  font-size: 13px;
  margin-top: 10px;
`;
export const WhatsnewImages = styled.img`
  width: 382px;
  padding-top: 20px;
  margin-bottom: 60px;
`;
export const WhatsnewButtonContainer = styled.div`
  width: 130px;
  margin-top: 30px;
`;
export const WhatsnewImagesContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 150px;
  font-size: 20px;
`;
export const WhatsnewImagesOne = styled.img`
  margin-right: 30px;
  width: 80px;
  height: 80px;
`;
export const WhatsnewInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WhatsnewIconContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: normal;
`;
export const WhatsnewNuber = styled.div`
margin-left: 5px;
`;
