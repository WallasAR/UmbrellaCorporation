import React from "react"
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons"
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Buttons/Button";
import { Alert } from "react-native";
import { Container, Header, Title, Description, Main, Footer, LinkContainer, Link } from "./styles" 

const RecoverPass: React.FC = () => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  
  const handleGoToLogin = () => {
    navigation.navigate("Login")
  }

  return (
    <Container>
      <LinkContainer onPress={handleGoToLogin}>
        <Link>Voltar</Link>
      </LinkContainer>
      <Header>
        <Icon
          size={90}
          name="alert-circle-outline"
          color={COLORS.BLACK}
        />
        <Title>Problemas para entrar?</Title>
        
        <Description>Enviaremos um email com instruções de como redefinir sua senha.</Description>
      </Header>

      <Main>
        <Input
          leftIcon 
          iconSize={32}
          autoCorrect={false}   
          placeholder="E-mail"
          autoCapitalize="none"   
          keyboardType="default"
          iconName="mail-outline"
          iconColor={COLORS.GRAY4}    
        />

        <Button
          title="Enviar" 
          variant="primary"
          onPress={() => {Alert.alert( "Confirmação" ,"Um email será enviado para")} }
          style={{ width: "90%", height: 40, borderRadius: 10  }}
        />
      </Main>
      <Footer>
        <Description>Ainda enfrentando problemas? Entre em contato com a gente</Description>
        <Description>SAC: 0800 357 125</Description>
      </Footer>
    </Container>
  )
};

export { RecoverPass };