import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.COLORS.RED3};
  font-family: ${({theme}) => theme.FONTS.TITLE};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(20)}px;
  color: ${({theme}) => theme.COLORS.GRAY6};
  font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const Main = styled.View`
  padding: ${RFValue(50)}px ${RFValue(10)}px ${RFValue(10)}px ${RFValue(10)}px;
`;

export const Footer = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: ${RFValue(120)}px;
  margin-right: ${RFValue(10)}px;
`;

export const ButtonContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const GoBackContent = styled.View`
  margin: ${RFValue(40)}px 0 ${RFValue(20)}px ${RFValue(10)}px;
`;