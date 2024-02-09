import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialIcons,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

const More = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#dbd5d8", height: "100%" }}>
      <View
        style={{
          backgroundColor: "#315af8",
          height: 200,
          padding: 16,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          position: "relative",
        }}
      >
        <Text style={{ fontSize: 17, color: "white", fontWeight: "700" }}>
          MORE
        </Text>
        <View
          style={{
            position: "absolute",
            height: 155,
            alignSelf: "center",
            backgroundColor: "white",
            width: "99.5%",
            bottom: "-20%",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            padding: 16,
          }}
        >
          <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
            <Image
              style={{ height: 60, width: 70, borderRadius: 8 }}
              source={require("../../assets/face.jpeg")}
              resizeMode="cover"
            />

            <Text style={{ fontWeight: "700", fontSize: 16 }}>New User</Text>
            <MaterialIcons name="verified" size={18} color="black" />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              alignSelf: "center",
              paddingVertical: 18,
              backgroundColor: "#131416",
              width: "100%",
              justifyContent: "center",
              marginTop: 22,
              borderRadius: 18,
            }}
          >
            <Feather name="edit" size={18} color="white" />
            <Text style={{ color: "white", fontWeight: "600" }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 32,
          marginTop: 44,
          margin: 16,
          borderRadius: 8,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <FontAwesome name="bank" size={24} color="black" />
          <Text style={{ fontWeight: "700", fontSize: 12 }}>
            Account Information
          </Text>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 32,
          marginTop: 12,
          margin: 16,
          borderRadius: 8,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Octicons name="shield-check" size={24} color="black" />
          <Text style={{ fontWeight: "700", fontSize: 12 }}>Security</Text>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 32,
          marginTop: 12,
          margin: 16,
          borderRadius: 8,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <MaterialCommunityIcons
            name="comment-question-outline"
            size={24}
            color="black"
          />
          <Text style={{ fontWeight: "700", fontSize: 12 }}>
            Help & Support
          </Text>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            alignSelf: "center",
            paddingVertical: 18,
            backgroundColor: "#a69da1",
            width: "100%",
            justifyContent: "center",
            marginTop: 22,
            borderRadius: 18,
          }}
        >
          <Image
            style={{ height: 20, width: 20 }}
            source={require("../../assets/heart.png")}
            resizeMode="cover"
          />
          <Text style={{ color: "red", fontWeight: "600" }}>
            Delete Account
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            alignSelf: "center",
            paddingVertical: 18,
            backgroundColor: "#131416",
            width: "100%",
            justifyContent: "center",
            marginTop: 22,
            borderRadius: 18,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default More;

const styles = StyleSheet.create({});
