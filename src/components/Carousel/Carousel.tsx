import { useTheme } from "styled-components";
import React, { useEffect, useRef, useState } from "react"
import { FlatList, View, Dimensions } from "react-native";
import Animated, { LinearTransition, FadeInLeft, FadeOutRight } from "react-native-reanimated";

import { Container, Img, DotContainer } from "./styles"


const Carousel: React.FC = () => {
  const { COLORS } = useTheme();

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
      image: "https://lh3.googleusercontent.com/pw/AP1GczPbRKW2DIpqFb_Xz1EDfqrED30MwAXqwwh1zRxDHRJx0ozYCDRAsSMmSJkqIIDB5qhViiorO_ibIcaHXWOrBa0W15_Bl5g-cnzmSVXCw7cdGqiy6BevkdBhX0-oC-SAH6JLnhPeAuiNYhRdFNq-kwFT=w1300-h700-s-no-gm?authuser=0",
    },
    {
      id: "2",
      image: "https://lh3.googleusercontent.com/pw/AP1GczOexXMDrmIwIb06AL7uRE45gIUbIwMtZLa15oaex6ar7RQ2Q1rCoRPaA9Ssw3B68N0CeOWuLjZAwSNYpA0wT5-swlrNCAuasxanSb842pKjJjRKHr-JkkTEVlZ20dXGJx9S_AsJSbdcQyiMblvrPyw9=w1300-h700-s-no-gm?authuser=0",
    },
    {
      id: "3",
      image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/03/resident-evil-raccoon-city-header.jpg",
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