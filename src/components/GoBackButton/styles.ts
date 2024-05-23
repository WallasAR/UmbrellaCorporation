import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons"

export const Container = styled.TouchableOpacity`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;
`;

export const Circle = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-right: ${RFValue(3)}px;
    border-radius: ${RFValue(10)}px;
    border: ${RFValue(2)}px solid ${({ theme }) => theme.COLORS.RED1};
`;

export const Arrow = styled(Ionicons)`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.COLORS.RED1};
`;