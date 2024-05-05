import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const Section = styled.View`
  width: 90%;
  margin-top: ${RFValue(30)}px;
  padding-horizontal: ${RFValue(10)}px;
`;

export const DescriptionTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const DescriptionText = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDREGULAR};
`;

export const Description = styled.Text`
  text-align: center;
  font-size: ${RFValue(16)}px;
  letter-spacing: ${RFValue(1.1)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const SubTitle = styled.Text`
  padding-horizontal: ${RFValue(10)}px;
  margin-top: ${RFValue(40)}px;
  margin-bottom: ${RFValue(15)}px;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;

export const Label = styled.Text`
  text-align: center;
  margin: ${RFValue(10)}px 0px;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.COLORS.GRAY4};
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;

export const BtnContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const UserRatingContainer = styled.View`
  align-items: center;
  justify-content: center;

`;

export const MakeRatingContainer = styled.View`
  align-items: center;
`;