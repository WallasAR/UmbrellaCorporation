import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Container = styled.View`
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  width: ${RFValue(300)}px;
  padding: ${RFValue(5)}px;
  height: ${RFValue(100)}px;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ImgContainer = styled.View`
  height: 100%;
  width: 30%;
  border-radius: ${RFValue(15)}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY2};
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: contain;  
`;

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: ${RFValue(13)}px;
  margin-bottom: ${RFValue(5)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Price = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.RED2};
  font-family: ${({ theme }) => theme.FONTS.DMSANSBOLD};
`;

export const PriceType = styled.Text`
  font-size: ${RFValue(10)}px;
  margin-left: ${RFValue(5)}px;
  letter-spacing: ${RFValue(1)}px;
  color: ${({ theme }) => theme.COLORS.GRAY4};
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
`;

export const IoniconsIcon = styled(Ionicons)`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.COLORS.GRAY5};
`;

export const PickerContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(15)}px;
  justify-content: space-between;
`;

export const Amount = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;