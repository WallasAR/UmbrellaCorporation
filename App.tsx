import React from "react";
import { View, StatusBar } from "react-native";

import { Routes } from "./src/routes"
import { AuthProvider } from "./src/contexts/Auth";

import theme from "./src/styles/theme";
import { ThemeProvider } from "styled-components/native";

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent={false} backgroundColor={theme.COLORS.WHITE} barStyle="dark-content"/>
        <View style={{ flex: 1 }}>
          <AuthProvider>
            <Routes/>
          </AuthProvider>
        </View>
      </ThemeProvider>
  );
};

export default App;



      