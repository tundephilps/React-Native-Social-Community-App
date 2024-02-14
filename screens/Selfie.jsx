import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Selfie = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fefefe", padding: 16, flex: 1 }}>
      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", paddingTop: "10%", width: "95%" }}>
          <Text style={{ fontWeight: "700", fontSize: 17 }}>
            Profile Picture
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 12,
              color: "#a9acab",
            }}
          >
            Take a selfie or upload an image of yourself
          </Text>
          <View style={{ padding: "25%" }} />
          <Image
            style={{ height: 100, width: 300 }}
            source={require("../assets/Selfie.jpg")}
            resizeMode="contain"
          />
          <Text style={{ fontWeight: "300" }}>Take a Selfie</Text>
        </View>
        <View style={{ padding: "30%" }} />
        <TouchableOpacity onPress={() => navigation.navigate("PhotoShoot")}>
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
              Start
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Selfie;

const styles = StyleSheet.create({});
