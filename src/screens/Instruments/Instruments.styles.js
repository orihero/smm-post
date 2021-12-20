import styled from "styled-components";
import { COLORS, colors } from "../../constants/colors";

export const InstrumentsHeader = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7fafc;
`;

export const InstrumentsHeaderContainer = styled.div`
  margin-left: 75px;
  margin-top: 40px;
`;

export const InstrumentsInner = styled.div`
  margin-bottom: 30px;
  display: flex;
`;

export const InstrumentsContainer = styled.div`
  display: flex;
`;

export const InstrumentsText = styled.div`
  align-items: center;
  display: flex;
  margin-left: 5px;
  font-weight: 500;
`;

export const InstrumentsBox = styled.div`
  border-radius: 7px;
  margin: 20px 10px;
  padding: 15px 0px 0px 15px;
  background-color: ${COLORS.white};
  display: flex;
  width: 484px;
  height: 29vh;
  border-radius: 12px;
  box-shadow: 0px 1px 20px rgba(124, 124, 124, 0.08);
`;

export const InstrumentsBoxText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const InstrumentsBoxTextContainer = styled.div``;

export const InstrumentsBoxTextOne = styled.div`
  margin-top: 15px;
  font-size: 14px;
  font-weight: normal;
`;

export const InstrumentsBoxTextTwo = styled.div`
  margin-top: 20px;
  font-size: 10px;
  color: grey;
`;

export const InstrumentsBoxTextThree = styled.button`
  color: #e8427e;
  border: none;
  background-color: ${COLORS.white};
  cursor: pointer;
`;

export const InstrumentsBoxImage = styled.img`
  width: 160px;
  height: 165px;
`;

export const InstrumentsBoxImag = styled.img`
  width: 160px;
  margin-top: 25px;
  margin-left: 25px;
  height: 147px;
`;

export const InstrumentsBoxContainerImage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InstrumentsBoxContainerImageText = styled.h1`
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 15px;
  margin-left: 90px;
  width: 40px;
  color: ${COLORS.white};
  background-color: #f9d0df;
`;

export const InstrumentsBoxContainerImageTextOne = styled.div`
  padding: 4px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  margin-left: 90px;
  width: 30px;
  color: ${COLORS.white};
  background-color: ${COLORS.primaryPink};
`;
