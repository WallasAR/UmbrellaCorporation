import React from "react";
import { SvgUri } from "react-native-svg";
import { useTheme } from "styled-components";

import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ShadowedView } from "react-native-fast-shadow";

import { Button, Title, Icon, Content, ContentGoogle, styles } from "./styles";

interface Props {
  title?: string;
  onPress: () => void;
  uriSvg?: string | any;
  widthSvg?: string | number;
  heightSvg?: string | number;
  Color1?: string | number | any;
  Color2?: string | number | any;
  Color3?: string | number | any;
  Color4?: string | number | any;
  linearGradientEnabled?: boolean;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
};

const ButtonSocial: React.FC<Props> = ({ title, iconName, Color1, Color2, Color3, Color4, linearGradientEnabled, onPress = () => {}, uriSvg, widthSvg, heightSvg, ...rest }) => {
  const { COLORS } = useTheme();

  return (
    
      <Button {...rest} onPress={onPress} accessibilityRole="button" activeOpacity={0.8}>
        {linearGradientEnabled ? (
          <ShadowedView style={styles.shadow}>
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
        </ShadowedView>
      ) : (
        <ShadowedView style={styles.shadow}>
        <ContentGoogle>
          <SvgUri 
            width={widthSvg}
            height={heightSvg}
            uri={uriSvg}
          />
          <Title style={{ color: COLORS.GRAY4 }}>{title}</Title>
        </ContentGoogle>
        </ShadowedView>
      )}
      </Button>
  )
}

export { ButtonSocial };