import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

const Hashit = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#292c30", height: "100%", padding: 16 }}
    >
      <Image
        style={{ height: "70%", width: "90%", alignSelf: "center" }}
        source={require("../../assets/art11.jpg")}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 30,
          color: "white",
          alignSelf: "center",
          fontWeight: "800",
        }}
      >
        HashIT Social
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "gray",
          alignSelf: "center",
          fontWeight: "200",
          marginTop: 22,
          width: "80%",
          textAlign: "center",
        }}
      >
        Coming Soon to Amplify Your Social Experience!
      </Text>

      <View
        style={{
          alignSelf: "center",
          backgroundColor: "#9d783c",
          padding: 8,
          paddingVertical: 4,
          borderRadius: 8,
          marginTop: "20%",
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "700", color: "orange" }}>
          Coming Soon
        </Text>
      </View>

      <View style={{ padding: 22 }} />
    </SafeAreaView>
  );
};

export default Hashit;

const styles = StyleSheet.create({});
