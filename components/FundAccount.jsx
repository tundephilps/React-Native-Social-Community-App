import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const FundAccount = () => {
  return (
    <View style={{ height: 600, padding: 16 }}>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 16,
          fontWeight: "600",
          paddingBottom: 32,
        }}
      >
        FundAccount
      </Text>
      <View style={{ padding: 12, marginTop: 12, gap: 16 }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 12, color: "gray" }}>Account Name</Text>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              Tunde Philps
            </Text>
          </View>
          <View>
            <FontAwesome5 name="copy" size={24} color="blue" />
          </View>
        </View>
        <View style={{ height: 0.5, backgroundColor: "lightgray" }} />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 12, color: "gray" }}>Bank Name</Text>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>
              No Account Yet
            </Text>
          </View>
          <View>
            <FontAwesome5 name="copy" size={24} color="blue" />
          </View>
        </View>

        <View style={{ height: 0.5, backgroundColor: "lightgray" }} />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 12, color: "gray" }}>Account Number</Text>
            <Text style={{ fontSize: 15, fontWeight: "600" }}>000000000</Text>
          </View>
          <View>
            <FontAwesome5 name="copy" size={24} color="blue" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FundAccount;

const styles = StyleSheet.create({});
