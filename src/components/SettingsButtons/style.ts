import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

export const OptionsContainer = styled.View`
    margin: ${RFValue(5)}px auto;
    padding: ${RFValue(10)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ConfigName = styled.Text`
    flex: 1;
    font-size: ${RFValue(16)}px;
    padding-left: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
    color: ${({theme}) => theme.COLORS.RED5};
    `;
export const IconArrow = styled(MaterialIcons)`
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.COLORS.GRAY4};
`;

export const ContainerIcon = styled.View`
    align-items: center;
    justify-content: center;
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(15)}px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    elevation: 2; 
`;

export const IconStyle = styled(Ionicons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme}) => theme.COLORS.RED5};
    
`;
