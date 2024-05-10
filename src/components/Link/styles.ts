import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
`;

export const LinkContainer = styled.Pressable`
  padding: ${RFValue(10)}px;
  flex-direction: row;
`;

export const LinkText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-right: ${RFValue(5)}px;
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDSEMIBOLD};
`;