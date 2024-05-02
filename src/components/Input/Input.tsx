import React, { useState } from "react"
import { useTheme } from "styled-components";
import { TextInputProps, TouchableOpacity } from "react-native";

import { Container, TextAreaContainer, InputContainer, Icon, Text } from "./styles"

interface InputProps {
  iconSize?: number;
  iconName?: string;
  leftIcon?: boolean;
  iconColor?: string;
  rightIcon?: boolean;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps & TextInputProps> = ({ rightIcon, leftIcon, iconName, iconSize, iconColor, secureTextEntry, ...rest }) => {
  const { COLORS } = useTheme();

  const [security, setSecurity] = useState(secureTextEntry);

  return (
    <Container>
      {leftIcon && (
      <Icon
        name={iconName}
        size={iconSize}
        color={iconColor || COLORS.GRAY8 }
      />
      )}

      <InputContainer
        {...rest}
        secureTextEntry={security}
        underlineColorAndroid="transparent"
        placeholderTextColor={COLORS.GRAY8}
      />

      {rightIcon && (
      <TouchableOpacity onPress={() => setSecurity(!security)}>
        <Icon
          name={security ? "eye-outline" : "eye-off-outline" }
          size={26}
          color={iconColor || COLORS.GRAY8 }
        />
      </TouchableOpacity>
    )}
    </Container>
  )
}

const TextArea: React.FC = () => {
  return(
    <TextAreaContainer>
      <Text 
        multiline={true}
        numberOfLines={10}
      />
    </TextAreaContainer>
  )

}

export { Input, TextArea };