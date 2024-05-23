import React from "react";
import { StatusBar } from "react-native";

import { Container, Title } from "./styles"; 
import { GoBackButton } from "../GoBackButton/GoBackButton";
import { useTheme } from "styled-components";

interface HeaderProps {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) =>{
  const { COLORS } = useTheme();

    return(
        <Container>
        <StatusBar translucent={false} backgroundColor={COLORS.RED1} barStyle="light-content" animated showHideTransition="slide"/>
        <GoBackButton
          color={COLORS.WHITE}
        />
        <Title>{title}</Title>
        </Container>

    );
}
export { Header };