import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    height: 100%;
`;
export const Header = styled.View`
    padding: ${RFValue(10)}px;
    margin-top: ${RFValue(50)}px;
    margin-left: ${RFValue(15)}px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(25)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
    color: ${({theme}) => theme.COLORS.RED3};
`;

export const TotalInfoContainer = styled.View`
  flex-direction: column;
`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
`;

export const FrameCard = styled.View`
`;

export const ViewDescription = styled.View`
  bottom: 10px;
  justify-content: center;
  align-self: center;
  width: ${RFValue(300)}px;
  height: ${RFValue(90)}px;
  border-bottom-right-radius: ${RFValue(10)}px;
  border-bottom-left-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) =>theme.COLORS.GRAY9};
`;

export const SetDescription = styled.Text`
    font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.COLORS.GRAY7};
    margin-left: ${RFValue(20)}px;
`;
export const ViewText = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({theme}) => theme.FONTS.QUICKSANDMEDIUM};
`;
