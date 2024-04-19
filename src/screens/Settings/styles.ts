import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const ContentHeader = styled.View`
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: ${RFValue(25)}px ${RFValue(10)}px ${RFValue(10)}px ${RFValue(10)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
    color: ${({theme}) => theme.COLORS.RED3};
`;

export const ContainerButtons = styled.View`
    padding: ${RFValue(25)}px ${RFValue(10)}px ${RFValue(10)}px ${RFValue(10)}px;
`;