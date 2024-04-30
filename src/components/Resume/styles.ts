import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ResumeContainer = styled.View`
    width: ${RFValue(178)}px;
    height: ${RFValue(105)}px;
    margin-top: ${RFValue(120)}px;
    margin-left: ${RFValue(20)}px;
    padding: ${RFValue(10)}px;
    background-color: ${({theme}) => theme.COLORS.YELLOW2};
`;

export const Line = styled.View`
    width: ${RFValue(150)}px;
    border: 1px;
    margin: auto;
`;

export const ContainerItens = styled.View`
    width: ${RFValue(163)}px;
    height: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;

export const SelectItens = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.FONTS.DMSANSBOLD};
    color: ${({theme}) => theme.COLORS.RED1};
    
`;

export const ContainerTotal = styled.View`
    width: ${RFValue(118)}px;
    height: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;

export const Total = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.FONTS.DMSANSBOLD};
    color: ${({theme}) => theme.COLORS.RED1};
`;

