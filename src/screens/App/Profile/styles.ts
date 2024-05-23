import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons"

export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: ${RFValue(10)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(30)}px;
`;

export const Main = styled.View`
  gap: ${RFValue(10)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: ${RFValue(99)}px;
`;

export const Username = styled.Text`
  font-size: ${RFValue(24)}px;
  margin-top: ${RFValue(5)}px;
  color: ${({ theme }) => theme.COLORS.RED3};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;  

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.COLORS.RED3};
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.RED3};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;

export const ViewFooter = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(80)}px;
`;
export const IconButton = styled.View`
  padding: ${RFValue(15)}px;
  border-width: ${RFValue(1)}px;
  border-radius: ${RFValue(99)}px;
  border-color: ${({ theme }) => theme.COLORS.GRAY2};
`;

export const GoBackContent = styled.View`
  margin: ${RFValue(40)}px 0 ${RFValue(20)}px ${RFValue(10)}px;
`;