import React from "react";

import { ScrollView } from "react-native";
import { Container, Search, Main } from "./styles"

import { CardFrame } from "../../components/Card/CardFrame/CardFrame";
import { CardFrameSmall } from "../../components/Card/CardFrameSmall/CardFrameSmall";
import { CardFull } from "../../components/Card/Full/CardFull";


const Marketplace: React.FC = () => {

  return (
    <Container>
      <Search>

      </Search>

      <Main>
        <ScrollView>
          <CardFrame/>
          <CardFrameSmall/>
        </ScrollView>
      </Main>

    </Container>
  )
}

export { Marketplace };