import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Container = styled.View`
  width: 100%;
  height: auto;

  position: absolute;
  bottom: 0px;
`;

export const Content = styled.View`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(5)}px ${RFValue(10)}px;
`;

export const Icon = styled(Ionicons)`
  align-items: center;
  justify-content: center;
  font-size: ${RFValue(18)}px;
  margin-right: ${RFValue(5)}px;
  padding-left: ${RFValue(1)}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  width: 90%;
  justify-content: center;
  align-items: flex-start;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;