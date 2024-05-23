import React from "react";

import { ShadowedView } from "react-native-fast-shadow";

import { Container, Content, ImgContainer, Img, Name, PriceContainer, Price, PriceType, StockContainer, StockAmount, styles } from "./styles";
import { Skeleton } from "moti/skeleton";

interface Props {
  title: string;
  price: string;
  imageSource: string;
  stockAmount: number;
  isLoading: boolean;
};

const CardFull: React.FC<Props> = ({ imageSource, title, price, stockAmount, isLoading = true }) => {
  const colorMode:"light" | "dark" = "light"

  return(
    <ShadowedView style={styles.shadow}>
      <Skeleton.Group show={isLoading}>
    <Container>
      <ImgContainer>
      <Skeleton colorMode={colorMode} width={"100%"}>
        <Img source={{ uri: imageSource || "https://www.residentevil.com/re4/assets/images/mercenaries_img-leon.png" }} />
        </Skeleton>
      </ImgContainer>
      <Content>
      <Skeleton colorMode={colorMode} width={"100%"}>
      <Name>{title}</Name>
      </Skeleton>
      <PriceContainer>
        <Skeleton colorMode={colorMode} width={"40%"}>
          <PriceType>UNIDADE</PriceType>
        </Skeleton>
        <Skeleton colorMode={colorMode} width={"60%"}>
        <Price>R${price}</Price>
        </Skeleton>
      </PriceContainer>
      {!isLoading &&
      <StockContainer>
        <StockAmount>{stockAmount} Disponíveis</StockAmount>
      </StockContainer>
      }
    </Content>
    </Container>
    </Skeleton.Group>
    </ShadowedView>
  );
};

export { CardFull };