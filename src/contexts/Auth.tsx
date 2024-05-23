import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Alert } from "../components/Alert/Alert";

import { ToastAndroid } from "react-native";
import { authService } from "../services/authService";
import { useTheme } from "styled-components";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthData {
  token: string;
  email: string;
  name: string;
};

interface AuthContextData {
  loading: boolean;
  authData?: AuthData;
  signOut: () => Promise<void>;
  signIn: (email: string, pass: string) => Promise<AuthData | undefined | Element>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

 const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  
  const { COLORS } = useTheme();

  // States de autenticação e loading
  const [authData, setAuth] = useState<AuthData>();
  const [loading, setLoading] = useState(true);
  // States de alerta
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertProps, setAlertProps] = useState({ title: "", iconName: "", backgroundColor: "" });

  const showAlert = (title: string, iconName: string, backgroundColor: string) => {
    setAlertProps({ title, iconName, backgroundColor });
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 4000);
  }


  useEffect(() => {
    loadFromStorage();
  }, [])

  async function loadFromStorage(){
    const auth = await AsyncStorage.getItem("@AuthData");
    if (auth){
      setAuth(JSON.parse(auth) as AuthData);
    }
    setLoading(false)
  }

  async function signIn(email: string, pass: string) {
    try {
      const auth = await authService.signIn(email, pass)
      setAuth(auth);

      AsyncStorage.setItem("@AuthData", JSON.stringify(auth))

      return auth;

    } catch (error: any) {
      // Exibe o alerta de erro
      showAlert(error.toString(), "close-circle", COLORS.RED3 );

      // ToastAndroid.show(
      //   error.toString(),
      //   ToastAndroid.SHORT
      // )
    }
  };

  async function signOut(): Promise<void> {
    setAuth(undefined);
    AsyncStorage.removeItem("@AuthData");

     // Exibe o alerta de logout
     showAlert("Logout realizado com sucesso", "checkmark-done-circle", COLORS.GREEN );

     setAlertVisible(true);

     return;
  };

  return(
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
      {alertVisible && (
        <Alert 
          title={alertProps.title} 
          iconName={alertProps.iconName} 
          backgroundColor={alertProps.backgroundColor} 
        />
      )}

    </AuthContext.Provider>
  )
};

export function useAuth(){
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider };
