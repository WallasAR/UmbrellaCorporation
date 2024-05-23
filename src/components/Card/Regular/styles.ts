import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import AntDesign from "react-native-vector-icons/AntDesign";

export const Container = styled.View`
  width: ${RFValue(140)}px;
  height: ${RFValue(240)}px;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
`;

export const ImgContainer = styled.View`
  flex: 1;
  overflow: hidden;
  border-top-left-radius: ${RFValue(10)}px;
  border-top-right-radius: ${RFValue(10)}px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Name = styled.Text`
  text-align: left;
  font-size: ${RFValue(14)}px;
  margin-bottom: ${RFValue(5)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
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
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY4};
  letter-spacing: 1px;
`;

export const Rating = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(10)}px;

  position: absolute;
  bottom: 0;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.YELLOW}
`;

export const StarRating = styled.Text`
  font-size: ${RFValue(10)}px;
  margin-left: ${RFValue(5)}px;
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const AmountRating = styled.Text`
  font-size: ${RFValue(10)}px;
  margin-left: ${RFValue(8)}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;