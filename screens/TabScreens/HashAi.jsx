import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const HashAi = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fefefe", height: "100%" }}>
      <ScrollView>
        <Image
          style={{ height: 280, width: "100%" }}
          source={require("../../assets/art9.jpg")}
          resizeMode="cover"
        />
        <View style={{ backgroundColor: "#181c25", paddingBottom: 32 }}>
          <View
            style={{
              borderColor: "white",
              borderWidth: 1,
              padding: 10,
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 22,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              A.I powered
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "700",
              color: "white",
              fontSize: 26,
              alignSelf: "center",
            }}
          >
            Explore the Power of{" "}
          </Text>
          <Text
            style={{
              color: "#b74a6a",
              fontWeight: "700",
              fontSize: 24,
              alignSelf: "center",
            }}
          >
            HASH A.I
          </Text>

          <View style={{ alignSelf: "center", paddingTop: 22, gap: 12 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#22252d",
                  borderRadius: 8,
                }}
              >
                <Ionicons name="infinite" size={18} color="gray" />
              </View>
              <Text style={{ color: "white", fontWeight: "200", fontSize: 12 }}>
                Unlimited A.I interaction
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#22252d",
                  borderRadius: 8,
                }}
              >
                <Ionicons name="leaf-outline" size={18} color="gray" />
              </View>
              <Text style={{ color: "white", fontWeight: "200", fontSize: 12 }}>
                More detailed responses
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#22252d",
                  borderRadius: 8,
                }}
              >
                <MaterialCommunityIcons
                  name="lightning-bolt-outline"
                  size={18}
                  color="gray"
                />
              </View>
              <Text style={{ color: "white", fontWeight: "200", fontSize: 12 }}>
                Faster Hash 4.0 A.I turbo model
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <View
                style={{
                  padding: 12,
                  backgroundColor: "#22252d",
                  borderRadius: 8,
                }}
              >
                <FontAwesome5 name="tv" size={16} color="gray" />
              </View>
              <Text style={{ color: "white", fontWeight: "200", fontSize: 12 }}>
                A.I Powered automation
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#353b4b",
              padding: 16,
              margin: 16,
              gap: 12,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "400",
                color: "white",
                fontSize: 16,
              }}
            >
              Claim Free Hash Credits
            </Text>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "400",
                color: "white",
                fontSize: 32,
              }}
            >
              #500
            </Text>
            <View
              style={{
                backgroundColor: "#2e59f6",
                paddingHorizontal: 80,
                paddingVertical: 22,
                borderRadius: 18,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                Claim Now!
              </Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 22 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HashAi;

const styles = StyleSheet.create({});
