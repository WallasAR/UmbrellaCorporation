import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: ${RFValue(20)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
    align-items: center;
    justify-content: center;
    padding: ${RFValue(20)}px;
    margin-top: ${RFValue(20)}px;
    
`;

export const Main = styled.View`
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(50)}px;
`;

export const Title = styled.Text`
    text-align: center;
    /* margin-top: ${RFValue(40)}px; */
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

export const SignUpContainer = styled.Pressable`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(10)}px;
`;

export const Label = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const Link = styled.Text`
    text-decoration: underline;
    font-size: ${RFValue(12)}px;
    margin-left: ${RFValue(5)}px;
    color: ${({ theme }) => theme.COLORS.RED3};
    font-family: ${({ theme }) => theme.FONTS.QUICKSANDSEMIBOLD};
`;

export const ForgotPassContainer = styled.View`
    padding: ${RFValue(10)}px;
    bottom: ${RFValue(15)}px;
`;