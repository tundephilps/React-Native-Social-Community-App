import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import OTP from "../components/OTP";

const OTPScreen = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#fefefe", height: "100%", padding: 16 }}
    >
      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{ fontSize: 17, fontWeight: "700", paddingTop: 30 }}>
        Confirm your email address
      </Text>
      <Text>
        We have sent a code to{" "}
        <Text style={{ fontWeight: "700" }}> username@gmail.com</Text> to
        confirm it belongs to you.
      </Text>
      <View style={{ height: "10%" }} />
      {/* OTP */}
      <OTP />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 28,
        }}
      >
        <Text style={{ fontWeight: "300", fontSize: 12 }}>
          Didint recieve OTP? Invalid OTP?
        </Text>
        <Text style={{ color: "#479dd8", fontWeight: "700" }}>Resend</Text>
      </View>

      <View style={{ height: "35%" }} />
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
            Verify
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({});
