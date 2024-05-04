import styled from 'styled-components/native';
import AntDesign from "react-native-vector-icons/AntDesign"

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${RFValue(290)}px;
  height: ${RFValue(45)}px;
  justify-content: space-around;
  border-radius: ${RFValue(10)}px;
  border: ${RFValue(1)}px solid ${({ theme }) => theme.COLORS.GRAY5};
`;

export const Star = styled(AntDesign)`
  font-size: ${RFValue(18)}px;
  padding: ${RFValue(10)}px;
`;

export const ContainerViewOnly = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const StarViewOnly = styled(AntDesign)`
  font-size: ${RFValue(14)}px;
`;