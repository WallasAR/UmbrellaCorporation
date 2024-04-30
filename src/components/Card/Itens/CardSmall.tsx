import React from "react";
import { Container, Content, ImgContainer, Img, Name, PriceContainer, Price, PriceType } from "./styles";
import { TouchableOpacity } from "react-native";
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
  imageSource: string;
  price: string;
}

const CardSmall: React.FC<Props> = ({ imageSource, title, price}) => {
  return(
    <TouchableOpacity activeOpacity={0.8} accessibilityRole="button" style={{ padding:15}}>
      <Container>
      <ImgContainer>
        <Img source={{ uri: imageSource }} />
      </ImgContainer>
        <Content>
        <Name>{title}</Name>
          <PriceContainer>
            <Price>{price}</Price>
            <PriceType>UNIDADE</PriceType>
          </PriceContainer>
        </Content>
      </Container>
    </TouchableOpacity>
  );
};

export { CardSmall };