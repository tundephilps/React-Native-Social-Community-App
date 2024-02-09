import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const Categories3 = () => {
  const [selectedTab, setSelectedTab] = useState("OpenOrder");

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View>
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
                    selectedTab === "OpenOrders" ? "#7b2dfa" : "lightgray",
                },
              ]}
              onPress={() => handleTabPress("OpenOrders")}
            >
              <Text
                style={{
                  color: selectedTab === "OpenOrders" ? "white" : "black",
                }}
              >
                Open Orders
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.bar,
                {
                  backgroundColor:
                    selectedTab === "CanceledOrders" ? "#7b2dfa" : "lightgray",
                },
              ]}
              onPress={() => handleTabPress("CanceledOrders")}
            >
              <Text
                style={{
                  color: selectedTab === "CanceledOrders" ? "white" : "black",
                }}
              >
                Canceled Orders
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
                  You do not have any cancelled order yet
                </Text>
              </View>

              <View style={{ padding: "25%" }} />
            </>
          )}
          {selectedTab === "CanceledOrders" && (
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
                  You do not have any cancelled order yet
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

export default Categories3;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "lightgray",
    paddingHorizontal: 18,
    padding: 8,
    alignItems: "flex-start",
    borderRadius: 6,
  },
});
