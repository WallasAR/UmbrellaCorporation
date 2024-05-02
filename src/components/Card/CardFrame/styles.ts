import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  
`;

export const FrameCard = styled.View`
`;

export const IndicatorContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end; /* Alinha os elementos filhos à direita */
  position: absolute; 
  top: 35%;
  left: 85%;
`;