import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(230)}px;
  height: ${RFValue(45)}px;
  margin-top: ${RFValue(15)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.COLORS.RED3};
`;

export const Content = styled.View`
  flex-direction:  row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDBOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;