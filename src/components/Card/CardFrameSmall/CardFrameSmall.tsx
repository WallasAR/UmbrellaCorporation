import React from "react";
import { ScrollView } from "react-native";

import { Container, FrameCard, ViewCard } from "./styles";
import { CardSmall } from "../small/CardSmall";

const CardFrameSmall: React.FC = () => {
  return(
    <Container>
      <FrameCard>
          {/* Implementar FlatList, scroll infinito com base nas informações dadas pelo db, posteriormente!! */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ViewCard>
            <CardSmall title="Dipirona monoidratada 500Mg/mL" imageSource="https://www.farmace.com.br/images/2019/05/18/dip-monoid-500mg,mL.png" price="R$15,00" starRating="4.6"/>
            </ViewCard>
            <ViewCard>
            <CardSmall title="Cloridrato de ambroxol 100mL" imageSource="https://www.farmace.com.br/images/2019/05/18/clorid-ambroxol-3mg,mL.png" price="R$10,00" starRating="4.6"/>
            </ViewCard>
            <ViewCard>
            <CardSmall title="Dexametasona elixir 120mL" imageSource="https://www.farmace.com.br/images/2023/05/08/dexam-elixir-01mgml.png" price="R$18,50" starRating="4.6"/>
            </ViewCard>
            <ViewCard>
            <CardSmall title="Paracetamol 15mL" imageSource="https://www.farmace.com.br/images/2019/05/18/paracetamol-200mg,mL.png" price="R$21,00"  starRating="4.6"/>
            </ViewCard>
            <ViewCard>
            <CardSmall title="Maleato de dexclorfeniramina 100mL" imageSource="https://www.farmace.com.br/images/2019/05/18/maleato-dexclor-0,4mg,mL.png" price="R$6,87" starRating="4.6"/>
            </ViewCard>
            <ViewCard>
            <CardSmall title="Dipirona monoidratada 500Mg/mL" imageSource="https://blog.fazfarmanet.com.br/wp-content/uploads/2021/03/Venvanse.jpg" price="R$45,00" starRating="4.6"/>
            </ViewCard>
          </ScrollView>
        </FrameCard>
    </Container>
  )
}

export { CardFrameSmall };