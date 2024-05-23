import { StatusBar } from "react-native";
import React, { Dispatch, SetStateAction } from "react"

import changeNavigationBarColor from "react-native-navigation-bar-color"

import LottieView from "lottie-react-native";

import { Container } from "./styles"
import { useTheme } from "styled-components";

interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const Splash: React.FC<SplashProps> = ({ setIsLoading }) => {
  const { COLORS } = useTheme();

  changeNavigationBarColor(COLORS.RED1, false)
  return (
    
    <Container>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
      <LottieView
        source={require("../../../assets/animations/UmbrellaCorpSplash.json")}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => setIsLoading(false)}
        style={{ width: "30%", height: "30%" }}
      />
      
    </Container>
  )
}

export { Splash };