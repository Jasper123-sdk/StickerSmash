import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { useRouter } from "expo-router";
import {
  ScrollView,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { BANNERS } from "@/assets/assets";
import { CATEGORIES, COLORS } from "../../../constants";
import CategoryItem from "../../../components/CategoryItem";
import { Product } from "../../../constants/types";
import { dummyProducts } from "@/assets/assets";
import ProductCard from "../../../components/ProductCard";
const { width } = Dimensions.get("window");

export default function Home() {
  const router = useRouter();
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const categories = [{ id: "All", name: "All", icon: "grid" }, ...CATEGORIES];

  const fetchProducts = async () => {
    setProducts(dummyProducts);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <Header showLogo showMenu showCart />

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* banner slider */}
        <View className="mb-4">
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            className="w-full h-48 rounded-xl"
            scrollEventThrottle={16}
            onScroll={(e) => {
              const slide = Math.ceil(
                e.nativeEvent.contentOffset.x /
                  e.nativeEvent.layoutMeasurement.width,
              );
              if (slide !== activeBannerIndex) {
                setActiveBannerIndex(slide);
              }
            }}
          >
            {BANNERS.map((banner, index) => {
              return (
                <View
                  key={index}
                  className="w-full h-48 overflow-hidden bg-gray-200 relative"
                  style={{ width: width - 32 }}
                >
                  <Image
                    source={{ uri: banner.image }}
                    className="w-full h-full "
                    resizeMode="cover"
                  />
                  <View className="absolute bottom-4 left-4 z-10">
                    <Text
                      className="text-white font-bold"
                      style={{ fontSize: 24 }}
                    >
                      {banner.title}
                    </Text>
                    <Text
                      className="text-white text-sm font-medium"
                      style={{ marginTop: 2 }}
                    >
                      {banner.subtitle}
                    </Text>

                    <TouchableOpacity
                      className=" bg-white rounded-full self-start items-center justify-center"
                      style={{
                        marginTop: 10,
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        paddingRight: 16,
                      }}
                      onPress={() => console.log("get now")}
                    >
                      <Text className="text-primary font-bold text-sm">
                        Get Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>
          {/* Pagination Dots */}
          <View className="flex-row justify-center items-center gap-2 mt-3">
            {BANNERS.map((banner, index) => {
              return (
                <View
                  key={index}
                  className={`h-2 rounded-full bg-gray-300 ${index === activeBannerIndex ? "w-8 bg-primary" : "w-2 bg-gray-300"}`}
                ></View>
              );
            })}
          </View>
        </View>

        {/* categories */}
        <View style={{ marginBottom: 14 }}>
          <View
            className="flex-row justify-between items-center"
            style={{ marginBottom: 18, marginTop: 10 }}
          >
            <Text
              className="text-xl font-bold text-primary"
              style={{ fontSize: 20 }}
            >
              Categories
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((cat: any) => {
              return (
                <CategoryItem
                  key={cat.id}
                  item={cat}
                  isSelected={false}
                  onPress={() =>
                    router.push({
                      pathname: "/(tabs)/shop",
                      params: { category: cat.id === "all" ? "" : cat.name },
                    })
                  }
                />
              );
            })}
          </ScrollView>
        </View>
        {/* products */}
        <View className="mb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text
              className="text-xl font-bold text-primary"
              style={{ fontSize: 20 }}
            >
              Popular
            </Text>
            <TouchableOpacity onPress={() => router.push("/shop")}>
              <Text className="text-sm" style={{ color: "#666" }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <View className="flex-row flex-wrap justify-between">
              {products.slice(0, 4).map((product) => {
                return <ProductCard key={product._id} product={product} />;
              })}
            </View>
          )}
        </View>

        {/* Newsletter CTA */}
        <View className="bg-white p-6 rounded-2xl mb-20 items-center">
          <Text className="text-lg font-bold text-primary mb-2 text-center">
            Join the Revulution
          </Text>
          <Text className="text-secondary mb-4 text-center">
            Subscribe to our newsletter and get 10% off opn your first
            order{" "}
          </Text>
          <TouchableOpacity className="bg-primary w-full py-3 rounded-full items-center">
            <Text className="text-white font-medium text-base">
              Subscribe Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
