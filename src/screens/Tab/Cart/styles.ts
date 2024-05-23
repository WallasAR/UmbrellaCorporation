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
    flex: 1;
    align-items: center;
    flex-direction: column;
    margin-bottom: ${RFValue(200)}px;
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
    bottom: ${RFValue(70)}px;
`;

export const DescriptionContent = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    height: ${RFValue(400)}px;
`;

export const Description = styled.Text`
    text-align: center;
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.COLORS.GRAY6};
    font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;