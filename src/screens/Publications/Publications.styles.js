import styled from "styled-components";
import { DefaultText } from "../../components/general/text/Text.style";
import { COLORS } from "../../constants/colors";

export const PublicationsBottom = styled.div`
  background-color: ${COLORS.backgroundColor};
  padding-left: 30px;
  flex-direction: column;
`;

export const PublicationsHeader = styled.div`
  width: 100%;
  height: 140vh;
  background-color: ${COLORS.backgroundColor};
`;

export const PublicationsButtons = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 28%;
  cursor: pointer;
  padding-left: 30px;
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
  color: ${COLORS.fontColors};
  margin-left: 7px;
`;

export const PublicationsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 45px;
`;

export const PublicationsSizeNo = styled.div`
  width: 25%;
  padding: 15px 15px;
  border-radius: 15px;
  margin-left: 14px;
  background-color: ${COLORS.white};
  box-shadow: 0px 5px 15px -2px rgba(2, 2, 2, 0.2);
`;

export const PlusIcon = styled.div`
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
  box-shadow: 0px 5px 15px -2px rgba(2, 2, 2, 0.2);
  &:hover {
    box-shadow: 0px 5px 15px 2px rgba(242, 30, 58, 0.2);
  }
`;

export const PublicationsPost = styled.h1`
  font-size: 13px;
  color: #828284;
`;

export const PlannedDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
`;

export const PlannedDateHead = styled(DefaultText)`
  color: ${COLORS.primaryPink};
  font-size: 19px;
  font-weight: 600;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 1px;
`;

export const SellingButton = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  background-color: ${COLORS.sellingbutton};
  border: none;
  color: ${COLORS.white};
  font-size: 11px;
  font-weight: 400;
  border-radius: 58px;
  margin-left: 35px;
`;

export const PlannedHead = styled(DefaultText)`
  font-size: 19px;
  font-weight: 400;
  color: ${COLORS.fontColors};
  opacity: 0.7;
`;

export const LoremIpsumContainer = styled.div`
  padding: 15px 15px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ImagesRow = styled.div`
  display: flex;
`;

export const ImageCol = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 6px;
  cursor: pointer;
`;

export const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SetsDiv = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
`

export const InstContainer = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  border-radius: 25px;
  background: linear-gradient(
    49.33deg,
    #ffdd55 7%,
    #ff543e 50.26%,
    #c837ab 93.53%
  );
  cursor: pointer;
`;

export const FacebookContainer = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  border-radius: 25px;
  background-color: ${COLORS.facebookBackgroundColor};
  margin-left: 15px;
  color: ${COLORS.white};
  cursor: pointer;
`;
