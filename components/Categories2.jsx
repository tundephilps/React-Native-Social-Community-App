import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import TabsLine from "./TabsLine";

const Categories2 = () => {
  return (
    <View style={{ paddingVertical: 16 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#7b2dfa",
            padding: 10,
            borderRadius: 6,
          }}
        >
          <FontAwesome5 name="copy" size={18} color="white" />
          <Text style={{ fontSize: 10, fontWeight: "400", color: "white" }}>
            Copy store Link
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 6,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: 10,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: "gray",
          }}
        >
          <Ionicons name="add-circle-outline" size={18} color="black" />

          <Text style={{ fontWeight: "400", fontSize: 10 }}>New Product</Text>
        </View>
      </View>

      <TabsLine />
    </View>
  );
};

export default Categories2;

const styles = StyleSheet.create({});
