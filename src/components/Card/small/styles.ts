import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Container = styled.View`
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  width: ${RFValue(300)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
`;

export const ImgContainer = styled.View`
  width: 25%;
  height: 100%;
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-bottom: ${RFValue(5)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Price = styled.Text`
  font-size: ${RFValue(18)}px;
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

export const Rating = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  bottom: ${RFValue(10)}px;
  right: ${RFValue(10)}px;
  margin-top: ${RFValue(5)}px;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(12)}px;
  margin-right: ${RFValue(5)}px;
  color: ${({ theme }) => theme.COLORS.YELLOW};
`;

export const StarRating = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;

export const IoniconsIcon = styled(Ionicons)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.GRAY7};
`;

export const PickerContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(15)}px;

`;

export const Amount = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;