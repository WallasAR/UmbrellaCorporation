import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: ${RFValue(170)}px;
    height: ${RFValue(95)}px;
    padding: ${RFValue(10)}px;
    background-color: ${({theme}) => theme.COLORS.YELLOW2};
    border-radius: ${RFValue(10)}px;
`;

export const Line = styled.View`
    margin: auto;
    width: ${RFValue(150)}px;
    height: ${RFValue(2)}px;
    background-color: ${({ theme }) => theme.COLORS.YELLOW3};
`;

export const SelectedItems = styled.View`
    align-items: center;
    justify-content: center;
`;
export const Items = styled.Text`
    text-align: center;
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.RED1};
    font-family: ${({ theme }) => theme.FONTS.DMSANSBOLD};
`;

export const ContainerTotal = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Total = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.COLORS.RED1};
    font-family: ${({theme}) => theme.FONTS.DMSANSBOLD};
`;

