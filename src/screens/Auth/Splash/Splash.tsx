import React, { Dispatch, SetStateAction } from "react"
import { Container } from "./styles"
import LottieView from "lottie-react-native";

interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Splash: React.FC<SplashProps> = ({ setIsLoading }) => {
  return (
    <Container>
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