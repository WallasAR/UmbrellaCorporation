import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, KeyboardAvoidingView } from "react-native";

import { LinearGradient } from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { useAuth } from "../../../contexts/Auth";

import { Link } from "../../../components/Link/Link";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Buttons/Button";
import { ButtonSocial } from "../../../components/ButtonSocial/ButtonSocial";

import { 
  Container, 
  Header, 
  Main, 
  Footer, 
  Title, 
  Description, 
  ViewButton, 
  ForgotPassContainer 
} from "./styles";


const Login: React.FC = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

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
            <Title>É bom vê-lo novamente</Title>
            <MaskedView maskElement={
              <Title style={{ backgroundColor: "transparent" }}>Umbrella Corp.</Title>
            }>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[COLORS.RED1, COLORS.RED4]}
            >
              <Title style={{ opacity: 0 }}>Umbrella Corp.</Title>
            </LinearGradient>
            </MaskedView>

            <Description>Entrar com</Description>

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
              autoCorrect={false}   
              autoCapitalize="none"   
              placeholder="E-mail"
              keyboardType="default"
              iconName="mail-outline"
              iconColor={COLORS.GRAY4}    
              value={email}
              onChangeText={setEmail}
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
            value={pass}
            onChangeText={setPass}
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
              onPress={() => signIn(email, pass)}
            />
            <Link
              underline
              linkText="Registre-se"
              linkColor={COLORS.RED3}
              labelColor={COLORS.GRAY4}
              onPress={handleGoToRegister}
              label="Ainda não têm uma conta?"
            />
          </Footer>
        </Container>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export { Login };
