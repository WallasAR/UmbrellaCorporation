import React, { useEffect } from "react";
import { Container, Content, Icon, Title } from "./styles";

import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from "react-native-reanimated";

interface AlertProps {
  title: string;
  iconName: string;
  backgroundColor: string;
};

const Alert: React.FC<AlertProps> = ({ backgroundColor, iconName, title }) => {

  const translateY = useSharedValue(100); // Valor inicial fora da tela

  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    });

    // Reseta a posição após 3 segundos
    setTimeout(() => {
      translateY.value = withTiming(100, {
        duration: 500,
        easing: Easing.in(Easing.exp),
      });
    }, 3000);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[animatedStyle]}>
    <Container>
      <Content style={{ backgroundColor: backgroundColor }}>
        <Icon name={iconName}/> 
        <Title>{title}</Title>
      </Content>
    </Container>
    </Animated.View>
  )
};

export { Alert };