import React from "react";

import { Container, Label, Content, Header, Title } from "./styles";
import { SettingsButton } from "../../../components/SettingsButtons/SettingsButton";
import { Header as HeaderTop } from "../../../components/Header/Header";

const Language: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTop
          title="Idioma"
        />
      </Header>
      <Content>
        <Label>Idioma padrão</Label>
        <SettingsButton
          name="Português (Brasil)"
          onPress={() => {}}
        />

        <Label>Outros idiomas</Label>
        <SettingsButton
          name="English"
          onPress={() => {}}
        />
        <SettingsButton
          name="Español"
          onPress={() => {}}
          
        />
      </Content>
    </Container>
  )
}

export { Language };