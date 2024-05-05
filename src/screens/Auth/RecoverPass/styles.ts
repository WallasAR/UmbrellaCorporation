import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: ${RFValue(20)}px;
  margin: auto;
`;

export const LinkContainer = styled.Pressable`
  
`;

export const Link = styled.Text`
  text-decoration: underline;
  font-size: ${RFValue(12)}px;
  margin-left: ${RFValue(5)}px;
  color: ${({ theme }) => theme.COLORS.RED3};
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDSEMIBOLD};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.TITLE};
`;

export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(5)}px;
    font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
    text-align: center;
`;

export const Main = styled.View`
  margin-top: ${RFValue(15)}px;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(10)}px;
`;

export const Footer = styled.View`
  margin-top: ${RFValue(0)}px;
  align-items: center;
  justify-content: center;
`;