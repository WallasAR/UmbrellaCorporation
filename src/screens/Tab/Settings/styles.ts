import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: ${RFValue(10)}px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(20)}px;
`;

export const GoBackButtonContainer = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
    color: ${({theme}) => theme.COLORS.RED4};
`;

export const Main = styled.View`
    padding: ${RFValue(25)}px ${RFValue(10)}px ${RFValue(10)}px ${RFValue(10)}px;
    gap: 15px;
`;
