import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export const Container = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: ${RFValue(230)}px;
  height: ${RFValue(45)}px;
  margin-horizontal: ${RFValue(10)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDBOLD};
`;

export const Icon = styled(Ionicons)`
  padding-right: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`;