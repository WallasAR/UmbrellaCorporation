import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const ContentHeader = styled.View`
    text-align: left;
    align-items: left;
    justify-content: left;
    margin-top: ${RFValue(50)}px;
    padding: ${RFValue(20)}px;
`;

export const Main = styled.View``;

export const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    height: 100%;
`;
export const ContentBody = styled.View``;

export const ViewButton = styled.View``;

export const ContentFooter = styled.View``;

export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
    color: ${({theme}) => theme.COLORS.RED3}

    `;