import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const button = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        /* handle onPress */
      }}
    >
      <View
        style={{
          marginTop: 6, // Margin top
          paddingVertical: 12,
          paddingHorizontal: 18,
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#5f5f5f",
          borderWidth: 1,
          backgroundColor: "#000000",
        }}
      >
        <Text
          style={{
            fontSize: 16, // Font size
            fontWeight: "normal", // Font weight
            color: "#fff", // Text color
          }}
        >
          Log In
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default button;

const styles = StyleSheet.create({});
