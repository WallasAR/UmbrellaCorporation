import React from "react";

import {Container, OptionsContainer, ConfigName, IconArrow, IconStyle, ViewRight, Info } from './styles.ts'

interface Props {
    icon?: string;
    name: string;
    info?: string;
    onPress: () => void;
  };

const SettingsButton: React.FC<Props> = ({ icon, name, info, onPress }) => {
    return(
        <Container activeOpacity={0.8} accessibilityRole="button" onPress={onPress}>
            <OptionsContainer>
                <IconStyle name={icon}/>
                <ViewRight>
                    <ConfigName>{name}</ConfigName>
                    <Info>{info}</Info>
                    <IconArrow name="chevron-forward-outline"/>
                </ViewRight>
            </OptionsContainer>
        </Container>
    );
};   

export { SettingsButton };