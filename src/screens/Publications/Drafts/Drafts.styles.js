import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const DraftsHeader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${COLORS.backgroundColor};
`;
export const DraftsInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const DraftsButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const DraftsLogo = styled.img`
  width: 80px;
`;
export const DraftsText = styled.div`
  font-size: 20px;
  margin-top: 30px;
  font-weight: bold;
`;
export const DraftsTextOne = styled.div`
  text-align: center;
  font-size: 19px;
  margin-top: 20px;
  color: rgba(16, 32, 70, 0.4);
`;
export const DraftsBox = styled.div``;
export const DraftsContainer = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-top: 40px;
  padding: 6px 40px;
  border-width: 2px;
  border: 1px solid ${COLORS.primaryPink};
  border-radius: 20px;
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  color: ${(props) => (props.primary ? COLORS.white : COLORS.primaryPink)};
  background-color: ${(props) =>
    props.primary ? COLORS.primaryPink : COLORS.white};
  
`;
// export const = styled.div``
// export const = styled.div``
