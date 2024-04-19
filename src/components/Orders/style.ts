import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    
`;
export const ContentHeader = styled.View`
    padding: ${RFValue(10)}px;
    margin-top: ${RFValue(50)}px;
    margin-left: ${RFValue(15)}px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
    color: ${({theme}) => theme.COLORS.RED3};
`;
export const CardOrder = styled.View`
    border-radius: ${RFValue(10)}px;
    padding: ${RFValue(20)}px;
    elevation: 3;
`;
export const OrderText = styled.Text`
    font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
    color: ${({theme}) => theme.COLORS.RED5};
    margin-left: ${RFValue(20)}px;
`;
export const SetCard = styled.View`
    flex-direction: row;
    align-items: center;
    
`;

