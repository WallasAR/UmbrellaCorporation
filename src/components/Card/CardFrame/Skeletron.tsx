import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { getProduct } from "../../../services/ProductService";
import { Container, FrameCard, IndicatorContainer } from "./styles";
import { Card } from "../Regular/Card";
import { CardSmall } from "../Small/CardSmall";
import { Button } from "../../Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { productData } from "../../../services/ProductService";

const skeletronLayout = [
  {
    id: 1,
    title:"Lorem ipsum dolor sit amet consectetur.",
    imageSource:"https://www.farmace.com.br/images/2019/05/18/dip-monoid-500mg,mL.png",
    price: 0,
    starRating:"",
    amountRating:"",
    stockAmount: 0
    },
    {
    id: 2,
    title:"Lorem ipsum dolor sit amet consectetur.",
    imageSource:"https://www.farmace.com.br/images/2019/05/18/dip-monoid-500mg,mL.png",
    price: 0,
    starRating:"",
    amountRating:"",
    stockAmount: 0
    },
    {
    id: 3,
    title:"Lorem ipsum dolor sit amet consectetur.",
    imageSource:"https://www.farmace.com.br/images/2019/05/18/dip-monoid-500mg,mL.png",
    price: 0,
    starRating:"",
    amountRating:"",
    stockAmount: 0
    },
]

const CardFrameSkeletron: React.FC = () => {

  return(
    <Container>
      <FlatList
        data={skeletronLayout}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FrameCard>
              <Card 
                onPress={() => {}}
                price={item.price.toFixed(2).replace(".", ",")}
                title={item.title}
                starRating={item.starRating}
                imageSource={item.imageSource}
                amountRating={item.amountRating}
                isLoading={true}
                />
          </FrameCard>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  )
}

interface CardFrameSmallProps {
  horizontal: boolean; 
  isDoubleCardShow?: boolean;

};

const CardFrameSmallSkeletron: React.FC<CardFrameSmallProps> = ({ horizontal, isDoubleCardShow }) => {
  return(
    <Container>
      <FlatList
        data={skeletronLayout}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FrameCard>
              <CardSmall 
                onPress={() => {}}
                title={item.title}
                price={item.price.toFixed(2).replace(".", ",")}
                starRating={item.starRating}
                imageSource={item.imageSource}
                isLoading={true}
                />
                {isDoubleCardShow && (
                  <CardSmall 
                  onPress={() => {}}
                  title={item.title}
                  price={item.price.toFixed(2).replace(".", ",")}
                  starRating={item.starRating}
                  imageSource={item.imageSource}
                  isLoading={true}
                  />
                )}
          </FrameCard>
        )}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        />
    </Container>
  )
}

export { CardFrameSkeletron, CardFrameSmallSkeletron };