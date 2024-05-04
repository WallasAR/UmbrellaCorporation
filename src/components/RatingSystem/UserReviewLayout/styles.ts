import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 90%;
  padding: ${RFValue(5)}px;
  height: ${RFValue(110)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(8)}px;

`;

export const ImgContainer = styled.View`  
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  margin-right: ${RFValue(8)}px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${RFValue(20)}px;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const Username = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(14)}px;
  margin-bottom: ${RFValue(4)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.DMSANSBOLD};
`;

export const Description = styled.Text`
  width: 90%;
  height: ${RFValue(50)}px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;

export const StarRatingContainer = styled.View`
  width: ${RFValue(90)}px;
  height: ${RFValue(15)}px;
  margin-bottom: ${RFValue(4)}px;
`;