import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacityProps, ViewStyle } from 'react-native';
import { Container, Circle, Arrow } from "./styles"; 
import { useTheme } from "styled-components";

interface GoBackBtnProps extends TouchableOpacityProps {
    color?: string;
    borderColor?: string;
    arrowColor?: string;
    circleSize?: number;
    arrowSize?: number;
    style?: ViewStyle;
}

const GoBackButton: React.FC<GoBackBtnProps> = ({
    color,
    borderColor,
    arrowColor,
    circleSize, 
    arrowSize = 20, 
    style,
    ...rest
}) => {
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    const resolvedBorderColor = borderColor || color || COLORS.RED1;
    const resolvedArrowColor = arrowColor || color || COLORS.RED1;

    return (
        <Container 
            activeOpacity={0.8} 
            onPress={() => navigation.goBack()} 
            style={style} 
            {...rest}
        >
            <Circle 
                style={{ 
                    borderColor: resolvedBorderColor, 
                    width: circleSize, 
                    height: circleSize, 
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Arrow 
                    name="chevron-back-outline" 
                    style={{ 
                        color: resolvedArrowColor,
                        fontSize: arrowSize 
                    }} 
                />
            </Circle>
        </Container>
    );
}

export { GoBackButton };
