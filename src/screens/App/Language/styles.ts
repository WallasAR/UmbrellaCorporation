import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Label = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.GRAY6};
  margin-top: ${RFValue(20)}px;
`;

export const Content = styled.View`
  margin-top: ${RFValue(10)}px;
  padding: 0 ${RFValue(10)}px;
`;

export const Header = styled.View`

  align-items: center;
  
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.RED3};
  margin-left: ${RFValue(15)}px;

`;
