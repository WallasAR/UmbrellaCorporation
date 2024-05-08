import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: ${RFValue(20)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(24)}px;
    margin-top: ${RFValue(40)}px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.TITLE};
`;
export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-top: ${RFValue(40)}px;
    margin-bottom: ${RFValue(5)}px;
    font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
    
`;

export const ViewButton = styled.View`
    flex-direction: row;
    margin-bottom: ${RFValue(15)}px;
`;

export const Main = styled.View`
    gap: ${RFValue(15)}px;
    align-items: center;
    justify-content: center;
`;

export const Footer = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(50)}px;
`;

export const SignInContainer = styled.Pressable`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(8)}px;
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