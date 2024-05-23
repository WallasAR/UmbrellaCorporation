import React from "react";
import { Container, Content, ImgContainer, Img, Name, PriceContainer, Price, PriceType, Icon, Rating, StarRating, AmountRating } from "./styles";
import { TouchableOpacity, View } from "react-native";
import { ShadowedView } from "react-native-fast-shadow";
import { Skeleton } from "moti/skeleton";

interface Props {
  title: string;
  price: string;
  starRating: string;
  onPress: () => void;
  imageSource: string;
  amountRating: string;
  isLoading: boolean;

}

const Card: React.FC<Props> = ({ imageSource, title, price, starRating, amountRating, onPress = () => {}, isLoading }) => {
  const colorMode:"light" | "dark" = "light";

  return(
    <View style={{ padding: 15 }}>
      <Skeleton.Group show={isLoading}>
      <ShadowedView style={{
        shadowOpacity: 0.1,
        shadowRadius: 12,
        shadowOffset: {
          width: 0,
          height: 5,
        },
      }}>
      <TouchableOpacity activeOpacity={0.8} accessibilityRole="button" onPress={onPress}>
        <Container>
        <ImgContainer>
          <Skeleton colorMode={colorMode} width={"100%"}>
            <Img source={{ uri: imageSource }} />
          </Skeleton>
          </ImgContainer>
          <Content>
          <Skeleton colorMode={colorMode} width={"100%"} >
            <Name>{title}</Name>
          </Skeleton>
          <Skeleton colorMode={colorMode} width={"100%"}>
            <PriceContainer>
              <Price>R${price}</Price>
              <PriceType>UNIDADE</PriceType>
            </PriceContainer>
            </Skeleton>
            {!isLoading && 
            <Rating>
              <Icon name="star"/>
              <StarRating>{starRating}</StarRating>
              <AmountRating>{amountRating} Avaliações</AmountRating>
            </Rating>
            }
          </Content>
        </Container>
      </TouchableOpacity>
      </ShadowedView>
      </Skeleton.Group>
    </View>
  );
};

export { Card };