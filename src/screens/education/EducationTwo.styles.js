import styled, { css } from "styled-components";
import { COLORS } from "../../constants/colors";

export const EducationTwoText = styled.div`
  margin-left: 10px;
`;
export const EducationTwoTextTwo = styled.div`
  font-size: 15px;
  margin-top: 20px;
  color: gray;
`;
export const EducationTwoTextContainer = styled.div`
  border-radius: 10px;
  display: flex;
  padding: 13px 16px;
  align-items: center;
  border: solid 1px ${COLORS.primaryPink};
`;

export const EducationTwoHeader = styled.div`
  height: 120vh;
  display: flex;
  background-color: ${COLORS.backgroundColor};
`;

export const EducationTwoInner = styled.div`
  margin-left: 70px;
  padding-bottom: 50px;
`;
export const EducationTwoContainer = styled.div`
  background-color: #fff;
  width: 550px;
  height: 520px;
  margin-top: 40px;
  border-radius: 10px;
  padding: 30px 35px;
`;
export const EducationTextTwo = styled.div`
  margin-left: 7px;
`;
export const EducationTwoTextOne = styled.div`
  margin-left: 27px;
`;
export const EducationTextTwoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const EducationTwoTextContainerTwo = styled.div`
  background-color: #f7fafc;
  padding: 22px 17px;
  border: solid 1px #e9edf1;
  border-radius: 10px;
  margin: 3px;
  cursor: pointer;
  ${(props) =>
    props.active ?
      css`
       {
        outline: 3px solid ${COLORS.primaryPink};
      }
    `: `&:hover {
    outline: 1px solid ${COLORS.primaryPink};
  }`}
`;
export const EducationIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EducationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const EducationBoxOne = styled.div`
  display: flex;
  padding: 10px 15px 10px 17px;
  align-items: center;
  background-color: #f7fafc;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 17px;
`;

export const EducationTwoBtn = styled.button`
 border-radius: 20px;
  border: solid 1px #C9CED8;
  padding: 10px 20px;
  padding-bottom: 15;
  background-color:  #f7fafc;
  cursor: pointer;
  margin-top: 10px;
`
export const ButtonsContainerOne = styled.div`
  flex: 1;
  margin-top: 20px;
  width: 617px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// export const = styled.div``
