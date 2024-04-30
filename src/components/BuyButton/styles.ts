import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const ButtonContainer = styled.View`
    width: ${RFValue(130)}px;
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(50)}px;
    background-color: ${({theme}) => theme.COLORS.GREEN};
    align-items: center;
    justify-content: center;
    elevation: 2;
    left: ${RFValue(200)}px;
    top: ${RFValue(200)};
    
`;

export const TextStyle = styled.Text`
font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
font-size: ${RFValue(18)}px;
color: ${({ theme}) => theme.COLORS.WHITE};

`;