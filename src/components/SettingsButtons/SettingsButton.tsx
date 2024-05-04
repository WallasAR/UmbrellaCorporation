import React from "react";
import { TouchableOpacity } from "react-native"; 

import {OptionsContainer, ConfigName, IconArrow, IconStyle, ContainerIcon } from './style.ts'

interface Props {
    icon?: string;
    name: string;
    onPress: () => void;
  };

const SettingsButton: React.FC<Props> = ({ icon, name, onPress }) => {
    return(
        <TouchableOpacity activeOpacity={0.8} accessibilityRole="button" onPress={onPress}>
            <OptionsContainer>
                <ContainerIcon>
                    <IconStyle name={icon}/>
                </ContainerIcon>
                <ConfigName>{name}</ConfigName>
                <IconArrow name='keyboard-arrow-right'></IconArrow>
            </OptionsContainer>
        </TouchableOpacity>
    );
}   

export { SettingsButton };