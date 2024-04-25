import React from "react";
import { Container, Content, ImgContainer, Img, Name, PriceContainer, Price, PriceType, StockContainer, StockAmount } from "./styles";

interface Props {
  title: string;
  imageSource: string;
  price: string;
  stockAmount: string;

}

const CardFull: React.FC<Props> = ({ imageSource, title, price, stockAmount }) => {
  return(
    <Container>
      <ImgContainer>
        <Img source={{ uri: imageSource }} />
      </ImgContainer>
      <Content>
      <Name>{title}</Name>
      <PriceContainer>
        <PriceType>UNIDADE</PriceType>
        <Price>{price}</Price>
      </PriceContainer>
      <StockContainer>
        <StockAmount>{stockAmount} Disponíveis</StockAmount>
      </StockContainer>
    </Content>
    </Container>
  );
};

export { CardFull };