import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import AntDesign from "react-native-vector-icons/AntDesign";

export const Container = styled.View`
  border: 1px dashed ${({ theme }) => theme.COLORS.GRAY3};
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  width: ${RFValue(300)}px;
  height: ${RFValue(80)}px;
  border-radius: ${RFValue(10)}px;

`;

export const ImgContainer = styled.View`
  height: 100%;
  width: ${RFValue(80)}px;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: ${RFValue(5)}px;
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
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.RED2};
  font-family: ${({ theme }) => theme.FONTS.DMSANSBOLD};
`;

export const PriceType = styled.Text`
  letter-spacing: ${RFValue(1)}px;
  font-size: ${RFValue(10)}px;
  margin-left: ${RFValue(5)}px;
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