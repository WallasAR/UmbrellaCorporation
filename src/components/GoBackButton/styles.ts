import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import EvilIcons from "react-native-vector-icons/EvilIcons"

export const Container = styled.View`
    padding: ${RFValue(10)}px;
    margin-top: ${RFValue(30)}px;
`;
export const BackButton = styled(EvilIcons)`
    font-size: ${RFValue(40)}px;
    color: ${({theme}) => theme.COLORS.RED1};
`;