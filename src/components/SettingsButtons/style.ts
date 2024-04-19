import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Fontisto from "react-native-vector-icons/Fontisto"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export const Container = styled.View`
`;
export const ContentHeader = styled.Text`
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(10)}px;
    margin-top: ${RFValue(35)}px;
`;
export const ContentBody = styled.View``;

export const ContentFooter = styled.View`
    
`;
export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
    color: ${({theme}) => theme.COLORS.RED3};
`;
export const OptionsContainer = styled.View`
    margin-top: ${RFValue(20)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: ${RFValue(15)}px auto;
    padding: ${RFValue(10)}px;
`;
export const IconPerfil = styled(AntDesign)`
    font-size: ${RFValue(25)}px;
    color: ${({theme}) => theme.COLORS.RED5};
`;
export const ConfigName = styled.Text`
    font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.COLORS.RED5};
    margin-left: ${RFValue(20)}px;
    flex: 1;
`;
export const IconArrow = styled(MaterialIcons)`
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.COLORS.RED3};
    margin-right: ${RFValue(25)}px;
`;
export const IconStyle = styled.View`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(25)}px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    elevation: 3;
    margin-left: ${RFValue(25)}px;
    padding: ${RFValue(10)}px;
`;
export const IconNotification = styled(Fontisto)`
    font-size: ${RFValue(25)}px;
    color: ${({theme}) => theme.COLORS.RED5};
`;
export const IconIdioma = styled(Ionicons)`
    font-size: ${RFValue(25)}px;
    color: ${({theme}) => theme.COLORS.RED5};
`;
export const IconSecurity = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(25)}px;
    color: ${({theme}) => theme.COLORS.RED5};
`;
export const IconSac = styled(MaterialIcons)`
    font-size: ${RFValue(30)}px;
    color: ${({theme}) => theme.COLORS.RED5};  
`;
export const LogoutButton = styled.View`
    margin-top: ${RFValue(40)}px;
    align-items: center;
    justify-content: center;
`;
export const IconLogout = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(25)}px;
    color: ${({theme}) => theme.COLORS.RED5};
`;
export const IconStyleLogout = styled.View`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${RFValue(25)}px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    elevation: 3;
    padding: ${RFValue(10)}px;
`;
export const TextLogout = styled.Text`
    font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
    color: ${({theme}) => theme.COLORS.RED5};
    text-align: center;
    justify-content: center;
    font-size: ${RFValue(15)}px;
`;