import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";

const Address = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fefefe", padding: 16, flex: 1 }}>
      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{ alignSelf: "flex-start", paddingTop: "10%", width: "95%" }}
        >
          <Text style={{ fontWeight: "700", fontSize: 17 }}>
            Whats Your House Address??
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 13,
              color: "#a9acab",
            }}
          >
            Please use your current residential address
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Address;

const styles = StyleSheet.create({});
