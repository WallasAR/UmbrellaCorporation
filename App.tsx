import React from "react";
import { View, StatusBar, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import COLORS from "./src/styles/theme";
import { Marketplace } from "./src/screens/Marketplace/Marketplace";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={COLORS}>
      <View>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
        <Marketplace/>
      </View>
      </ThemeProvider>
  )
}

export default App; 