import React, { useState } from "react";
import { SafeAreaView } from 'react-native';
import {Container, ContentHeader, Title, SetCard, CardOrder, SetName, SetImage} from  './styles'

const CardThin: React.FC = () => {

    return(
        <SafeAreaView>
            <Container>
                <SetCard>
                    <CardOrder>
                        <SetImage source={require('../../Imagens/DipironaMonoidratada.jpg')}></SetImage>
                        <SetName>Dipirona</SetName>
                    </CardOrder>
                </SetCard>
            </Container>
        </SafeAreaView>
    );
}

export {CardThin};