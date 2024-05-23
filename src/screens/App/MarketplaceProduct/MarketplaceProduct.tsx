import { useTheme } from "styled-components";
import { useModal } from "../../../hooks/Modal";
import React, { useEffect, useState } from "react";
import { FlatList, ToastAndroid } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getInfoRating,
  productData,
  ratingData,
  getProduct,
} from "../../../services/ProductService";

import { Msg } from "../../../components/Msg/Msg";
import { TextArea } from "../../../components/Input/Input";
import { Button } from "../../../components/Buttons/Button";
import { CardFull } from "../../../components/Card/Full/CardFull";
import { CardFrame } from "../../../components/Card/CardFrame/CardFrame";
import { GoBackButton } from "../../../components/GoBackButton/GoBackButton";
import { StarRating } from "../../../components/RatingSystem/StarRating/StarRating";
import { UserReviewLayout } from "../../../components/RatingSystem/UserReviewLayout/UserReviewLayout";
import { ReviewSkeleton } from "../../../components/RatingSystem/UserReviewLayout/Skeleton";

import {
  Container,
  Main,
  Header,
  Section,
  DescriptionTitle,
  DescriptionText,
  SubTitle,
  Label,
  BtnContainer,
  UserRatingContainer,
  MakeRatingContainer,
} from "./styles";



const MarketplaceProduct: React.FC = () => {

  const navigation = useNavigation();
  
  // Recebendo id do componente CardFrame
  const route = useRoute();
  const {productID}: any = route.params;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [rating, setRating] = useState<ratingData[]>([]);
  const [product, setProduct] = useState<productData>({} as productData);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
      getInfoRatingFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  async function getInfoRatingFromDB() {
    setIsLoading(true);
    const RatingDB = await getInfoRating.getRatingFromDB();

    if (RatingDB) {
      setRating(RatingDB);
      setIsLoading(false);
    }
  }

  // get product data by productID
  async function getDataFromDB() {
    setIsLoading(true);
    const productDetail = await getProduct.getProductFromDB();

    for (let index = 0; index < productDetail.length; index++) {
      if (productDetail[index].id === productID) {
        setProduct(productDetail[index]);
        setIsLoading(false);
      }
    }
  }

  // add to card
  async function addToCard(id: number) {
    let itemArray: any = await AsyncStorage.getItem("cartData");
    itemArray = JSON.parse(itemArray);

    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem("cartData", JSON.stringify(array));
        toggleModal();
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);

      try {
        await AsyncStorage.setItem("cartData", JSON.stringify(array));
        toggleModal();
      } catch (error) {
        return error;
      }
    }
  }

  const { COLORS } = useTheme();

  // State para mostrar ou esconder modal
  const {isActive, toggleModal} = useModal();

  // Extende o conteiner de avaliações
  const [expanded, setExpanded] = useState(false);

  // Atualiza os dados da lista para evitar erros
  const [listKey, setListKey] = useState("initial");

  // muda os estados com onPress
  const toggleExpanded = () => {
    setExpanded(!expanded);
    setListKey(listKey === "initial" ? "updated" : "initial");
  };

  const handleToCart = () => {
    navigation.navigate("Cart");
  };


  const handleToMarcketplace = () => {
    navigation.navigate("Marketplace");
  };

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[{key: "header"}, {key: "content"}]} // Adiciona chaves para os itens de cabeçalho e conteúdo
        renderItem={(
          {item}, // Define a função de renderização para cada item
        ) => (
          // fragmento agrupar múltiplos elementos filhos
          <>
            {item.key === "header" && ( // Renderiza o cabeçalho
              <Header>
                {product.id === productID && !isLoading ? 
                <CardFull
                  title={product.title}
                  imageSource={product.imageSource}
                  price={product.price !== undefined ? product.price.toFixed(2).replace(".", ",") : "0"} 
                  stockAmount={product.stockAmount}
                  isLoading={false}
                />
                :
                <CardFull
                  title={product.title}
                  imageSource={product.imageSource}
                  price={product.price !== undefined ? product.price.toFixed(2).replace(".", ",") : "0"} 
                  stockAmount={product.stockAmount}
                  isLoading={true}
                />
                }
                <GoBackButton borderColor="transparent" arrowColor={COLORS.GRAY7} style={{ position: "absolute", top: -10, left: 20, backgroundColor: COLORS.GRAY3, borderRadius: 15 }}/>
              </Header>
            )}
            {item.key === "content" && ( // Renderiza o conteúdo
              <Main>
                <Msg
                  showMoreButtons
                  buttonRight="Sim"
                  isActive={isActive}
                  toggleModal={toggleModal}
                  header="Ir para carrinho"
                  onPressRight={handleToCart}
                  buttonLeft="Comprar mais!"
                  onPressLeft={handleToMarcketplace}
                  description="Produto adicionado! Deseja ir para o carrinho?"
                />
                <BtnContainer>
                  <Button
                    variant="toCard"
                    onPress={() => addToCard(product.id)}
                    title="Adicionar ao carrinho"
                  />
                </BtnContainer>

                <Section>
                  <DescriptionTitle>Descrição:</DescriptionTitle>
                  <DescriptionText>
                    {"\t"}Cada mL contém 500 mg de dipirona monoidratada.{" "}
                    {"\n\n"}
                    Excipientes: {"\n"}
                    {"\t"}Fosfato de sódio monobásico, fosfato de sódio
                    dibásico, sacarina sódica e água purificada.{"\n\n"}
                    {"\t"}Cada 1 mL deste medicamento equivale a 20 gotas e 1
                    gota equivale a 25 mg de dipirona monoidratada.
                  </DescriptionText>
                </Section>

                <SubTitle>Avaliações</SubTitle>
                {rating.length === 0 ? 
                <>
                  <ReviewSkeleton/>
                  <ReviewSkeleton/>
                </>
                :
                <FlatList
                  key={listKey}
                  data={expanded ? rating : rating.slice(0, 2)} // Passa os dados para a FlatList
                  keyExtractor={item => item.id.toString()} // Define uma função para extrair chaves únicas para cada item
                  renderItem={(
                    {item}, // Define a função de renderização para cada item
                  ) => (
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
              }
                {/* More coments button */}
                <Button
                  variant="indicator"
                  iconName={
                    !expanded ? "chevron-down-outline" : "chevron-up-outline"
                  }
                  onPress={toggleExpanded}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                  disabled={rating.length === 0}
                />

                <SubTitle>Avalie o produto</SubTitle>
                <MakeRatingContainer>
                  <StarRating />
                </MakeRatingContainer>

                <Label>Fale sobre sua compra (opcional)</Label>
                <TextArea />

                <SubTitle>Relacionados</SubTitle>
                <CardFrame />
              </Main>
            )}
          </>
        )}
      />
    </Container>
  );
};

export {MarketplaceProduct};
