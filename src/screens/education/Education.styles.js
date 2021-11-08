import styled, { css } from "styled-components";
import { COLORS } from "../../constants/colors";

export const EducationHeader = styled.div`
  width: 100%;
  height: 150vh;
  background-color: #f7fafc;
`;
export const EducationTextTwoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const EducationTextTwo = styled.div`
  margin-left: 7px;
`;

export const EducationInner = styled.div`
  margin-left: 70px;
  padding-bottom: 50px;
`;
export const EducationContainer = styled.div`
  background-color: ${COLORS.white};
  width: 550px;
  height: 700px;
  margin-top: 40px;
  border-radius: 10px;
  padding: 30px 35px;
`;
export const EducationText = styled.div`
  margin-bottom: 30px;
  font-size: 23px;
`;
export const EducationTextOne = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
  font-weight: normal;
  font-size: 23px;
`;
export const EducationInput = styled.input`
  width: 530px;
  padding: 5px 10px;
  height: 34px;
  border-radius: 10px;
  border: 1.4px solid rgba(16, 32, 70, 0.2);
`;
export const EducationImageText = styled.div`
  font-size: 15px;
  font-weight: normal;
  padding-top: 5px;
`;
export const EducationImage = styled.img`
  width: 130px;
  height: 120px;
`;
export const EducationImage1 = styled.img`
  width: 257, 27px;
  height: 120px;
`;
export const EducationImageContainer = styled.div`
  width: 260px;
  border-radius: 10px;
  border: 1.4px solid rgba(16, 32, 70, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  flex-direction: column;
  &:hover {
    border: 1px solid ${COLORS.primaryPink};
  }
  ${(props) =>
    props.active &&
    css`
       {
        border: 3px solid ${COLORS.primaryPink};
      }
    `}
`;
export const EducationBoxContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
export const EducationCheck = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 20px;
`;
export const EducationCheckContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const EducationCheckText = styled.h5`
  font-size: 17px;
  font-weight: normal;
  margin-left: 10px;
`;
export const EducationButton = styled.button`
  border-radius: 20px;
  border: solid 1px ${COLORS.borderGray};
  padding: 10px 20px;
  background-color: ${COLORS.white};
  margin-left: 500px;
  margin-top: 20px;
`;
// export const  = styled.div``
// export const  = styled.div``
// export const  = styled.div``
