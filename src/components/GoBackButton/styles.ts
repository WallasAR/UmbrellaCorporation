import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons"

export const Container = styled.View`
    padding: ${RFValue(60)}px ${RFValue(0)}px ${RFValue(0)}px ${RFValue(25)}px;
`;

export const Circle = styled.View`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;
    padding-right: ${RFValue(3)}px;
    border-radius: ${RFValue(50)}px;
    border: ${RFValue(2)}px solid ${({ theme }) => theme.COLORS.RED1};
    justify-content: center;
    align-items: center;
`;

export const Arrow = styled(Ionicons)`
    font-size: ${RFValue(25)}px;
    color: ${({theme}) => theme.COLORS.RED1};
`;