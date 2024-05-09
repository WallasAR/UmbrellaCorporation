import React, { useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components";
import { useModal } from "../../../hooks/Modal";
import { useNavigation } from "@react-navigation/native";

import { Msg } from "../../../components/Msg/Msg";
import { TextArea } from "../../../components/Input/Input";
import { Button } from "../../../components/Buttons/Button";
import { CardFull } from "../../../components/Card/Full/CardFull";
import { StarRating } from "../../../components/RatingSystem/StarRating/StarRating";
import { CardFrameSmall } from "../../../components/Card/CardFrame/CardFrame";
import { UserReviewLayout } from "../../../components/RatingSystem/UserReviewLayout/UserReviewLayout";

import { Container, Header, Section, DescriptionTitle, DescriptionText, SubTitle, Label, BtnContainer, UserRatingContainer, MakeRatingContainer } from "./styles";


const MarketplaceProduct: React.FC = () => {

  const { COLORS } = useTheme()
  const navigation = useNavigation();

  // Extende o conteiner de avaliações
  const [expanded, setExpanded] = useState(false)

  // Atualiza os dados da lista para evitar erros
  const [listKey, setListKey] = useState("initial");

  // muda os estados com onPress
  const toggleExpanded = () => {
    setExpanded(!expanded)
    setListKey(listKey === "initial" ? "updated" : "initial")
  };
  
  const handleToCart = () => {
    navigation.navigate("Cart")
  };

  const handleToMarcketplace = () => {
    navigation.navigate("Marketplace")
  };
  
  const { isActive, toggleModal } = useModal();
  
  // Dados para a lista de avaliações de usuários
  const userReviews = [
    { id: "1", 
      url: "https://cdn.discordapp.com/attachments/1172619113978400858/1217460471645605908/IMG_20240313_101135442_HDR.jpg?ex=662ba86b&is=662a56eb&hm=4b5a40edc98dc0de8e41a396d14491eae8ef6dbf63ae7678ce3836480d430c02&", 
      username: "War", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur. Late dog", 
      starAmount: 3 },

    { id: "2", 
    url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
    username: "Takushi", 
    description: "É sexo batman, eles estão falando de sexo IIIIIIIIRRRRAAAA", 
    starAmount: 5 },

    { id: "3", 
    url: "https://cdn.discordapp.com/attachments/1172619113978400858/1219322644021772480/image.png?ex=662bd734&is=662a85b4&hm=10d81e68ebb740bbdc23fe47c47660f32aacfdbfe79d900552c58bd085b2a273&", 
    username: "Boga doce", 
    description: "É que ele tá fazendo Meuing", 
    starAmount: 2 },

    { id: "4", 
    url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
    username: "Dog Mal", 
    description: "Sabe qual que é a diferença da mosca pra abelha? É que a mosca só vive na merda. E a abelha fabrica o mel.E você? Só quer mamão? Só quer mel? Acha que é fácil fabricar papel? Só quer presente? Só quer Noel? Acha que é fácil fabricar o mel? Você acredita em Papai Noel? Vai na luta se quiser troféu. Não fica olhando pra cima. Porque além de lindo, só cai água do céu. ", 
    starAmount: 4 },

    { id: "5", 
    url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
    username: "João Vitor", 
    description: "Cheirinho de pingola mijada", 
    starAmount: 3 },

    { id: "6", 
    url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", 
    username: "AntonioAbatte", 
    description: "O igo é um baitola", 
    starAmount: 1 },

    { id: "7", 
    url: "https://i.pinimg.com/originals/31/e2/a1/31e2a17fc75dd7d332086446d8ebb40d.jpg", 
    username: "SigmaChad", 
    description: "🤫", 
    starAmount: 4 },
  ];

  return (
    <FlatList style={{ backgroundColor: COLORS.WHITE}}
      data={[{ key: "header" }, { key: "content" }]} // Adiciona chaves para os itens de cabeçalho e conteúdo
      renderItem={({ item }) => ( // Define a função de renderização para cada item
        // fragmento agrupar múltiplos elementos filhos
        <>
          {item.key === "header" && ( // Renderiza o cabeçalho
            <Header>
              <CardFull 
                title="Dipirona monoidratada 500Mg/mL" 
                imageSource="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2023/02/tablets-5620566-1920.jpg"
                price="R$15,00" 
                stockAmount="1500"
              />
            </Header>
          )}
          {item.key === "content" && ( // Renderiza o conteúdo
            <Container>
              <Msg
                showMoreButtons
                buttonRight="Sim"
                isActive={isActive}
                toggleModal={toggleModal}
                header="Ir para carrinho"
                buttonLeft="Continuar comprando"
                description="Produto adicionado! Deseja ir para o carrinho?"
                onPressLeft={handleToMarcketplace}
                onPressRight={handleToCart}
              />
              <BtnContainer>
                <Button
                  variant="toCard"
                  onPress={toggleModal}
                  title="Adicionar ao carrinho" 
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

              <SubTitle>Avaliações</SubTitle>
              <FlatList
                key={listKey}
                data={expanded ? userReviews : userReviews.slice(0, 2) } // Passa os dados para a FlatList
                keyExtractor={(item) => item.id.toString()} // Define uma função para extrair chaves únicas para cada item
                renderItem={({ item }) => ( // Define a função de renderização para cada item
                  <UserRatingContainer>
                    
                    <UserReviewLayout 
                      url={item.url} 
                      username={item.username} 
                      description={item.description} 
                      starAmount={item.starAmount}
                    />
                  </UserRatingContainer>
                )}
              />

              {/* More coments button */}
              <Button
                variant="indicator"
                iconName={!expanded ? "chevron-down-outline" : "chevron-up-outline"}
                onPress={toggleExpanded}
                style={{ alignItems: "center", justifyContent:"center", alignSelf: "center" }}
              />

              <SubTitle>Avalie o produto</SubTitle>
              <MakeRatingContainer>
                <StarRating/>
              </MakeRatingContainer>
              
              <Label>Fale sobre sua compra (opcional)</Label>
              <TextArea/>

              <SubTitle>Relacionados</SubTitle>
              <CardFrameSmall
                onPress={() => {console.log("Direcionar para MarcketplaceProduct!")}}
                horizontal={true}
              />
            </Container>
          )}
        </>
      )}
    />
  );
}

export { MarketplaceProduct };