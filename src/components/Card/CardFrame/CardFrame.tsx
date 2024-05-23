import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { productData, getProduct } from "../../../services/ProductService";

import { Card } from "../Regular/Card";
import { Button } from "../../Buttons/Button";
import { CardSmall } from "../Small/CardSmall";
import { CardFrameSkeletron, CardFrameSmallSkeletron } from "./Skeletron";

import { Container, FrameCard, IndicatorContainer } from "./styles";

const CardFrame: React.FC = () => {

  const [products, setProducts] = useState<Array<productData>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    getDataFromDB()
    })

    return unsubscribe;
  }, [navigation])

  async function getDataFromDB() {
    setIsLoading(true)
    const productsDB = await getProduct.getProductFromDB()

    if (productsDB){
      setProducts(productsDB)
      setIsLoading(false)
    } 
  }

  // const getDataFromDB = () => {
  //   let productList = [];
  //   for (let index = 0; index < CardData.length; index++){
  //     productList.push(CardData[index])
  //   }

  //   setProducts(productList)
  // }
  
  return(
    <Container>
      {products.length === 0 ? 
        <CardFrameSkeletron/>
      :
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FrameCard>
              <Card 
                onPress={() => navigation.navigate("ProductDetail",  { productID: item.id } )}
                price={item.price.toFixed(2).replace(".", ",")}
                title={item.title}
                starRating={item.starRating}
                imageSource={item.imageSource}
                amountRating={item.amountRating}
                isLoading={false}
                />
          </FrameCard>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      }
            <IndicatorContainer>
              <Button
                onPress={() => {} }
                variant="indicator"
                iconName="chevron-forward-outline"
                disabled={true}
              />
            </IndicatorContainer>
    </Container>
  )
}

interface CardFrameSmallProps {
  horizontal: boolean; 
  isDoubleCardShow?: boolean;

};

const CardFrameSmall: React.FC<CardFrameSmallProps> = ({ horizontal, isDoubleCardShow }) => {

  const [products, setProducts] = useState<Array<productData>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    getDataFromDB();
    });

    return unsubscribe;
  }, [navigation])

  async function getDataFromDB() {
    setIsLoading(true);
    const productsDB = await getProduct.getProductFromDB();

    if (productsDB){
      setProducts(productsDB);
      setIsLoading(false);
    } 
  }

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //   getDataFromDB();
  //   });

  //   return unsubscribe;
  // }, [navigation])

  // const getDataFromDB = () => {
  //   let productList = [];
  //   for (let index = 0; index < CardData.length; index++){
  //     productList.push(CardData[index])
  //   }

  //   setProducts(productList)
  // }

  return(
    <Container>
      {products.length === 0 ?
      <CardFrameSmallSkeletron
        horizontal
      />
      
      :

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FrameCard>
              <CardSmall 
                onPress={() => navigation.navigate("ProductDetail",  { productID: item.id } )}
                title={item.title}
                price={item.price.toFixed(2).replace(".", ",")}
                starRating={item.starRating}
                imageSource={item.imageSource}
                isLoading={false}
                />
                {isDoubleCardShow && (
                  <CardSmall 
                  onPress={() => navigation.navigate("ProductDetail",  { productID: item.id } )}
                  title={item.title}
                  price={item.price.toFixed(2).replace(".", ",")}
                  starRating={item.starRating}
                  imageSource={item.imageSource}
                  isLoading={false}
                  />
                )}
          </FrameCard>
        )}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        />
      }
    </Container>
  )
}

export { CardFrame, CardFrameSmall };