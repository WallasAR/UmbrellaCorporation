import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Container, Content, ImgContainer, Img, Name, PriceContainer, Price, PriceType, IoniconsIcon, PickerContent, Amount } from "./styles";
import { useTheme } from "styled-components";

interface ShopCardProps {
  title: string;
  price: string;
  onPress: () => void;
  imageSource: string;
  onPressItemRemove: () => void;
};

const ShopCard: React.FC<ShopCardProps> = ({ imageSource, title, price, onPress = () => {}, onPressItemRemove = () => {} }) => {
  const { COLORS } = useTheme();

  return(
    <View style={{ padding: 15 }}>

      <TouchableOpacity activeOpacity={0.8} accessibilityRole="button" onPress={onPress}>
        <Container>
        <ImgContainer>
          <Img source={{ uri: imageSource }} />
        </ImgContainer>
          <Content>
          <Name>{title}</Name>
            <PriceContainer>
              <Price>R$ {price}</Price>
              <PriceType>UN</PriceType>
            </PriceContainer>
            <PickerContent>
              <IoniconsIcon name="remove-circle-outline"/>
              <Amount>1</Amount>
              <IoniconsIcon name="add-circle-outline"/>

              <TouchableOpacity activeOpacity={0.9} onPress={onPressItemRemove}>
                <IoniconsIcon name="trash-outline" style={{ 
                  backgroundColor: COLORS.GRAY, 
                  color: COLORS.BLACK, 
                  padding: 10,
                  borderRadius: 10,
                  fontSize: 27 
                }}/>
              </TouchableOpacity>
            </PickerContent>
            
          </Content>
        </Container>
      </TouchableOpacity>
    </View>
  );
};

export { ShopCard };