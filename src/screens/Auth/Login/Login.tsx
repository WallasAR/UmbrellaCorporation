import React from "react";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, KeyboardAvoidingView } from "react-native";

import { Input } from "../../../components/Input/Input"
import { Button } from "../../../components/Buttons/Button";

import { 
  Container, 
  Header, 
  Main, 
  Footer, 
  Title, 
  Description, 
  ViewButton, 
  SignUpContainer, 
  Label, 
  Link, 
  ForgotPassContainer 
} from "./styles";


const Login: React.FC = () => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  const handleGoToRegister = () => {
    navigation.navigate("Register")
  };

  const handleRecoverPass = () => { 
    navigation.navigate("RecoverPass")
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <SafeAreaView>
        <Container>
          <Header>
            {/* Task pendente: criar linear gradient em "Umbrella Corp." */}
            <Title>É bom vê-lo novamente {"\n"}Umbrella Corp.</Title>

            <Description>Entrar com</Description>

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
              autoCorrect={false}   
              autoCapitalize="none"   
              placeholder="E-mail"
              keyboardType="default"
              iconName="mail-outline"
              iconColor={COLORS.GRAY4}    
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
            iconColor={COLORS.GRAY4}   
          />

          <ForgotPassContainer>
            <Button
              title="Esqueceu sua senha?"
              variant="transparent"
              onPress={handleRecoverPass}
            />
          </ForgotPassContainer>

          </Main>

          <Footer>
            <Button
              title="Entrar" 
              variant="primary"
              onPress={() => {console.log("Botão funcional")} }
            />
            <SignUpContainer onPress={handleGoToRegister}>
              <Label>Ainda não têm uma conta?</Label>
              <Link>Registre-se</Link>
            </SignUpContainer>
          </Footer>
        </Container>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export { Login };
