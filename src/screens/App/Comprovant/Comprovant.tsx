import React from "react";

import { GoBackButton } from "../../../components/GoBackButton/GoBackButton";

import { Container, Header, Status, Main, Icon, Footer, LinkContainer, Link } from "./styles";

const Comprovant: React.FC = () => {
  return (
    <Container>
      <GoBackButton/>
      <Header>
        <Status>Transação realizada com sucesso!</Status>
      </Header>
      <Main>
        <Icon
          name="checkmark-outline"
        />
      </Main>
      <Footer>
        <LinkContainer onPress={() => {console.log("Acesso ao comprovante provido por serviço externo de pagamento! Se preciso, criar nova tela apenas para visualização do comprovante")}}>
          <Link>Acessar comprovante</Link>
        </LinkContainer>
      </Footer>
    </Container>
  )
};

export { Comprovant };