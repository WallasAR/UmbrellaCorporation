import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  margin-bottom: 100px;
`;

export const Header = styled.View`

`;

export const Section = styled.View`
  width: 90%;
  margin-top: ${RFValue(30)}px;
  padding-horizontal: ${RFValue(10)}px;
`;

export const DescriptionTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const DescriptionText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDREGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${RFValue(16)}px;
  letter-spacing: ${RFValue(1.1)}px;
  text-align: center;
`;

export const BtnContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const UserRatingContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const MakeRatingContainer = styled.View`
  align-items: center;
`;