import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";

import { ContentHeader, Title, ContainerButtons } from './styles.ts'
import { SettingsButton } from "../../components/SettingsButtons/SettingsButton";
import { GoBackButton } from "../../components/GoBackButton/GoBackButton.tsx";

const Settings: React.FC = () => {
    return(
        <SafeAreaView>
            <GoBackButton/>
            <ContentHeader>
                <Title>Configurações</Title>
            </ContentHeader>
            
                <ContainerButtons>
                    <TouchableOpacity activeOpacity={0.8} accessibilityRole="button">
                        <SettingsButton 
                            icon="person"
                            name="Perfil"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} accessibilityRole="button">
                        <SettingsButton 
                            icon="notifications"
                            name="Notificações"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} accessibilityRole="button">
                        <SettingsButton 
                            icon="language"
                            name="Idioma"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} accessibilityRole="button">
                        <SettingsButton 
                            icon="chatbubble"
                            name="SAC"
                        />
                    </TouchableOpacity>
                </ContainerButtons>
        </SafeAreaView>
    );
}

export { Settings };