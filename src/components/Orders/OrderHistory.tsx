import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import {Container, ContentHeader, Title, SetDescription, SetCard, CardOrder, SetName, ViewText, SetImage, ViewDescription} from  './style'

export const OrderHistory: React.FC = () => {

    const [expanded, setExpanded] = useState(false);

    const handlePress = () =>{
        setExpanded(!expanded);
    }
    return(
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Pedidos</Title>
                </ContentHeader>
                <TouchableOpacity onPress={handlePress}>
                <SetCard>
                    <CardOrder>
                        <SetImage source={require('../../Imagens/DipironaMonoidratada.jpg')}></SetImage>
                        <SetName>Dipirona</SetName>
                    </CardOrder>
                </SetCard> 
                {expanded &&( 
                    <ViewDescription> 
                        <SetDescription>
                        <ViewText>Quantidade (2)</ViewText>
                        </SetDescription>
                        <SetDescription>
                        <ViewText>Status: Em rota de entrega</ViewText>
                        </SetDescription>
                        <SetDescription>
                        <ViewText>Validação: Pago</ViewText>
                        </SetDescription>
                    </ViewDescription>
                )}
                </TouchableOpacity>
            </Container>
        </SafeAreaView>
    );
}


