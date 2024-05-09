import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin: auto;
  padding: ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Status = styled.Text`
  text-align: center;
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;

export const Main = styled.View`
  align-items: center;
  gap: ${RFValue(10)}px;
  justify-content: center;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(125)}px;
  border-radius: ${RFValue(99)}px;
  padding: ${RFValue(15)}px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LinkContainer = styled.Pressable`
  
`;

export const Link = styled.Text`
  text-decoration: underline;
  font-size: ${RFValue(12)}px;
  margin-left: ${RFValue(5)}px;
  color: ${({ theme }) => theme.COLORS.GREEN};
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDSEMIBOLD};
`;