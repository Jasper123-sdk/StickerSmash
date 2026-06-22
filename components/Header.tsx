import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { HeaderProps } from "../constants/types";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { useRouter } from "expo-router";

export default function Header({
  title,
  showBack,
  showSearch,
  showCart,
  showMenu,
  showLogo,
}: HeaderProps) {
  const router = useRouter();
  const { itemCount } = { itemCount: 6 };
  return (
    <View className="flex-row justify-between items-center px-4 py-3 bg-white">
      {/* left side */}
      <View className="flex-row items-center flex-1">
        {showBack && (
          <TouchableOpacity className="mr-3" onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showMenu && (
          <TouchableOpacity
            className="mr-3"
            onPress={() => console.log("menu")}
          >
            <Ionicons name="menu-outline" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showLogo ? (
          <Image
            source={require("@/assets/logo.png")}
            style={{
              width: "100%",
              height: 23,
              transform: [{ translateX: -20 }],
            }}
            resizeMode="contain"
          />
        ) : title ? (
          <Text className="text-lg font-bold text-primary text-center flex-1 mr-8">
            {title}
          </Text>
        ) : null}
        {!showLogo && !title && <View className="flex-1"></View>}
      </View>

      {/* right side */}
      <View className="flex-row items-center gap-4">
        {showSearch && (
          <TouchableOpacity onPress={() => console.log("search")}>
            <Ionicons name="search-outline" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showCart && (
          <TouchableOpacity onPress={() => router.push("/(tabs)/cart")}>
            <View className="relative">
              <Ionicons name="bag-outline" size={28} color={COLORS.primary} />
              <View className="absolute -top-1 -right-1 bg-accent w-4 h-4 rounded-full items-center justify-center">
                <Text className="text-[10px] text-white font-bold">
                  {itemCount}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
