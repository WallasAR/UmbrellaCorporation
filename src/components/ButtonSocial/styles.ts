import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Button = styled.TouchableOpacity`
    elevation: 2;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${RFValue(120)}px;
    height: ${RFValue(55)}px;
    margin-horizontal: ${RFValue(10)}px;
    border-radius: ${RFValue(15)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Icon = styled(Ionicons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    margin-left: ${RFValue(5)}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
`;