import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CategoryItemProps } from "../constants/types";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";

export default function CategoryItem({
  item,
  isSelected,
  onPress,
}: CategoryItemProps) {
  return (
    <TouchableOpacity className="mr-4 items-center" onPress={onPress}>
      <View
        className={`w-14 h-14 rounded-lg items-center justify-center mb-2 ${isSelected ? "bg-primary" : "bg-surface"}`}
        style={{
          flexDirection: "column",
          gap: 2,
          padding: 6,
          marginRight: 9,
        }}
      >
        <Ionicons
          name={item.icon as any}
          size={24}
          color={isSelected ? "#FFF" : COLORS.primary}
        />
        <Text
          className={` ${isSelected ? "text-primary" : "text-secondary"}`}
          style={{ fontSize: 10, marginTop: 4 }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
