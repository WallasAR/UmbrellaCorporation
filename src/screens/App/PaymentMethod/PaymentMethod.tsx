import React from "react";

import { GoBackButton } from "../../components/GoBackButton/GoBackButton";
import { PaymentButton } from "../../components/PaymentButton/PaymentButton";

import { ClientDelivery, Text, Container, Header, Main, Footer, Title, ViewFooter, ViewButton } from "./styles";
import { TouchableOpacity } from "react-native";
import { SettingsButton } from "../../components/SettingsButtons/SettingsButton";
import { Button } from "../../components/Button";

const Login: React.FC = () => {
  return(
    <Container>
      <TouchableOpacity>
        <GoBackButton/>
      </TouchableOpacity>
      <Header>
        <Title>Informações</Title>
      </Header>
      <Main>
        <Text>Forma de Pagamento</Text>
        <TouchableOpacity>
          <SettingsButton
            name="Dinheiro"
            icon="cash-outline"
            onPress={() => {}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <SettingsButton
            name="Pix"
            icon="qr-code-outline"
            onPress={() => {}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <SettingsButton
            name="Cartão"
            icon="card-outline"
            onPress={() => {}}
          />
        </TouchableOpacity>
        <Text>Método de Recebimento</Text>
      </Main>
      <Footer>
        <ViewFooter>
            <Button
              title="Pegar no Estabelecimento"
              onPress={() => {}}
              variant="paymentChoice"
            />

            <Button
              title="Delivery"
              onPress={() => {}}
              variant="paymentChoice"

            /> 

        </ViewFooter>
        <ClientDelivery> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nemo error, cum inventore hic consequuntur tempore adipisci omnis veniam aperiam similique at rerum illum, molestias provident voluptatibus ducimus ex necessitatibus!
        </ClientDelivery>
            <ViewButton>

              <Button
                title="Confirmar"
                onPress={() => {}}
                variant="purchase"
              /> 
            </ViewButton>
      </Footer>
    </Container>
  )
};

export { Login };
