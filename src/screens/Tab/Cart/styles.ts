import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
    padding: ${RFValue(10)}px;
    margin-top: ${RFValue(50)}px;
    margin-left: ${RFValue(15)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.COLORS.RED3};
    font-family: ${({ theme }) => theme.FONTS.TITLE};
`;

export const Main = styled.View`
    align-items: center;
`;

export const Footer = styled.View`
`;

export const PurchaseResume = styled.View`
    flex-direction: row;
    align-items: flex-end;
    gap: ${RFValue(15)}px;
    padding: ${RFValue(15)}px;
    justify-content: space-around;

    position: absolute;
    /* top: ${RFValue(280)}px; */
    bottom: ${RFValue(220)}px;
`;