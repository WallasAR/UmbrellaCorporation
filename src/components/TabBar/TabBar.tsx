import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Container, Content, Icon, InnerButton } from "./styles";
import theme from "../../styles/theme"

function TabBar({ state, descriptors, navigation }: any) {
  return (
    <Container>
      <Content>
        {state.routes.map((route: any, index:number) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              activeOpacity={0.5}
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <View style={{ alignItems: "center", padding: 5 }}>
                <InnerButton>
                  <Icon 
                    // Alternativa api icone google(caso seja necessario mudança) - https://github.com/phosphor-icons/homepage
                    name={isFocused ? options.tabBarIcon : options.tabBarIcon + "-outline"}
                  />
                </InnerButton>
              </View>
              
            </TouchableOpacity>
          )
          

        })}
      </Content>
    </Container>
  )
};

export { TabBar };