import React from "react";
import { useTheme } from "styled-components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../../src/screens/Auth/Login/Login";
import { Register } from "../../src/screens/Auth/Register/Register";
import { RecoverPass } from "../../src/screens/Auth/RecoverPass/RecoverPass";

// Instância objeto
const { Navigator, Screen } = createNativeStackNavigator();

// Rotas não Autenticadas
export const AuthRoutes = () => {
  const { COLORS } = useTheme();

  return (
    <Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          navigationBarColor: COLORS.WHITE,
          animation: "ios",
          statusBarAnimation: "slide",
          animationTypeForReplace: "push"
        }}
    >
      <Screen
        name="Login"
        component={ Login }
      />
      <Screen
        name="Register"
        component={ Register }
      />

      <Screen
        name="RecoverPass"
        component={ RecoverPass }
      />
    </Navigator> 
  )
}
