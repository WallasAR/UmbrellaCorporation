import React from "react";
import { View, StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";
import COLORS from "./src/styles/theme";

import { Marketplace } from "./src/screens/Marketplace/Marketplace";
import { Settings } from "./src/screens/Settings/Settings";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={COLORS}>
      <View>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
        <Marketplace/>
        {/* <Settings/> */}
      </View>
      </ThemeProvider>
  )
}

export default App; 