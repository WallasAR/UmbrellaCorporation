import React from "react"

import { StarRatingViewOnly } from "../StarRating/StarRating";

import { Container, Header, ImgContainer, Img, Username, InfoContainer, Description, StarRatingContainer } from "./styles";

interface UserReviewProps{
  url: string;
  username: string;
  description: string;
  starAmount: number;
}

const UserReviewLayout: React.FC<UserReviewProps> = ({ url, username, description, starAmount }) => {

  return (
    <Container>
      <Header>
        <ImgContainer>
          <Img source={{ uri: url }}/>
        </ImgContainer>
        <InfoContainer>
          <Username>{username}</Username>
          <StarRatingContainer>
            <StarRatingViewOnly rating={starAmount}/>
          </StarRatingContainer>
          <Description>{description}</Description>
        </InfoContainer>
      </Header>
    </Container>
  )
}

export { UserReviewLayout };