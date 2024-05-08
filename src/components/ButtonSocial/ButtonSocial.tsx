import React from "react";
import { SvgUri } from "react-native-svg";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Button, Title, Icon, Content } from "./styles";
import { useTheme } from "styled-components";

interface Props {
  title?: string;
  onPress: () => void;
  Color1?: string | number | any;
  Color2?: string | number | any;
  Color3?: string | number | any;
  Color4?: string | number | any;
  linearGradientEnabled?: boolean;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  uriSvg?: string | any;
  widthSvg?: string | number;
  heightSvg?: string | number;
};

const ButtonSocial: React.FC<Props> = ({ title, iconName, Color1, Color2, Color3, Color4, linearGradientEnabled, onPress = () => {}, uriSvg, widthSvg, heightSvg, ...rest }) => {
  const { COLORS } = useTheme();

  return (
    
      <Button {...rest} onPress={onPress} accessibilityRole="button" activeOpacity={0.8}>
        {linearGradientEnabled ? (
        <LinearGradient
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={[Color1, Color2, Color3, Color4]}
          style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", borderRadius: 15 }}
        >
          <Content>
            <Icon name={iconName}/>
            <Title>{title}</Title>
          </Content>
        </LinearGradient>

      ) : (

        <Content>
          <SvgUri 
            width={widthSvg}
            height={heightSvg}
            uri={uriSvg}
          />
          <Title style={{ color: COLORS.GRAY4 }}>{title}</Title>
        </Content>
      )}
      </Button>
  )
}

export { ButtonSocial };