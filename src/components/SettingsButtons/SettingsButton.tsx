import React from "react";
import { SafeAreaView } from "react-native";
import {Container,  ContentHeader, TextLogout, IconStyleLogout, ContentFooter, Title, OptionsContainer, IconPerfil, ConfigName, IconArrow, IconStyle, IconNotification, IconIdioma, IconSecurity, IconSac, LogoutButton, IconLogout} from './style.ts'
import { GoBackButton } from "../GoBackButton/GoBackButton.tsx";
import { TouchableNativeFeedback } from "react-native";

const SettingsButton: React.FC = () => {
    return(
        <SafeAreaView>
            <Container>
                <GoBackButton></GoBackButton>
                <ContentHeader>
                    <Title>Configurações</Title>
                </ContentHeader>

                <TouchableNativeFeedback>
                <OptionsContainer>
                    <IconStyle>
                        <IconPerfil name='user'></IconPerfil>
                    </IconStyle>
                    <ConfigName>Perfil</ConfigName>
                    <IconArrow name='keyboard-arrow-right'></IconArrow>
                </OptionsContainer>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback>
                <OptionsContainer>
                    <IconStyle>
                        <IconNotification name='bell'></IconNotification>
                    </IconStyle>
                    <ConfigName>Notificações</ConfigName>
                    <IconArrow name='keyboard-arrow-right'></IconArrow>
                </OptionsContainer>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback>
                <OptionsContainer>
                    <IconStyle>
                        <IconIdioma name='language'></IconIdioma>
                    </IconStyle>
                    <ConfigName>Idioma</ConfigName>
                    <IconArrow name='keyboard-arrow-right'></IconArrow>
                </OptionsContainer>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback>
                <OptionsContainer>
                    <IconStyle>
                        <IconSac name='contact-support'></IconSac>
                    </IconStyle>
                    <ConfigName>SAC</ConfigName>
                    <IconArrow name='keyboard-arrow-right'></IconArrow>
                </OptionsContainer>
                </TouchableNativeFeedback>
            </Container>
        </SafeAreaView>
    );
}   

export default SettingsButton;