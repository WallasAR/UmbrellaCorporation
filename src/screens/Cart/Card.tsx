import React from "react";
import { SafeAreaView, TouchableOpacity, View, ScrollView, Text } from "react-native";
import { ContentHeader, Title, Container, ViewButton, ContentFooter, ContentBody, Main } from "./styles";
import { CardItens } from "../../components/Card/CardItens/CardItens";
import { BuyButton } from "../../components/BuyButton/BuyButton";
import { Resume } from "../../components/Resume/Resume";
const Card: React.FC = () => {
    return(
    <SafeAreaView>
        <Container>
            <ContentHeader>
                <Title>Carrinho</Title>
            </ContentHeader>
            <ContentBody>
            <ScrollView>
                <CardItens />
            </ScrollView>
            </ContentBody>
            <ContentFooter>
            <TouchableOpacity activeOpacity={0.8} accessibilityRole="button">
                        <BuyButton />
                    </TouchableOpacity>
            </ContentFooter>
            <Resume />
        </Container>
    </SafeAreaView>
    );
}

export { Card } 