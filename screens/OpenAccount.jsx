import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const OpenAccount = () => {
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#000000" }}>
      <View
        style={{
          padding: 16,
          display: "flex",
        }}
      >
        <View style={{ alignSelf: "center", paddingTop: "10%", width: "90%" }}>
          <Text
            style={{
              color: "#dadada",
              fontSize: 28,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Powerful Social Engagement Community
          </Text>
        </View>
        <View style={{ alignSelf: "center", paddingTop: "20%" }}>
          <Image
            style={{ height: 270, width: 270 }}
            source={require("../assets/hash.jpg")}
            resizeMode="cover"
          />
        </View>

        <View style={{ paddingTop: "20%", gap: 8 }}>
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
              }}
            >
              <Text
                style={{
                  fontSize: 16, // Font size
                  fontWeight: "normal", // Font weight
                  color: "#fff", // Text color
                }}
              >
                Open An Account
              </Text>
            </View>
          </TouchableOpacity>

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
                backgroundColor: "#dadada",
              }}
            >
              <Text
                style={{
                  fontSize: 16, // Font size
                  fontWeight: "normal", // Font weight
                }}
              >
                Have an Account? Sign in
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OpenAccount;

const styles = StyleSheet.create({});
