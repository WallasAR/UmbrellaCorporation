import React from "react";
import { View, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

import { Routes } from "./src/routes"

import theme from "./src/styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
        <View style={{ flex: 1 }}>
          <Routes/>
        </View>
      </NavigationContainer>
      </ThemeProvider>
  );
};

export default App;