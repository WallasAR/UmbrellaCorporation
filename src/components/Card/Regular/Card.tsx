import React from "react";
import { Container, Content, ImgContainer, Img, Name, PriceContainer, Price, PriceType, Icon, Rating, StarRating, AmountRating } from "./styles";
import { TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
  price: string;
  starRating: string;
  onPress: () => void;
  imageSource: string;
  amountRating: string;

}

const Card: React.FC<Props> = ({ imageSource, title, price, starRating, amountRating, onPress = () => {} }) => {
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
              <Icon name="star"/>
              <StarRating>{starRating}</StarRating>
              <AmountRating>{amountRating} Avaliações</AmountRating>
            </Rating>
          </Content>
        </Container>
      </TouchableOpacity>
    </View>
  );
};

export { Card };