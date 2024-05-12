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
          <Search>
            <Input
                leftIcon 
                iconSize={38}
                iconName="search"
                placeholder="Pesquisar medicamentos"          
            />
          </Search>
          <BannerContainer>
            <Carousel/>
          </BannerContainer>
          <Main>
            <SubTitle>Orais Líquidos</SubTitle>
            <CardFrame/>

            {/* <SubTitle>Mais Procurados</SubTitle>
            <CardFrameSmall
              onPress={handleGoToProduct}
              horizontal={true}
            />

            <SubTitle>Bem avaliados</SubTitle>
            <CardFrame
              onPress={handleGoToProduct}
            />

            <SubTitle>Disponíveis</SubTitle>
            <CardFrameSmall
              onPress={handleGoToProduct}
              horizontal={true}
            />

            <CardFrameSmall
              onPress={handleGoToProduct}
              horizontal={true}
            />

            <CardFrame
              onPress={handleGoToProduct}
            /> */}
          </Main>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

export { Marketplace };