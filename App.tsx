import React from "react";
import { View, StatusBar, Text } from "react-native";

const App: React.FC = () => {

  return (
      <View >
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
        <Text>UmbrellaCorp. Project</Text>
      </View>
  )
}

export default App; 