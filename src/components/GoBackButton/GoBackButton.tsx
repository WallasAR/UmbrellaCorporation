import React from "react";
import { Container, BackButton } from "./styles"; 
import { TouchableNativeFeedback } from "react-native";

const GoBackButton: React.FC = () =>{
    return(
        <Container>
            <BackButton name='arrow-left'></BackButton>
        </Container>
    );
}
export {GoBackButton};