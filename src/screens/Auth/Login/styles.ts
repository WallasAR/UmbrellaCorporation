import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    height: auto;
    padding: ${RFValue(20)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
    align-items: center;
    justify-content: center;
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(60)}px;
`;

export const Main = styled.View`
  align-items: center;
  gap: ${RFValue(15)}px;
  justify-content: center;
`;

export const Footer = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(50)}px;
    margin-bottom: ${RFValue(40)}px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.TITLE};
`;

export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-top: ${RFValue(60)}px;
    margin-bottom: ${RFValue(5)}px;
    font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
    
`;

export const ViewButton = styled.View`
    flex-direction: row;
    margin-bottom: ${RFValue(15)}px;
`;

export const ForgotPassContainer = styled.View`
    padding: ${RFValue(10)}px;
    bottom: ${RFValue(15)}px;
`;