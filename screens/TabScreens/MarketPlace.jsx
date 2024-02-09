import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, AntDesign } from "@expo/vector-icons";
import Tabs from "../../components/Tabs";

const MarketPlace = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#f8f8f8", height: "100%", padding: 16 }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16 }}>Marketplace</Text>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <View
            style={{
              backgroundColor: "rgba(173, 216, 230, 0.5)",
              padding: 12,
              borderRadius: 99,
            }}
          >
            <Feather name="shopping-cart" size={16} color="purple" />
          </View>
          <View
            style={{
              backgroundColor: "rgba(173, 216, 230, 0.5)",
              padding: 12,
              borderRadius: 99,
            }}
          >
            <AntDesign name="hearto" size={16} color="purple" />
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 12,
          padding: 12,
          flexDirection: "row",
          gap: 12,
          backgroundColor: "white",
          borderRadius: 6,
        }}
      >
        <Feather name="search" size={24} color="black" />
        <TextInput placeholder="Search" />
      </View>
      {/* Tabs */}
      <View>
        <Tabs />
      </View>
    </SafeAreaView>
  );
};

export default MarketPlace;

const styles = StyleSheet.create({});
