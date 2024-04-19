import React from "react";
import {OptionsContainer, ConfigName, IconArrow, IconStyle, ContainerIcon } from './style.ts'
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
    icon?: string;
    name: string;
    
  }

const SettingsButton: React.FC<Props> = ({ icon, name }) => {
    return(
        <OptionsContainer>
            <ContainerIcon>
                <IconStyle name={icon}/>
            </ContainerIcon>
            <ConfigName>{name}</ConfigName>
            <IconArrow name='keyboard-arrow-right'></IconArrow>
        </OptionsContainer>
    );
}   

export { SettingsButton };