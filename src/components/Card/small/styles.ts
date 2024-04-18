import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import AntDesign from "react-native-vector-icons/AntDesign";

export const Container = styled.View`
  width: ${RFValue(300)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  elevation: 3;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ImgContainer = styled.View`
  width: ${RFValue(80)}px;
  height: 100%;
  justify-content: center;
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  border-top-left-radius: ${RFValue(10)}px;
  border-bottom-left-radius: ${RFValue(10)}px;
  
`;

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-bottom: ${RFValue(5)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONTS.DMSANSBOLD};
  color: ${({ theme }) => theme.COLORS.RED2};
`;

export const PriceType = styled.Text`
  font-size: ${RFValue(10)}px;
  margin-left: ${RFValue(5)}px;
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY4};
`;

export const Rating = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
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
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK};
`;