import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fontisto, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

const ChooseOption = () => {
  return (
    <View style={{ height: 600, padding: 16 }}>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 16,
          fontWeight: "600",
          paddingBottom: 12,
        }}
      >
        Choose an option
      </Text>

      <View style={{ height: 0.5, backgroundColor: "lightgray" }} />
      <View style={{ padding: 12, marginTop: 12, gap: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View
            style={{
              padding: 16,
              backgroundColor: "#f4e8d2",
              borderRadius: 12,
            }}
          >
            <Fontisto name="arrow-right" size={24} color="orange" />
          </View>
          <View>
            <Text style={{ fontWeight: "800" }}>Bank Transfer</Text>
            <Text style={{ lineHeight: 22, fontWeight: "200", fontSize: 10 }}>
              Make a transfer to any bank account
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View
            style={{
              padding: 16,
              paddingHorizontal: 20,
              backgroundColor: "rgba(0, 255, 0, 0.3)",
              borderRadius: 12,
            }}
          >
            <Octicons name="device-mobile" size={24} color="green" />
          </View>
          <View>
            <Text style={{ fontWeight: "800" }}>Buy Airtime</Text>
            <Text style={{ lineHeight: 22, fontWeight: "200", fontSize: 10 }}>
              Recharge your phones easily
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View
            style={{
              padding: 16,
              backgroundColor: "rgba(255, 0, 0, 0.3)",
              borderRadius: 12,
            }}
          >
            <MaterialCommunityIcons name="antenna" size={24} color="red" />
          </View>
          <View>
            <Text style={{ fontWeight: "800" }}>Buy Data</Text>
            <Text style={{ lineHeight: 22, fontWeight: "200", fontSize: 10 }}>
              Recharge your phones easily
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <View
            style={{
              padding: 16,
              backgroundColor: "#f4e8d2",
              borderRadius: 12,

              paddingHorizontal: 17,
            }}
          >
            <Octicons name="checklist" size={24} color="orange" />
          </View>
          <View>
            <Text style={{ fontWeight: "800" }}>Earn</Text>
            <Text style={{ lineHeight: 22, fontWeight: "200", fontSize: 10 }}>
              Perform tasks and earn
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChooseOption;

const styles = StyleSheet.create({});
