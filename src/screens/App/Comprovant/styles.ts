import LottieView from "lottie-react-native";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;
  margin: auto 0;
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
  margin: auto 0;
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
  margin: auto 0;
  align-items: center;
  justify-content: center;
`;

export const ConfirmedAnimation = styled(LottieView)`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
`;

export const NavLinkContainer = styled.View`
  margin-top: ${RFValue(40)}px;
`;