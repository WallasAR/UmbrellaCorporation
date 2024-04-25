import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

import { useTheme } from "styled-components";
import Icon from "react-native-vector-icons/Ionicons";
import { variants } from "./Variants";
import { Container, Content, Title } from "./styles";

interface ButtonProps {
  title: string; 
  onPress: () => void;
  iconName?: keyof typeof Icon.glyphmap;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "purchase";
  style?: TouchableOpacityProps["style"];
  width?: number
}

const Button: React.FC<ButtonProps> = ({ 
      title,
      onPress = () => { },
      isLoading,
      iconName,
      disabled,
      variant = "primary",
      style
}) => {
    const { COLORS } = useTheme();
    const buttonVariant = variants[variant];
    const buttonStyle = disabled ? buttonVariant.disabled : buttonVariant.enabled;
    return(
      <Container
        onPress={onPress}
        disabled={isLoading || disabled}
        style={[buttonStyle.button, style]}
      >    
        {isLoading ? (
          <ActivityIndicator color={COLORS.GRAY}/>
        ) : (
          <Content>
            {iconName && (
              <Icon 
                  size={25}
                  name={iconName}
                  color={buttonStyle.icon.color}
                  style={{ marginRight: 15 }}
              />
            )}
          </Content>
        )}
        <Title style={buttonStyle.title}>{title}</Title>
      </Container>
    )
}

export { Button };