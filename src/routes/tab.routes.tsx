import React from "react";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Cart } from "../../src/screens/Tab/Cart/Cart";
import { TabBar } from "../../src/components/TabBar/TabBar";
import { Settings } from "../../src/screens/Tab/Settings/Settings";
import { Marketplace } from "../../src/screens/Tab/Marketplace/Marketplace";
import { OrderHistory } from "../../src/screens/Tab/OrderHystory/OrderHystory";

import theme from "../../src/styles/theme";

const { Navigator, Screen } = createBottomTabNavigator();

// Definindo um tipo intermediário compatível com tabBarIcon e BottomTabNavigationOptions
type TabNavigationOptions = BottomTabNavigationOptions & { tabBarIcon: string };

export const TabRoutes = () => {
  return (
    <Navigator
      initialRouteName="Marketplace"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: theme.COLORS.GRAY3,
        tabBarActiveTintColor: theme.COLORS.WHITE,
        tabBarStyle: {
          paddingBottom: 7,
          backgroundColor: theme.COLORS.RED1,
        },
      }}

      tabBar = { (props) => <TabBar {...props}/>}
    >
      <Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          tabBarIcon: "storefront",
        } as TabNavigationOptions}
      />

      <Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: "bag-handle"  
        } as TabNavigationOptions}
      />

      <Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          tabBarIcon: "newspaper" 
        } as TabNavigationOptions}
      />

      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: "settings" 
        } as TabNavigationOptions}
      />

    </Navigator>
  )
}