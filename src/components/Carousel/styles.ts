import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(200)}px;
  align-items: center;
`;

export const Img = styled.Image`
  height: 100%;
  width: 100%;
`;

export const DotContainer = styled.View`
  width: 100%;
  align-items: center;

  top: 90%;
  position: absolute;
  `;
