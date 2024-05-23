import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

import { useTheme } from "styled-components";

import { variants } from "./Variants";
import { Container, Content, Title, Icon } from "./styles";

interface ButtonProps {
  title?: string; 
  onPress: () => void;
  iconName?: string;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "purchase" | "indicator" | "toCard" | "transparent";
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
    const buttonStyle: any = disabled ? buttonVariant.disabled : buttonVariant.enabled;
    
    return(
      <Container
        activeOpacity={0.8}
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
                  size={buttonStyle.icon.size}
                  name={iconName}
                  color={buttonStyle.icon.color}
              />
            )}
          </Content>
        )}
        <Title style={buttonStyle.title}>{title}</Title>
      </Container>
    )
}

export { Button };