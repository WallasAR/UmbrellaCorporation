import React from "react";
import { FlatList } from "react-native";

import { Container, FrameCard, IndicatorContainer } from "./styles";
import { Card } from "../Regular/Card";
import { CardSmall } from "../Small/CardSmall";
import { Button } from "../../Buttons/Button";
import { useNavigation } from "@react-navigation/native";

const InfoCards = [
  {id: "1",
  title:"Dipirona monoidratada 500Mg/mL",
  imageSource:"https://www.farmace.com.br/images/2019/05/18/dip-monoid-500mg,mL.png",
  price:"R$15,00",
  starRating:"4.6",
  amountRating:"600"
  },
  {id: "2",
  title:"Cloridrato de ambroxol 100mL",
  imageSource:"https://www.farmace.com.br/images/2019/05/18/clorid-ambroxol-3mg,mL.png",
  price:"R$10,00",
  starRating:"4.6",
  amountRating:"121"
  },
  {id: "3",
  title:"Dexametasona elixir 120mL",
  imageSource:"https://www.farmace.com.br/images/2023/05/08/dexam-elixir-01mgml.png",
  price:"R$18,50",
  starRating:"4.6",
  amountRating:"819"
  },
  {id: "4",
  title:"Paracetamol 15mL",
  imageSource:"https://www.farmace.com.br/images/2019/05/18/paracetamol-200mg,mL.png",
  price:"R$21,00",
  starRating:"4.1",
  amountRating:"32"
  },
  {id: "5",
  title:"Maleato de dexclorfeniramina 100mL",
  imageSource:"https://www.farmace.com.br/images/2019/05/18/maleato-dexclor-0,4mg,mL.png",
  price:"R$6,87",
  starRating:"3.9",
  amountRating:"77"
  },
  {id: "6",
  title:"Dipirona monoidratada 500Mg/mL",
  imageSource:"https://www.farmace.com.br/images/2019/05/18/dip-monoid-500mg,mL.png",
  price:"R$15,00",
  starRating:"4.6",
  amountRating:"600"
  },
  {id: "7",
  title:"Cloridrato de ambroxol 100mL",
  imageSource:"https://www.farmace.com.br/images/2019/05/18/clorid-ambroxol-3mg,mL.png",
  price:"R$10,00",
  starRating:"4.6",
  amountRating:"121"
  },
  {id: "8",
  title:"Dexametasona elixir 120mL",
  imageSource:"https://www.farmace.com.br/images/2023/05/08/dexam-elixir-01mgml.png",
  price:"R$18,50",
  starRating:"4.6",
  amountRating:"819"
  },
  {id: "9",
  title:"Paracetamol 15mL",
  imageSource:"https://www.farmace.com.br/images/2019/05/18/paracetamol-200mg,mL.png",
  price:"R$21,00",
  starRating:"4.1",
  amountRating:"32"
  },
  {id: "10",
  title:"Maleato de dexclorfeniramina 100mL",
  imageSource:"https://www.farmace.com.br/images/2019/05/18/maleato-dexclor-0,4mg,mL.png",
  price:"R$6,87",
  starRating:"3.9",
  amountRating:"77"
  },
]

const CardFrame: React.FC = () => {

  const navigation = useNavigation();

  const handleCardPress = (item: any) => {
    navigation.navigate("ProductDetail",  item )
  };

  return(
    <Container>
      <FlatList
        data={InfoCards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FrameCard>
              <Card 
                onPress={() => handleCardPress(item)}
                price={item.price}
                title={item.title}
                starRating={item.starRating}
                imageSource={item.imageSource}
                amountRating={item.amountRating}
                />
          </FrameCard>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
            <IndicatorContainer>
              <Button
                onPress={() => {} }
                variant="indicator"
                iconName="chevron-forward-outline"
                disabled={true}
              />
            </IndicatorContainer>
    </Container>
  )
}

interface CardFrameSmallProps {
  horizontal: boolean; 
  onPress: () => void;
};

const CardFrameSmall: React.FC<CardFrameSmallProps> = ({ horizontal, onPress = () => {} }) => {
  return(
    <Container>
      <FlatList
        data={InfoCards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FrameCard>
              <CardSmall 
                iconName={true}
                onPress={onPress}
                title={item.title}
                price={item.price}
                starRating={item.starRating}
                imageSource={item.imageSource}
                />
          </FrameCard>
        )}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        />
    </Container>
  )
}

export { CardFrame, CardFrameSmall };