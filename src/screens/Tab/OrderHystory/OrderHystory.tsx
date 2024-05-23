import React, { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

import { CardSmall } from "../../../components/Card/Small/CardSmall";

import { Container, Header, Title, SetDescription, ViewText, TotalInfoContainer, ViewDescription, FrameCard, Main } from "./styles";

const OrderHistory: React.FC = () => {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const translateY = useSharedValue(0);

  const handlePress = (index: number) => {
    const isExpanded = expandedIndex === index;
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    translateY.value = isExpanded ? withSpring(-5) : withSpring(5);
  };


  const OrderHistoryTest = [
    {
      id: "1",
      title: "Dipirona monoidratada 500Mg/mL",
      imageSource:"https://www.farmace.com.br/images/2019/05/18/dip-monoid-500mg,mL.png",
      price: "15,00",
      amount: "2",
      status: "Entregue",
      payment: "Pago",
      paymentMethod: "Cartão de debito",
    },
    {
      id: "2",
      title:"Cloridrato de ambroxol 100mL",
      imageSource:"https://www.farmace.com.br/images/2019/05/18/clorid-ambroxol-3mg,mL.png",
      price:"10,00",
      amount: "1",
      status: "Entregue",
      payment: "Pago",
      paymentMethod: "Pix",
    },
    {
      id: "3",
      title:"Dexametasona elixir 120mL",
      imageSource:"https://www.farmace.com.br/images/2023/05/08/dexam-elixir-01mgml.png",
      price:"18,50",
      amount: "4",
      status: "Preparando",
      payment: "Pendente",
      paymentMethod: "Dinheiro",
    },
    {
      id: "4",
      title:"Paracetamol 15mL",
      imageSource:"https://www.farmace.com.br/images/2019/05/18/paracetamol-200mg,mL.png",
      price:"21,00",
      amount: "3",
      status: "Saiu para entrega",
      payment: "Pago",
      paymentMethod: "Pix",
    },
    
  ];

  const descriptionStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <Title>Historico de Pedidos</Title>
        </Header>

        <Main>
          <FlatList
            data={OrderHistoryTest}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => (
              <TotalInfoContainer>
                <FrameCard>
                  <CardSmall
                    showRating={false}
                    price={item.price}
                    title={item.title}
                    onPress={() => handlePress(index)}
                    imageSource={item.imageSource}
                  />
                </FrameCard>
                {expandedIndex === index && (
                  <Animated.View style={[descriptionStyle]}>
                    <>
                    <ViewDescription>
                      <SetDescription>
                        <ViewText>Quantidade: {item.amount}</ViewText>
                      </SetDescription>
                      <SetDescription>
                        <ViewText>Status: {item.status}</ViewText>
                      </SetDescription>
                      <SetDescription>
                        <ViewText>Validação: {item.payment}</ViewText>
                      </SetDescription>
                      <SetDescription>
                        <ViewText>Forma de pagamento: {item.paymentMethod}</ViewText>
                      </SetDescription>
                    </ViewDescription>
                    </>
                  </Animated.View>
                )}
              </TotalInfoContainer>
            )}
          />
        </Main>
      </Container>
    </SafeAreaView>
  );
};

export { OrderHistory };
