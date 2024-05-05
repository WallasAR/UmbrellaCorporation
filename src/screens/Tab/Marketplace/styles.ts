import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Search = styled.View`
  margin-top: ${RFValue(60)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Main = styled.View`
  /* Espaço final para navBar */
  margin-bottom: ${RFValue(80)}px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  padding-left: ${RFValue(10)}px;
  margin-top: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.RED5};
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const BannerContainer = styled.View`
  
`;