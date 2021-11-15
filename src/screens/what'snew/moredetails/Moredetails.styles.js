import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const WhatsnewHeader = styled.div`
  width: 100%;
  height: 220vh;
  background-color: ${COLORS.backgroundColor};
`;
export const WhatsnewInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MoredetailsText = styled.div`
  font-weight: normal;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-size: 17px;
`;
export const WhatsnewContainerOne = styled.div`
  background-color: ${COLORS.white};
  width: 700px;
  height: 1200px;
  border-radius: 10px;
  padding: 20px 20px 20px 40px;
  margin-top: 30px;
`;

export const MoredetailsTextOne = styled.div``;

export const WhatnewImage = styled.img`
  width: 100%;
  margin-top: 20px;
`;
export const MoredetailsTextBold = styled.div`
  font-weight: bold;
`;
export const MoredetailsTextRed = styled.div`
color: orange;
`
// export const = styled.div``
