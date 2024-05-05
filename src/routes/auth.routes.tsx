import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Login } from "../../src/screens/Auth/Login/Login";
import { Register } from "../../src/screens/Auth/Register/Register";
import { RecoverPass } from "../../src/screens/Auth/RecoverPass/RecoverPass";

// Instância objeto
const { Navigator, Screen } = createNativeStackNavigator();

// Rotas não Autenticadas
export const AuthRoutes = () => {
  return (
    <Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
    >
      <Screen
        name="Login"
        component={ Login }
      /> 
      <Screen
        name="Register"
        component={Register}
      />

      <Screen
        name="RecoverPass"
        component={RecoverPass}
      />
    </Navigator>
  )
}
