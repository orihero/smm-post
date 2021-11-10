import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const ProfileHeadr = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7fafc;
`;
export const ProfileInner = styled.div`
  margin-left: 80px;
  margin-top: 30px;
  margin-right: 200px;
`;
export const ProfileBoxOne = styled.div`
  background-color: #fff;
  border-radius: 20px;
  margin-top: 50px;
  display: flex;
  height: 70vh;
`;
export const ProfileBoxLeft = styled.div`
  flex: 1;
  border-right: solid 1px #e5e5e5;
`;
export const ProfileBoxRight = styled.div`
  flex: 1;
`;
export const ProfileBoxLeftText = styled.div`
  margin-left: 30px;
  font-weight: normal;
  font-size: 25px;
  margin-top: 20px;
`;
export const ProfileBoxRightText = styled.div`
  margin-left: 30px;
  font-weight: normal;
  font-size: 25px;
  margin-top: 20px;
`;
export const ProfileBoxLeftInputText = styled.div`
  margin-left: 15px;
`;
export const ProfileBoxLeftInput = styled.input`
  height: 30px;
  width: 30px;
  border: 1.4px solid #e8427e;
  border-radius: 4px;
`;
export const ProfileBoxLeftInputContiner = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

export const ProfileBoxRightInputContiner = styled.div`
  width: 320px;
  margin-top: 20px;
  margin-left: 30px;
`;
export const ProfileBoxRightInputText = styled.div`
  margin-bottom: 5px;
`;
// export const Select = styled.select`
// border: solid 1px red ;
// width: 100px;
// `
export const ProfileText = styled.div`
  font-size: 15px;
  margin-left: 32px;
  margin-top: 20px;
`;

export const ProfileTextContaine = styled.div`
width: 300px;
margin-left:30px  ;
margin-top: 20px;

`;

export const RoundtButton = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px 0px 20px;
  margin-bottom: 10px;
  background-color: ${COLORS.primaryPink} ;
  text-align: center;
  align-content: center;
  justify-content: center;
  display: flex;
  color: #fff;
height: 5vh;
 
  border-radius: 9px;
  cursor: pointer;
 
`;
