import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Input = () => {
  return (
    <View>
      <Text style={{ paddingBottom: 8 }}>House Number</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your house number"
          style={styles.input}
          keyboardType="numeric"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#d5d7d6",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 13,
  },
});
