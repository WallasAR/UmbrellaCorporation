import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Resume } from "../../../components/Resume/Resume";
import { Button } from "../../../components/Buttons/Button";
import { CardSmall } from "../../../components/Card/Small/CardSmall";

import { Container, Header, Title, Main, Footer, PurchaseResume } from "./styles";

const Cart: React.FC = () => {
  
  const navigation = useNavigation();

  const handleToPayment = () => {
    navigation.navigate("PaymentMethod")
  };

  const CartTest = [
        {
          id: "1",
          title: "Dipirona monoidratada 500Mg/mL",
          imageSource:"https://www.farmace.com.br/images/2019/05/18/dip-monoid-500mg,mL.png",
          price: "R$15,00",
          amount: "2",
          status: "Entregue",
          payment: "Pago",
          paymentMethod: "Cartão de debito",
        },
        {
          id: "2",
          title:"Cloridrato de ambroxol 100mL",
          imageSource:"https://www.farmace.com.br/images/2019/05/18/clorid-ambroxol-3mg,mL.png",
          price:"R$10,00",
          amount: "1",
          status: "Entregue",
          payment: "Pago",
          paymentMethod: "Pix",
        },
        {
          id: "3",
          title:"Dexametasona elixir 120mL",
          imageSource:"https://www.farmace.com.br/images/2023/05/08/dexam-elixir-01mgml.png",
          price:"R$18,50",
          amount: "4",
          status: "Preparando",
          payment: "Pendente",
          paymentMethod: "Dinheiro",
        },
        {
          id: "4",
          title:"Paracetamol 15mL",
          imageSource:"https://www.farmace.com.br/images/2019/05/18/paracetamol-200mg,mL.png",
          price:"R$21,00",
          amount: "3",
          status: "Saiu para entrega",
          payment: "Pago",
          paymentMethod: "Pix",
        },
        {
            id: "5",
            title:"Paracetamol 15mL",
            imageSource:"https://www.farmace.com.br/images/2019/05/18/paracetamol-200mg,mL.png",
            price:"R$21,00",
            amount: "3",
            status: "Saiu para entrega",
            payment: "Pago",
            paymentMethod: "Pix",
          },
          {
            id: "6",
            title:"Paracetamol 15mL",
            imageSource:"https://www.farmace.com.br/images/2019/05/18/paracetamol-200mg,mL.png",
            price:"R$21,00",
            amount: "3",
            status: "Saiu para entrega",
            payment: "Pago",
            paymentMethod: "Pix",
          },
          {
            id: "7",
            title:"Paracetamol 15mL",
            imageSource:"https://www.farmace.com.br/images/2019/05/18/paracetamol-200mg,mL.png",
            price:"R$21,00",
            amount: "3",
            status: "Saiu para entrega",
            payment: "Pago",
            paymentMethod: "Pix",
          },
          {
            id: "8",
            title:"Paracetamol 15mL",
            imageSource:"https://www.farmace.com.br/images/2019/05/18/paracetamol-200mg,mL.png",
            price:"R$21,00",
            amount: "3",
            status: "Saiu para entrega",
            payment: "Pago",
            paymentMethod: "Pix",
          },
        
  ];

  return(
  <SafeAreaView>
      <Container>
          <Header>
              <Title>Carrinho</Title>
          </Header>

          <Main>
            <FlatList
                data={CartTest}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => (
                <CardSmall
                  iconName={false}
                  price={item.price}
                  title={item.title}
                  onPress={() => {}}
                  imageSource={item.imageSource}   
                />
              )}
            />
          </Main>
          <Footer>
            <PurchaseResume>
              <Resume/>
              <Button
                title="Comprar"
                variant="purchase"
                onPress={handleToPayment}
              />
            </PurchaseResume>
          </Footer>  
      </Container>
    </SafeAreaView>
  );
}

export { Cart };