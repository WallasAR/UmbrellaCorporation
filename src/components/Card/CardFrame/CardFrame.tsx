import React from "react";
import { ScrollView } from "react-native";

import { Container, FrameCard, ViewCard } from "./styles";
import { Card } from "../full/Card";

const CardFrame: React.FC = () => {
  return(
    <Container>
      <FrameCard>
          {/* Implementar FlatList, scroll infinito com base nas informações dadas pelo db, posteriormente!! */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ViewCard>
            <Card title="Dipirona monoidratada 500Mg/mL" imageSource="https://www.farmace.com.br/images/2019/05/18/dip-monoid-500mg,mL.png" price="R$15,00" starRating="4.6" amountRating="600"/>
            </ViewCard>
            <ViewCard>
            <Card title="Cloridrato de ambroxol 100mL" imageSource="https://www.farmace.com.br/images/2019/05/18/clorid-ambroxol-3mg,mL.png" price="R$10,00" starRating="4.6" amountRating="121"/>
            </ViewCard>
            <ViewCard>
            <Card title="Dexametasona elixir 120mL" imageSource="https://www.farmace.com.br/images/2023/05/08/dexam-elixir-01mgml.png" price="R$18,50" starRating="4.6" amountRating="819"/>
            </ViewCard>
            <ViewCard>
            <Card title="Paracetamol 15mL" imageSource="https://www.farmace.com.br/images/2019/05/18/paracetamol-200mg,mL.png" price="R$21,00"  starRating="4.6" amountRating="32"/>
            </ViewCard>
            <ViewCard>
            <Card title="Maleato de dexclorfeniramina 100mL" imageSource="https://www.farmace.com.br/images/2019/05/18/maleato-dexclor-0,4mg,mL.png" price="R$6,87" starRating="4.6" amountRating="77"/>
            </ViewCard>
            <ViewCard>
            <Card title="Dipirona monoidratada 500Mg/mL" imageSource="https://www.farmace.com.br/images/2019/05/18/maleato-dexclor-0,4mg,mL.png" price="R$45,00" starRating="4.6" amountRating="600"/>
            </ViewCard>
          </ScrollView>
        </FrameCard>
    </Container>
  )
}

export { CardFrame };