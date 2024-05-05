import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
  gap: ${RFValue(12)}px;
  justify-content: center;
  margin-bottom: ${RFValue(20)}px;
  border-radius: ${RFValue(99)}px;
  background-color: ${({ theme }) => theme.COLORS.RED1};
  
  position: absolute;
  bottom: 0;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const InnerButton = styled.View`
  padding: ${RFValue(12)}px;
  border-radius: ${RFValue(99)}px;
`;