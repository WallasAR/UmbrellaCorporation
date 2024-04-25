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
  const theme = useTheme();
  
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
            color={item <= defaultRating ? theme.COLORS.YELLOW : theme.COLORS.GRAY5 }
          />
          </TouchableOpacity>  
        );
      })} 
    </Container>
  );
}

// Componente de classificação de estrelas apenas para visualização
const StarRatingViewOnly: React.FC<StarProps> = ({ rating }) => {
  const theme = useTheme();

  return (
    <ContainerViewOnly>
      {[1, 2, 3, 4, 5].map((item) => (
        <StarViewOnly
          key={item}
          name={item <= rating ? "star" : "staro"}
          color={item <= rating ? theme.COLORS.YELLOW : theme.COLORS.GRAY5 }
        />
      ))}
    </ContainerViewOnly>
  );
}

export { StarRating, StarRatingViewOnly };