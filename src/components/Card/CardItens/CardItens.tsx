import React from "react";
import { ScrollView } from "react-native";

import { Container, FrameCard, ViewCard } from "./styles";
import { CardSmall } from "../Itens/CardSmall";

const CardItens: React.FC = () => {
  return(
    <Container>
      <FrameCard>
          {/* Implementar FlatList, scroll infinito com base nas informações dadas pelo db, posteriormente!! */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <ViewCard>
            <CardSmall title="Dipirona monoidratada 500Mg/mL" imageSource="https://www.farmace.com.br/images/2019/05/18/dip-monoid-500mg,mL.png" price="R$15,00"/>
            </ViewCard>
            <ViewCard>
            <CardSmall title="Cloridrato de ambroxol 100mL" imageSource="https://www.farmace.com.br/images/2019/05/18/clorid-ambroxol-3mg,mL.png" price="R$10,00"/>
            </ViewCard>
          </ScrollView>
        </FrameCard>
    </Container>
  )
}

export { CardItens };