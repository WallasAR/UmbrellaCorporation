import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import { Input } from "../../../components/Input/Input"
import { Carousel } from "../../../components/Carousel/Carousel"
import { CardFrame, CardFrameSmall } from "../../../components/Card/CardFrame/CardFrame";

import { Container, BannerContainer, Search, Main, SubTitle } from "./styles"

const Marketplace: React.FC = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <BannerContainer>
            <Carousel/>
          </BannerContainer>
          <Search>
            <Input
                leftIcon 
                iconSize={38}
                iconName="search"
                placeholder="Pesquisar medicamentos"          
            />
          </Search>
          <Main>
            <SubTitle>Orais Líquidos</SubTitle>
            <CardFrame/>

            <SubTitle>Mais Procurados</SubTitle>
            <CardFrameSmall
              horizontal={true}
            />

            <SubTitle>Bem avaliados</SubTitle>
            <CardFrame
            />

            <SubTitle>Disponíveis</SubTitle>
            <CardFrameSmall
              horizontal
              isDoubleCardShow
            />
          </Main>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

export { Marketplace };