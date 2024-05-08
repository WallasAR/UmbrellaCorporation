import React from "react";

import { GoBackButton } from "../../../components/GoBackButton/GoBackButton";
import { SettingsButton } from "../../../components/SettingsButtons/SettingsButton";

import { Container, Header, Main, Footer, Avatar, Username, ViewFooter, IconButton, Icon, Title  } from "./styles";
import { TouchableOpacity } from "react-native";

const Profile: React.FC = () => {
  return(
    <Container>
      <GoBackButton/>
      <Header>
        <Avatar
          source={{ uri: "http://github.com/WallasAR.png" }}
        >
        </Avatar>
        <Username>War</Username>
      </Header>
      <Main>
        <SettingsButton
          name="Conta Conectada"
          info="wallasarprofissional@gmail.com"
          onPress={() => {console.log("Ir para tela ConfigInfo")}}
        /> 
        <SettingsButton
          name="Privacidade e Segurança"
          onPress={() => {console.log("Ir para tela ChangePass")}}
        />
      </Main>
      <Footer>
        <ViewFooter>
          <TouchableOpacity>
            <IconButton>
              <Icon
                name="exit-outline"
              />
            </IconButton>
          </TouchableOpacity>
          <Title>Sair</Title>
        </ViewFooter>

        <ViewFooter>
          <TouchableOpacity>
            <IconButton>
              <Icon
                name="trash-outline" 
              />
            </IconButton>
          </TouchableOpacity>
          <Title>Excluir conta</Title>
        </ViewFooter>
      </Footer>
    </Container>
  )
};

export { Profile };