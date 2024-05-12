import React,{ useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { GoBackButton } from "../../../components/GoBackButton/GoBackButton";
import { PaymentOptions } from "../../../components/PaymentOptions/PaymentOptions";

import { Container, Header, Title, SubTitle, Main, Footer, ButtonContent  } from "./styles";
import { Button } from "../../../components/Buttons/Button";
import { ScrollView } from "react-native";

const PaymentMethod: React.FC = () => {
  const [choice, setChoice] = useState("");
  const [receivingMethodChoice, setReceivingMethodChoice] = useState("");
  
  const navigation = useNavigation();

  const handleToComprovant = () => {
    navigation.navigate("Comprovant")
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <GoBackButton/>
        <Header> 
          <Title>Informações{"\n"}adicionais</Title>
        </Header>
        <Main>
          <SubTitle>Forma de pagamento</SubTitle>

          <PaymentOptions
            name="Dinheiro"
            onPress={() => {}}
            icon="cash-outline"
            onChange={setChoice}
            checkedValue={choice}
            options={[{value: "Cash"}]}
          />  
          <PaymentOptions
            name="Pix"
            onPress={() => {}}
            onChange={setChoice}
            checkedValue={choice}
            icon="qr-code-outline"
            options={[{value: "Pix"}]}
          />  
          <PaymentOptions
            onPress={() => {}}
            onChange={setChoice}
            checkedValue={choice}
            icon="card-outline"
            name="Cartão de crédito/Debito"
            options={[{value: "Credit/Debit"}]}
          />  

          <SubTitle>Método de recebimento</SubTitle>
          <ButtonContent>
            <PaymentOptions
              onPress={() => {}}
              onChange={setReceivingMethodChoice}
              checkedValue={receivingMethodChoice}
              icon="map-outline"
              name="No estabelecimento"
              options={[{value: "Local"}]}
            />
            <PaymentOptions
            onPress={() => {}}
            onChange={setReceivingMethodChoice}
            checkedValue={receivingMethodChoice}
            icon="cube-outline"
            name="Delivery"
            options={[{value: "Delivery"}]}
            isDelivery
          />  
          </ButtonContent>
        </Main>
        <Footer>
          <Button
            title="Confirmar"
            variant="purchase"
            onPress={handleToComprovant}
          />
        </Footer>
      </ScrollView>
    </Container>
  )
}

export { PaymentMethod };