import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from "react-native";

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${RFValue(120)}px;
    height: ${RFValue(55)}px;
    margin-horizontal: ${RFValue(10)}px;
    border-radius: ${RFValue(15)}px;
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

export const ContentGoogle = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${RFValue(120)}px;
    height: ${RFValue(55)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: ${RFValue(15)}px;
`;

export const styles = StyleSheet.create ({
    shadow: {
        shadowOpacity: 0.1,
        shadowRadius: 12,
        shadowOffset: {
            width: 0,
            height: 4,
            },
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15
    }
})