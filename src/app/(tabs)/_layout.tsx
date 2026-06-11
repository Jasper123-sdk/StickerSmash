import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary, // Color of the active tab icon
        tabBarInactiveTintColor: "#CDCDE0", // Color of the inactive tab icon
        tabBarShowLabel: false, // Hide the label of the tab
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#F0F0F0",
          height: 56,
          paddingBottom: 10,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={26}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <Feather
                name={focused ? "shopping-cart" : "shopping-cart"}
                size={26}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                size={26}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={26}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
