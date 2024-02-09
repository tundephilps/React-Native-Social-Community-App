import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const SellingItems = () => {
  return (
    <View style={{ marginTop: 26 }}>
      <Text style={{ fontWeight: "800" }}>Top Selling Items</Text>
      <View style={{ height: 300, alignItems: "center" }}>
        <Image
          style={{
            height: 120,
            width: 120,
            alignSelf: "center",
            marginTop: "20%",
          }}
          source={require("../assets/art12.jpg")}
          resizeMode="cover"
        />
        <Text
          style={{
            fontSize: 12,
            color: "black",
            fontWeight: "400",
            alignSelf: "center",
            paddingTop: "5%",
          }}
        >
          No Products
        </Text>
      </View>

      <Text style={{ fontWeight: "800" }}>Other Products</Text>
      <View style={{ height: 300, alignItems: "center" }}>
        <Image
          style={{
            height: 120,
            width: 120,
            alignSelf: "center",
            marginTop: "20%",
          }}
          source={require("../assets/art12.jpg")}
          resizeMode="cover"
        />
        <Text
          style={{
            fontSize: 12,
            color: "black",
            fontWeight: "400",
            alignSelf: "center",
            paddingTop: "5%",
          }}
        >
          No Products
        </Text>
      </View>

      <View style={{ padding: "25%" }} />
    </View>
  );
};

export default SellingItems;

const styles = StyleSheet.create({});
