import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import { useTheme } from "styled-components";
import { Container, Star, ContainerViewOnly, StarViewOnly } from "./styles"

// StarPropViewOnly
interface StarProps{ 
  rating: number;
}

const StarRating: React.FC = () => {
  // states
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating] = useState([1, 2, 3, 4, 5])
  const { COLORS } = useTheme();
  
  return(
    <Container>
      {maxRating.map((item, key) => {
        return(
          <TouchableOpacity 
              activeOpacity={0.9} 
              key={item} 
              onPress={() => setDefaultRating(item)}
          >
          <Star 
            name={item <= defaultRating ? "star" : "staro"}
            color={item <= defaultRating ? COLORS.YELLOW : COLORS.GRAY5 }
          />
          </TouchableOpacity>  
        );
      })} 
    </Container>
  );
}

// Componente de classificação de estrelas apenas para visualização
const StarRatingViewOnly: React.FC<StarProps> = ({ rating }) => {
  const { COLORS } = useTheme();
  const starAmount: number[] = [1, 2, 3, 4, 5];

  return (
    <ContainerViewOnly>
      {starAmount.map((item) => (
        <StarViewOnly
          key={item}
          name={item <= rating ? "star" : "staro"}
          color={item <= rating ? COLORS.YELLOW : COLORS.GRAY5 }
        />
      ))}
    </ContainerViewOnly>
  );
}

export { StarRating, StarRatingViewOnly };