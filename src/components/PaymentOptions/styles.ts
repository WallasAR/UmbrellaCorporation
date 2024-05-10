import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    width: 100%;
`;

export const RatioContent = styled.TouchableOpacity`
    padding: ${RFValue(10)}px 0; 
`;

export const OptionsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding: ${RFValue(10)}px;
    justify-content: space-between;
`;

export const Icon = styled(Ionicons)`
    font-size: ${RFValue(30)}px;
    color: ${({ theme }) => theme.COLORS.RED5};
`;

export const ConfigName = styled.Text`
    flex: 1;
    font-size: ${RFValue(16)}px;
    justify-content: space-between;
    color: ${({ theme }) => theme.COLORS.RED5};
    font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const Info = styled.Text`
    padding: ${RFValue(5)}px;
    font-size: ${RFValue(8)}px;
    justify-content: space-between;
    color: ${({ theme }) => theme.COLORS.GRAY4};
    font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const ViewRight = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    margin-left: ${RFValue(20)}px;
    justify-content: space-between;
`;

export const RatioIcon = styled(Ionicons)`
    font-size: ${RFValue(25)}px;
`;

export const AddressInfoContent = styled.View`
    flex: 1;
`;

export const AddressContent = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    margin-top: ${RFValue(30)}px;
    justify-content: space-between;
`;

export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.GRAY6};
    font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const Address = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;

export const ViewLeft = styled.View`
    elevation: 5;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: ${RFValue(8)}px;
    border-radius: ${RFValue(8)}px;
`;

export const ViewRightDelivery = styled.View`
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: ${RFValue(5)}px ${RFValue(20)}px;
`;

export const Identifier = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: ${({ theme }) => theme.FONTS.DMSANSBOLD};
`;
