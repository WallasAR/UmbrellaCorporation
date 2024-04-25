import React from "react";
import { ScrollView } from "react-native";

import { Button } from "../../components/Buttons/Button";
import { StarRating } from "../../components/RatingSystem/StarRating/StarRating";
import { CardFull } from "../../components/Card/Full/CardFull";
import { UserReviewLayout } from "../../components/RatingSystem/UserReviewLayout/UserReviewLayout";
import { Container, Header, Section, DescriptionTitle, DescriptionText, BtnContainer, UserRatingContainer, MakeRatingContainer } from "./styles";

const MarketplaceProduct: React.FC = () => {
  return (
    <ScrollView>
    <Container>
      <Header>
        <CardFull 
            title="Dipirona monoidratada 500Mg/mL" 
            imageSource="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/02/tablets-5620566-1920.jpg"
            price="R$15,00" 
            stockAmount="1500"
        />
      </Header>
      <BtnContainer>
        <Button
            title="Adicionar ao carrinho" 
            variant="primary"
            onPress={() => {console.log("Botão funcional")} }
        />
      </BtnContainer>

      <Section>
        <DescriptionTitle>Descrição:</DescriptionTitle>
        <DescriptionText>
          {"\t"}Cada mL contém 500 mg de dipirona monoidratada. {"\n\n"}
          Excipientes: {"\n"}
          {"\t"}Fosfato de sódio monobásico, fosfato de sódio dibásico, sacarina sódica e água purificada.{"\n\n"}
          {"\t"}Cada 1 mL deste medicamento equivale a 20 gotas e 1 gota equivale a 25 mg de dipirona monoidratada.
        </DescriptionText>
      </Section>
      <UserRatingContainer>
        <UserReviewLayout 
              url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
              username="War" 
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur." 
              starAmount={3}/>
        <UserReviewLayout 
              url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
              username="Takushi" 
              description="É sexo batman, eles estão falando de sexo IIIIIIIIRRRRAAAA" 
              starAmount={5}/>
        <UserReviewLayout 
              url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
              username="Boga doce" 
              description="É que ele tá fazendo Meuing" 
              starAmount={2}/>
        <UserReviewLayout 
              url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
              username="Dog Mal" 
              description="Sabe qual que é a diferença da mosca pra abelha? É que a mosca só vive na merda. E a abelha fabrica o mel.E você? Só quer mamão? Só quer mel? Acha que é fácil fabricar papel? Só quer presente? Só quer Noel? Acha que é fácil fabricar o mel? Você acredita em Papai Noel? Vai na luta se quiser troféu. Não fica olhando pra cima. Porque além de lindo, só cai água do céu. " 
              starAmount={4}/>
      </UserRatingContainer>
      <MakeRatingContainer>
        {/* <StarRating/> */}
      </MakeRatingContainer>
    </Container>
    </ScrollView>
  )
}

export { MarketplaceProduct };