import { useTheme } from "styled-components";
import React, { useEffect, useRef, useState } from "react"
import { FlatList, View, Dimensions } from "react-native";
import Animated, { LinearTransition, FadeInLeft, FadeOutRight } from "react-native-reanimated";

import { Container, Img, DotContainer } from "./styles"


const Carousel: React.FC = () => {
  const { COLORS } = useTheme()

  // Pegar dimensões do dispositivo
  const screenWidth = Dimensions.get("window").width;
  // Estado ativação do banner
  const [activeBanner, setActiveBanner] = useState<number>(0);
  // referencia para scroll auto
  const FlatListRef = useRef<FlatList>(null);

  // setando valor do estado para o index atual
  const onViewableItemsChanged = ({ viewableItems }: any ) => {
    if (viewableItems[0] !== undefined){
      setActiveBanner(viewableItems[0]?.index);
    }
  };
   
  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged,
    }
  ])
  // Mudança de banner
  useEffect(() => {
  let interval = setInterval(() => {
    if (activeBanner === carouselData.length - 1) {
      FlatListRef.current?.scrollToIndex({
        index: 0,
        animated: true
      })
    } else {
      FlatListRef.current?.scrollToIndex({
        index: activeBanner + 1,
        animated: true
      });
    }    
  }, 5000)

  return () => clearInterval(interval)
  });

  // Dados
  const carouselData = [
    {
      id: "1",
      image: "https://img.freepik.com/premium-vector/landing-page-pharmacy-website-concept-medicine-health-vector-illustration_414360-2592.jpg",
    },
    {
      id: "2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6fwBx8c9phI1CAFqvC1k7HQJSIxDB0PLgKQasSRKgw&s",
    },
    {
      id: "3",
      image: "https://cdn3.vectorstock.com/i/1000x1000/36/27/medicine-brand-discount-banner-vector-29233627.jpg",
    },
  ];

  return (
    <>
      <Container>
      <FlatList
          ref={FlatListRef}
          data={carouselData}
          viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
          keyExtractor={( item, index ) => String(index)}
          renderItem={({ item, index }) => (
            <View>
              <Img 
                source={{ uri: item.image }}
                style={{ width: screenWidth }}
                />
            </View>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
      />
    </Container>

    {/* Render dot */}
    <DotContainer>
      <FlatList
          data={carouselData}
          viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
          keyExtractor={( item, index ) => String(index)}
          renderItem={({ item, index }) => (
            <View style={{ padding: 5 }}>
              <Animated.View
              layout={LinearTransition}
              entering={FadeInLeft}
              exiting={FadeOutRight} 
                style={{ 
                  backgroundColor: activeBanner === index ? COLORS.YELLOW : COLORS.GRAY,
                  width: activeBanner === index ? 20 : 10,
                  height: 8,
                  borderRadius: 5,
                  marginHorizontal: 1,
                }}/>
            </View>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
      />
    </DotContainer>
    </>
  )
}

export { Carousel };