import React from "react";
import { SafeAreaView } from "react-native";

import { Header, Title, Main, Container, GoBackButtonContainer } from './styles.ts'
import { SettingsButton } from "../../../components/SettingsButtons/SettingsButton.tsx";
import { GoBackButton } from "../../../components/GoBackButton/GoBackButton.tsx";

const Settings: React.FC = () => {
    return(
        <SafeAreaView>
            <Container>
                <GoBackButtonContainer>
                    <GoBackButton/>
                </GoBackButtonContainer>
                
                <Header>
                    <Title>Configurações</Title>
                </Header>
                
                <Main>
                    <SettingsButton 
                        icon="person-outline"
                        name="Perfil"
                        onPress={() => {console.log("botão funcional")}}
                    />

                    <SettingsButton 
                        icon="notifications-outline"
                        name="Notificações"
                        onPress={() => {console.log("botão funcional")}}
                    />

                    <SettingsButton 
                        icon="language-outline"
                        name="Idioma"
                        onPress={() => {console.log("botão funcional")}}
                    />

                    <SettingsButton 
                        icon="chatbubble-outline"
                        name="SAC"
                        onPress={() => {console.log("botão funcional")}}
                    />
                </Main>
                </Container>
        </SafeAreaView>
    );
}

export { Settings };