import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons"

export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: ${RFValue(9)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(6)}px;
`;

export const Main = styled.View`
  gap: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(23)}px;
  margin-top: ${RFValue(5)}px;
  color: ${({ theme }) => theme.COLORS.RED3};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  letter-spacing: 0.5px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(15)}px;
  padding: ${RFValue(10)}px;
  letter-spacing: 1px;
  max-height: 100px;
`;  

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.COLORS.RED3};
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
`;

export const ViewFooter = styled.View`
  flex: 1;
  margin-top: ${RFValue(15)}px;;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ViewButton = styled.View`
  top: 30%;
  position: fixed;
  left: 30%;
`;

export const ClientDelivery = styled.Text`
  margin-right: ${RFValue(20)}px;
  margin-left: ${RFValue(20)}px;
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(25)}px;
  height: 100px;
  max-height: 100px;

  text-align: justify;

`;
