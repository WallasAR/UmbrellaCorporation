import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../../components/Buttons/Button";
import { Link } from "../../../components/Link/Link"

import { Container, Header, Status, Main, Footer, ConfirmedAnimation, NavLinkContainer } from "./styles";
import { useTheme } from "styled-components";

const Comprovant: React.FC = () => {
  const { COLORS } = useTheme();
 
  const navigation = useNavigation();

  const handleToOrderHystory = () => {
    navigation.navigate("OrderHystory")
  };

  return (
    <Container>
      <NavLinkContainer>
      <Link
        linkText="Ir para pedidos"
        linkColor={COLORS.GREEN}
        onPress={handleToOrderHystory}
      />
      </NavLinkContainer>
      <Header>
        <Status>Transação realizada com sucesso!</Status>
      </Header>
      <Main>
      <ConfirmedAnimation
        autoPlay
        loop={false}
        source={require("../../../assets/animations/Confirmed.json")}
      />
      </Main>
      <Footer>
        <Link
          underline
          linkText="Acessar comprovante"
          linkColor={COLORS.GREEN}
          onPress={() => {console.log("Acesso ao comprovante provido por serviço externo de pagamento! Se preciso, criar nova tela apenas para visualização do comprovante")}}
        />
      </Footer>
    </Container>
  )
};

export { Comprovant };