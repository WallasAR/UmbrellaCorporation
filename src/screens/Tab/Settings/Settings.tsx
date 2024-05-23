import React from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header, Title, Main, Container } from './styles.ts'
import { SettingsButton } from "../../../components/SettingsButtons/SettingsButton.tsx";
import { GoBackButton } from "../../../components/GoBackButton/GoBackButton.tsx";

const Settings: React.FC = () => {
    const navigation = useNavigation();

    const handleToProfile = () => {
        navigation.navigate("Profile")
    };

    const handleToLang = () => {
        navigation.navigate("Language")
    };

    return(
        <SafeAreaView>
            <Container>
                    
                <Header>
                    <Title>Configurações</Title>
                </Header>
                
                <Main>
                    <SettingsButton 
                        icon="person-outline"
                        name="Perfil"
                        onPress={handleToProfile}
                    />

                    <SettingsButton 
                        icon="notifications-outline"
                        name="Notificações"
                        onPress={() => {console.log("botão funcional")}}
                    />

                    <SettingsButton 
                        icon="language-outline"
                        name="Idioma"
                        onPress={handleToLang}
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