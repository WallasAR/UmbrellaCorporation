import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabRoutes } from "./tab.routes";
import { MarketplaceProduct } from "../screens/App/MarketplaceProduct/MarketplaceProduct";

const { Navigator, Screen } = createNativeStackNavigator();

// Rotas Autenticadas
export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="TabRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
          name="TabRoutes"
          component={TabRoutes}
      />

      <Screen
        name="ProductDetail"
        component={MarketplaceProduct}
      />
      
    </Navigator>
  )
}