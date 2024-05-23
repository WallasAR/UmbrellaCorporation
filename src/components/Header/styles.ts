import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.RED1};
  padding: 10% 0 ${RFValue(10)}px ${RFValue(20)}px; 
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-left: 25%;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;