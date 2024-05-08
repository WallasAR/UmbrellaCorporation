import React from "react";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Buttons/Button";
import { ButtonSocial } from "../../../components/ButtonSocial/ButtonSocial";

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
              <ButtonSocial 
                  widthSvg="25%"
                  heightSvg="50%"
                  title="Google" 
                  iconName="logo-google"
                  onPress={() => {console.log("oAuth2 with google Cloud")}}
                  uriSvg="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
                  />

                <ButtonSocial 
                  title="Instagram" 
                  linearGradientEnabled
                  Color1={COLORS.IYELLOW}
                  Color2={COLORS.IPINK}
                  Color3={COLORS.IPURPLE}
                  Color4={COLORS.IBERRY}
                  iconName="logo-instagram" 
                  onPress={() => {console.log("check https://www.npmjs.com/package/react-native-instagram-login")}}
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