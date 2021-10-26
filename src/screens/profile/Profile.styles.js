import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const ProfileHeadr = styled.div`
  width: 100%;
  height: 110vh;
  background-color: #f7fafc;
`;
export const ProfileInner = styled.div`
  margin-left: 80px;
  margin-top: 30px;
  margin-right: 200px;
`;

export const TextsDiv = styled.div`
  width: 400px;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 28%;
  cursor: pointer;
  margin-bottom: 20px;
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
  border-radius: 20px;
  margin-top: 50px;
  height: 70vh;
`;
export const ProfileInput = styled.input`
  width: 400px;
  height: 44px;
  color: black;
  border-radius: 7px;
  padding-left: 7px;
  font-size: 14px;
  border: 1.5px solid #e8427e;
`;
export const ProfileInputContainer = styled.div`
  width: 500px;
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
margin-bottom: 25px;


`;

export const ProfileInputText = styled.h5`
  font-size: 13px;
  color: #102046;
  margin-bottom: 5px;
  font-weight: normal;
`;
export const ProfileContainer = styled.div`
margin-left: 150px;
margin-right: 150px ;
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
`
export const ProfileIcon = styled.div``
export const ProfileIconContainer = styled.div`
display: flex;
margin-left: -90px;
align-items: center;
width: 160px;
justify-content: space-between;
`
// export const  = styled.div``