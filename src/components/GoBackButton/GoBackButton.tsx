import React from "react";
import { TouchableOpacity } from "react-native";

import { Container, Circle, Arrow } from "./styles"; 

const GoBackButton: React.FC = () =>{
    return(
        <TouchableOpacity onPress={() => {console.log("Botão pressionado!"); }}>
            <Container>
                <Circle>
                    <Arrow name='chevron-back-outline'></Arrow>
                </Circle>
            </Container>
        </TouchableOpacity>
    );
}
export {GoBackButton};