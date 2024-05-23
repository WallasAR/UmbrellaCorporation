import React from "react"

import { StarRatingViewOnly } from "../StarRating/StarRating";

import { Container, Header, ImgContainer, Img, Username, InfoContainer, Description, StarRatingContainer } from "./styles";
import { Skeleton } from "moti/skeleton";

const ReviewSkeleton: React.FC = () => {
  const colorMode: "light" | "dark" = "light";

  return (
    <Container>
      <Skeleton.Group show>
      <Header>
        <ImgContainer>
        <Skeleton colorMode={colorMode} width={"100%"} radius="round">
          <Img source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }}/>
          </Skeleton>
        </ImgContainer>
        <InfoContainer>
        <Skeleton colorMode={colorMode} width={"100%"} radius="round">
          <Username>user</Username>
          </Skeleton>
          
          <StarRatingContainer>
          <Skeleton colorMode={colorMode} width={"100%"} radius="round">
            <StarRatingViewOnly rating={0}/>
            </Skeleton>
          </StarRatingContainer>
          
          <Skeleton colorMode={colorMode} width={"100%"}>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur.</Description>
          </Skeleton>
        </InfoContainer>
      </Header>
      </Skeleton.Group>
    </Container>
  )
}

export { ReviewSkeleton };