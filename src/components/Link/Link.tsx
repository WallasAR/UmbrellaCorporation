import React from "react";

import { Container, LinkContainer, Label, LinkText } from "./styles";

interface LinkProps {
  label?: string;
  linkText: string;
  linkColor: string; 
  labelColor?: string;
  underline?: boolean;
  onPress: () => void;
};

const Link: React.FC<LinkProps> = ({ onPress = () => {}, underline, label, linkText, labelColor, linkColor  }) => {
  return (
    <Container>
      <LinkContainer onPress={onPress}>
          <Label style={{ color: labelColor }}>{label}</Label>
          <LinkText style={{ textDecorationLine: underline ? "underline" : "none", color: linkColor }}>{linkText}</LinkText>
        </LinkContainer>
    </Container>
  )
};

export { Link };