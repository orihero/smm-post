import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const ProfileBox = styled.div`
  padding: 0px 5px;
  box-shadow: 0px 1px 17px rgba(124, 124, 124, 0.08);
  background-color: ${COLORS.white};
  border-radius: 20px;
  display: flex;
`;

export const ProfileImage = styled.img`
  width: 72px;
  margin-left: 12px;
`;

export const ProfileTextcontainer = styled.div`
  margin-left: 12px;
`;

export const ProfileTextOne = styled.div`
  margin-top: 5px;
`;

export const ProfileText = styled.h1`
  font-size: 28px;
  margin-top: 8px;
  font-weight: normal;
`;
