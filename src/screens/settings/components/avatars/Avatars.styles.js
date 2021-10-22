import styled from "styled-components";
import { COLORS } from "../../../../constants/colors";

export const AvatarsContainer = styled.div`
  max-width: 156px;
  overflow: hidden;
`;

export const AvatarImg = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 52px;
  border: 2px solid ${COLORS.primaryPink};
  z-index: ${(props) => props.index > 5 ? -1 : props.index};
  position: absolute;
  margin-left: ${(props) => (props.index > 5 ? 0 : props.index * -26)}px;
`;
