import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Dropdown = () => {
  return (
    <View>
      <Text style={{ paddingBottom: 8 }}>State</Text>
      <Pressable style={[styles.inputContainer, styles.dropdpwn]}>
        <Text style={{ fontWeight: "200" }}>Select State</Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d5d7d6",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  dropdpwn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
