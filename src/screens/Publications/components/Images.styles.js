import styled from "styled-components";
import { COLORS } from "../../../constants/colors";


export const ImagesContainer = styled.div`
  max-width: 156px;
  overflow: hidden;
`;

export const Imagesimg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid ${COLORS.white};
  z-index: ${(props) => props.index > -1 ? 5 : props.index};
  position: absolute;
  margin-left: ${(props) => (props.index > 5 ? 0 : props.index * -26)}px;
`;
