import React from "react";
import { TouchableOpacity, View } from "react-native";

import { ShadowedView } from "react-native-fast-shadow";

import { Container, Content, ImgContainer, Img, Name, PriceContainer, Price, PriceType, Icon, Rating, StarRating } from "./styles";
import { Skeleton } from "moti/skeleton";

interface CardProps {
  title: string;
  price: string;
  onPress: () => void;
  imageSource: string;
  starRating?: string;
  showRating?: boolean; 
  isLoading: boolean;
};

const CardSmall: React.FC<CardProps> = ({ imageSource, title, price, starRating, onPress = () => { }, showRating = true, isLoading }) => {
  const colorMode:"light" | "dark" = "light";

  return(
    <View style={{ padding: 15 }}>
      <Skeleton.Group show={isLoading}>
    <ShadowedView style={{
        shadowOpacity: 0.05,
        shadowRadius: 12,
        shadowOffset: {
          width: 0,
          height: 2,
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
          <Skeleton colorMode={colorMode} width={"100%"}>
            <Name>{title}</Name>
          </Skeleton>
          <Skeleton colorMode={colorMode} width={"100%"}>
            <PriceContainer>
              <Price>R${price}</Price>
              <PriceType>UNIDADE</PriceType>
            </PriceContainer>
            </Skeleton>
            {showRating && !isLoading && 
              <Rating>
              <Icon name="star"/>
              <StarRating>{starRating}</StarRating>
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

export { CardSmall };