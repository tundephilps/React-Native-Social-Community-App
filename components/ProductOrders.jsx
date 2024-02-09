import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import TabsLine from "./TabsLine";
import Tabs from "./Tabs";

const ProductOrders = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View>
      <Text style={{ fontWeight: "700", marginBottom: 12 }}>
        Product Orders
      </Text>
      <View style={{ backgroundColor: "white", padding: 16, borderRadius: 6 }}>
        <View>
          <View
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: 12,
              marginTop: 26,
            }}
          >
            <TouchableOpacity
              style={[
                styles.bar,
                {
                  backgroundColor:
                    selectedTab === "All" ? "#7b2dfa" : "lightgray",
                },
              ]}
              onPress={() => handleTabPress("All")}
            >
              <Text
                style={{ color: selectedTab === "All" ? "white" : "black" }}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.bar,
                {
                  backgroundColor:
                    selectedTab === "New" ? "#7b2dfa" : "lightgray",
                },
              ]}
              onPress={() => handleTabPress("New")}
            >
              <Text
                style={{ color: selectedTab === "New" ? "white" : "black" }}
              >
                New
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.bar,
                {
                  backgroundColor:
                    selectedTab === "Pending" ? "#7b2dfa" : "lightgray",
                },
              ]}
              onPress={() => handleTabPress("Pending")}
            >
              <Text
                style={{ color: selectedTab === "Pending" ? "white" : "black" }}
              >
                Pending
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.bar,
                {
                  backgroundColor:
                    selectedTab === "Delivered" ? "#7b2dfa" : "lightgray",
                },
              ]}
              onPress={() => handleTabPress("Delivered")}
            >
              <Text
                style={{
                  color: selectedTab === "Delivered" ? "white" : "black",
                }}
              >
                Delivered
              </Text>
            </TouchableOpacity>
          </View>
          {selectedTab === "All" && (
            <>
              <View style={{ height: 130, alignItems: "center" }}>
                <Image
                  style={{
                    height: 120,
                    width: 120,
                    alignSelf: "center",
                    marginTop: "20%",
                  }}
                  source={require("../assets/art12.jpg")}
                  resizeMode="cover"
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "black",
                    fontWeight: "400",
                    alignSelf: "center",
                    paddingTop: "5%",
                  }}
                >
                  You do not have any Product yet
                </Text>
              </View>

              <View style={{ padding: "25%" }} />
            </>
          )}
          {selectedTab === "New" && (
            <>
              <View style={{ height: 130, alignItems: "center" }}>
                <Image
                  style={{
                    height: 120,
                    width: 120,
                    alignSelf: "center",
                    marginTop: "20%",
                  }}
                  source={require("../assets/art12.jpg")}
                  resizeMode="cover"
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "black",
                    fontWeight: "400",
                    alignSelf: "center",
                    paddingTop: "5%",
                  }}
                >
                  You do not have any Product yet
                </Text>
              </View>

              <View style={{ padding: "25%" }} />
            </>
          )}
        </View>
      </View>

      <View style={{ margin: "25%" }} />
    </View>
  );
};

export default ProductOrders;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "lightgray",
    paddingHorizontal: 18,
    padding: 8,
    alignItems: "flex-start",
    borderRadius: 6,
  },
});
