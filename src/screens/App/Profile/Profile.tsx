import React from "react";
import { useModal } from "../../../hooks/Modal";
import { useNavigation } from "@react-navigation/native";

import { Msg } from "../../../components/Msg/Msg";
import { GoBackButton } from "../../../components/GoBackButton/GoBackButton";
import { SettingsButton } from "../../../components/SettingsButtons/SettingsButton";

import { Container, Header, Main, Footer, Avatar, Username, ViewFooter, IconButton, Icon, Title  } from "./styles";
import { TouchableOpacity } from "react-native";

const Profile: React.FC = () => {

  const { isActive, toggleModal } = useModal();
  const { isActive: isActive2, toggleModal: toggleModal2 } = useModal();

  const navigation = useNavigation();


  const handleToLogin = () => {
    navigation.navigate("Login")
  };

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
          <TouchableOpacity activeOpacity={0.8} accessibilityRole="button" onPress={toggleModal2}>
            <Msg
              showMoreButtons
              buttonRight="Sair"
              isActive={isActive2}
              header="Sair da conta"
              toggleModal={toggleModal2}
              buttonLeft="Cancelar"
              description="Deseja sair dessa conta?"
              onPressLeft={toggleModal2}
              onPressRight={handleToLogin}
            />
            <IconButton>
              <Icon
                name="exit-outline"
              />
            </IconButton>
          </TouchableOpacity>
          <Title>Sair</Title>
        </ViewFooter>

        <ViewFooter>
          <TouchableOpacity activeOpacity={0.8} accessibilityRole="button" onPress={toggleModal}>
            <Msg 
              showPass  
              showMoreButtons
              isActive={isActive}
              buttonRight="Excluir"
              buttonLeft="Cancelar"
              header="Excluir conta"
              toggleModal={toggleModal}
              description="Essa ação não pode ser desfeita. Continuar mesmo assim?"
              onPressLeft={toggleModal}
              onPressRight={handleToLogin}
            />
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