import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.Modal`
`;

export const AlertContent = styled.View`
  align-items: center;
  gap: ${RFValue(15)}px;
  justify-content: center;
  width: ${RFValue(300)}px;
  border-radius: ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  elevation: 15;
`;

export const HeaderContent = styled.View`
  width: ${RFValue(300)}px;
  padding: ${RFValue(10)}px;
  border-top-left-radius: ${RFValue(30)}px;
  border-top-right-radius: ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.COLORS.RED2};
`;

export const Header = styled.Text`
  text-align: center;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const Description = styled.Text`
  text-align: left;
  padding: ${RFValue(15)}px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
  
`;

export const ViewButton = styled.View`
  padding: ${RFValue(15)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const styles = StyleSheet.create ({
  blur: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0 
  }

})