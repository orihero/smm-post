import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const ProfileHeadr = styled.div`
  width: 100%;
  height: 110vh;
  background-color: ${COLORS.backgroundColor};
`;

export const ProfileInner = styled.div`
  margin-left: 80px;
  margin-top: 30px;
  margin-right: 200px;
`;

export const TextsDiv = styled.div`
width: 100%;
  display: flex;
  align-items: center;
  margin-right: 28%;
  margin-bottom: 20px;
  padding: 5px 25px;
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

export const ProfileBoxOne = styled.div`
  background-color: #fff;
  box-shadow: 0px 1px 17px rgba(124, 124, 124, 0.08);
  border-radius: 20px;
  margin-top: 50px;
  height: 70vh;
`;

export const ProfileInput = styled.div`
  width: 400px;
  height: 44px;
  color: black;
  border-radius: 7px;
  padding-left: 7px;
  font-size: 14px;
  border: 1.5px solid #e8427e;
  align-items: center;
  display: flex;
`;

export const ProfileInput1 = styled.input`
  width: 350px;
  height: 44px;
  color: black;
  outline: none;
  border-radius: 7px;
  padding-left: 7px;
  font-size: 14px;
  border: none;
  ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
`;

export const ProfileInputContainer = styled.div`
  width: 500px;
  margin-top: 10px;
`;

export const ProfileInnercontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
  height: 60vh;
  padding: 10px 15px;
`;

export const ProfileImageOne = styled.img`
  width: 120px;
`;

export const ProfileInputText = styled.h5`
  font-size: 13px;
  color: #102046;
  margin-bottom: 5px;
  font-weight: normal;
`;

export const ProfileContainer = styled.div`
  margin-left: 150px;
  margin-right: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileDelete = styled.div`
  cursor: pointer;
`;

export const ProfileTextTwo = styled.div`
  color: ${COLORS.primaryPink};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileIcon = styled.div``;

export const ProfileIconContainer = styled.div`
  display: flex;
  margin-left: -90px;
  align-items: center;
  width: 160px;
  justify-content: space-between;
`;

export const IconContainer = styled.div`
  background-color: ${COLORS.backgroundColor};
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 10px;
`;