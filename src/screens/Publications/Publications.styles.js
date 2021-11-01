import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const PublicationsBottom = styled.div`
  background-color: #f7fafc;

  flex-direction: column;
`;

export const PublicationsHeader = styled.div`
  width: 100%;
  height: 110vh;
  background-color: #f7fafc;
`;

export const PublicationsButtons = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 28%;
  cursor: pointer;
`;

export const ParagpaphFirst = styled.p`
  padding-bottom: 6px;
  font-size: 17px;
  font-weight: 400;
  &:hover {
    border-bottom: 3px solid ${COLORS.primaryPink};
    color: ${COLORS.primaryPink};
  }
  ${(props) =>
    props.active &&
    `{
        border-bottom: 3px solid ${COLORS.primaryPink};
        color: ${COLORS.primaryPink};
    }`}
`;

export const PublicationsButton = styled.h1`
  font-size: 20px;
  font-weight: 500;

  color: ${COLORS.primaryPink};
`;

export const PublicationsBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-left: 45px;
`;

export const PublicationsBtn = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: black;
  margin-left: 7px;
`;
export const PublicationsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px 20px 0px;
  margin-left: 45px;
`;
export const PublicationsSizeNo = styled.div`
  padding: 80px 80px;
  border-radius: 7px;
  margin-left: 14px;
  background-color: #fff;
`;

export const PlusIcon = styled.img`
  width: 55px;
  cursor: pointer;
  height: 70px;
`;

export const PublicationsSize = styled.div`
  padding: 34px 15px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 7px;
`;
export const PublicationsPost = styled.h1`
  font-size: 13px;
  color: #828284;
`;
