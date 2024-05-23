import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  height: ${RFValue(130)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: ${RFValue(25)}px;
  `;

export const ImgContainer = styled.View`  
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: ${RFValue(99)}px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${RFValue(10)}px;
`;

export const Username = styled.Text`
  font-weight: bold;
  padding: ${RFValue(5)}px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.DMSANSBOLD};
`;

export const Description = styled.Text`
  padding: ${RFValue(10)}px 0;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;

export const StarRatingContainer = styled.View`
  width: ${RFValue(90)}px;
  height: ${RFValue(15)}px;
`;