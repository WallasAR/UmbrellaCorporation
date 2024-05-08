import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Circle, Arrow } from "./styles"; 

const GoBackButton: React.FC = () =>{
    const navigation = useNavigation();

    return(
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <Container>
                <Circle>
                    <Arrow name="chevron-back-outline"></Arrow>
                </Circle>
            </Container>
        </TouchableOpacity>
    );
}
export {GoBackButton};