import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  align-self: center;
  position: relative;
  justify-content: center;
  height: ${RFValue(450)}px;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
`;

export const ImgContainer = styled.View`
  width: 100%;
  height: 70%;
  border-top-left-radius: ${RFValue(10)}px;
  border-top-right-radius: ${RFValue(10)}px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-top-left-radius: ${RFValue(10)}px;
  border-top-right-radius: ${RFValue(10)}px;

`;

export const Name = styled.Text`
  text-align: left;
  padding: ${RFValue(5)}px ${RFValue(10)}px;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACK};

`;

export const PriceContainer = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: ${RFValue(10)}px;
  margin-left: ${RFValue(10)}px;
`;

export const Price = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.FONTS.DMSANSBOLD};
  color: ${({ theme }) => theme.COLORS.RED2};
`;

export const PriceType = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.FONTS.QUICKSANDMEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY4};
  letter-spacing:${RFValue(1)}px;
`;

export const StockContainer = styled.View`
  padding: ${RFValue(10)}px;
  border-top-left-radius: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.GRAY7};
  border-bottom-right-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY2};

  position: absolute;
  right: ${RFValue(0)}px;
  bottom: ${RFValue(0)}px;
`;

export const StockAmount = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-left: ${RFValue(5)}px;
  font-family: ${({ theme }) => theme.FONTS.DMSANSREGULAR};
`;

export const styles = StyleSheet.create ({
  shadow: {
    width: "95%",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",

    shadowRadius: 15,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 0,
      height: 5,
    },
        
  }

})