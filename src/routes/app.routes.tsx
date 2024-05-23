import React from "react";
import { useTheme } from "styled-components";
import { createNativeStackNavigator,  } from "@react-navigation/native-stack";

import { TabRoutes } from "./tab.routes";
import { Profile } from "../screens/App/Profile/Profile";
import { Language } from "../screens/App/Language/Language";
import { Comprovant } from "../screens/App/Comprovant/Comprovant";
import { PaymentMethod } from "../screens/App/PaymentMethod/PaymentMethod";
import { MarketplaceProduct } from "../screens/App/MarketplaceProduct/MarketplaceProduct";

const { Navigator, Screen } = createNativeStackNavigator();

// Rotas Autenticadas
export const AppRoutes = () => {
  const { COLORS } = useTheme();

  return (
    <Navigator
      initialRouteName="TabRoutes"
      screenOptions={{
        headerShown: false,
        navigationBarColor: COLORS.WHITE,
        animation: "ios",
        statusBarAnimation: "slide",
        animationTypeForReplace: "push"
      }}
    >
      <Screen
          name="TabRoutes"
          component={ TabRoutes }
      />

      <Screen
        name="ProductDetail"
        component={ MarketplaceProduct }
      />

      <Screen
        name="Profile"
        component={ Profile }
      />

      <Screen
        name="PaymentMethod"
        component={ PaymentMethod }
      />

      <Screen
        name="Comprovant"
        component={ Comprovant }
      />

      <Screen
        name="Language"
        component={ Language }
      />
      
    </Navigator>
  )
}