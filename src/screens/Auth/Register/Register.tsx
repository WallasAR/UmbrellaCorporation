import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Buttons/Button";

import { Container, Header, Title, Description, Main, Footer, ViewButton, SignInContainer, Label, Link } from "./styles";

const Register: React.FC = () => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  
  const handleGoToLogin = () => {
    navigation.navigate("Login")
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <SafeAreaView>
        <Container>
          <Header>
            <Title>Crie sua conta e aproveite de seus benefícios!</Title>

            <Description>Registrar-se com</Description>
            <ViewButton>
                <Button
                  title="Google" 
                  iconName="logo-google"
                  variant="googleSocial"
                  onPress={() => {console.log("oAuth2 Google Cloud!")} }
                />
                <Button
                  title="Facebook" 
                  iconName="logo-facebook"
                  variant="facebookSocial"
                  onPress={() => {console.log(" Trocar para instagram e instalar api https://www.npmjs.com/package/react-native-instagram-login")} }
                />
              </ViewButton>

          </Header>

          <Main>
          <Input
              leftIcon 
              iconSize={32}
              placeholder="Nome"    
              autoCorrect={false}
              autoCapitalize="none"      
              keyboardType="default"
              iconName="person-circle-outline"
          />
          <Input
              leftIcon 
              iconSize={32}
              placeholder="Email"   
              autoCorrect={false}
              autoCapitalize="none"      
              keyboardType="default"       
              iconName="mail-outline"
          />
          <Input
              leftIcon 
              rightIcon
              iconSize={32}
              secureTextEntry
              autoCorrect={false}
              placeholder="Senha"          
              autoCapitalize="none"
              keyboardType="default"
              iconName="key-outline"
            />
          </Main>
          <Footer>
            <Button
                  title="Registrar" 
                  variant="primary"
                  onPress={() => {console.log("Botão funcional")} }
                />
                <SignInContainer onPress={handleGoToLogin}>
                  <Label>Já tem uma conta?</Label>
                  <Link>Entre</Link>
              </SignInContainer>
          </Footer>
        </Container>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export { Register };