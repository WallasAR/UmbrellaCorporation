import React from "react";
import { useTheme } from "styled-components";
import { useModal } from "../../../hooks/Modal";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../contexts/Auth";


import { Msg } from "../../../components/Msg/Msg";
import { GoBackButton } from "../../../components/GoBackButton/GoBackButton";
import { SettingsButton } from "../../../components/SettingsButtons/SettingsButton";

import { Container, Header, Main, Footer, Avatar, Username, ViewFooter, IconButton, Icon, Title, GoBackContent  } from "./styles";
import { TouchableOpacity } from "react-native";

const Profile: React.FC = () => {
  const { COLORS } = useTheme();

  const { signOut } = useAuth();

  const { isActive, toggleModal } = useModal();
  const { isActive: isActive2, toggleModal: toggleModal2 } = useModal();

  return(
    <Container>
      <GoBackContent>
        <GoBackButton
          color={COLORS.RED1}
        />
      </GoBackContent>
      <Header>
        <Avatar
          source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }}
        >
        </Avatar>
        <Username>user</Username>
      </Header>
      <Main>
        <SettingsButton
          name="Conta Conectada"
          info="user@gmail.com" // passar parametro do auth
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
              buttonLeft="Cancelar"
              header="Sair da conta"
              onPressRight={signOut}
              toggleModal={toggleModal2}
              onPressLeft={toggleModal2}
              description="Deseja sair dessa conta?"
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
              onPressRight={signOut}
            />
            <IconButton>
              <Icon
                name="trash-outline" 
              />
            </IconButton>
          </TouchableOpacity>
          <Title>Excluir {"\n"} conta</Title>
        </ViewFooter>
      </Footer>
    </Container>
  )
};

export { Profile };