import React from "react";
import { SafeAreaView } from "react-native";
import {Container, ContentHeader, Title, SetCard, CardOrder, OrderText} from  './style'

export const OrderHistory: React.FC = () => {
    return(
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Pedidos</Title>
                </ContentHeader>
                <SetCard>
                    <CardOrder></CardOrder>
                </SetCard>
            </Container>
        </SafeAreaView>
    );
}


