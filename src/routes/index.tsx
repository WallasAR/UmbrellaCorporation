import React from "react";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../contexts/Auth";
import { NavigationContainer } from "@react-navigation/native";

import { Splash } from "../screens/Auth/Splash/Splash";

// Rotas
export const Routes = () => {
  const { authData, loading } = useAuth();
  const [isLoading, setIsLoading] = React.useState<boolean>(loading);

  if(isLoading){
    return(
      <Splash setIsLoading={setIsLoading}/>
    ) 
  }
  return (
    <NavigationContainer>
      {authData ? 
      <AppRoutes/> : <AuthRoutes/>
      }
    </NavigationContainer>
  )
};