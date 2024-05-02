import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
 
export const Container = styled.View`
  width: 90%;
  align-self: center;
  flex-direction: row;
  align-items: center;
  height: ${RFValue(45)}px;
  padding: 0 ${RFValue(10)}px;
  border-radius: ${RFValue(15)}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const InputContainer = styled.TextInput`
  flex: 1;
  height: ${RFValue(45)}px;
  font-size: ${RFValue(16)}px;
  border-radius: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const Icon = styled(Ionicons)`
  padding-right: ${RFValue(10)}px;
`;

// TextArea Style
export const TextAreaContainer = styled.View`
  width: 90%;
  align-self: center;
  height: ${RFValue(170)}px;
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(15)}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const Text = styled.TextInput`
  flex: 1;
  font-size: ${RFValue(12)}px;
  border-radius: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
  text-align-vertical: top;
`;