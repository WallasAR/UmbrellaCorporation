import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Container, Content, ImgContainer, Img, Name, PriceContainer, Price, PriceType, Icon, Rating, StarRating } from "./styles";

interface CardProps {
  title: string;
  price: string;
  iconName: boolean;
  onPress: () => void;
  imageSource: string;
  starRating?: string;
};

const CardSmall: React.FC<CardProps> = ({ imageSource, title, price, iconName, starRating, onPress = () => { }, }) => {
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
              <Price>{price}</Price>
              <PriceType>UNIDADE</PriceType>
            </PriceContainer>
            <Rating>
              <Icon name={iconName ? "star" : undefined }/>
              <StarRating>{starRating}</StarRating>
            </Rating>
          </Content>
        </Container>
      </TouchableOpacity>
    </View>
  );
};

export { CardSmall };