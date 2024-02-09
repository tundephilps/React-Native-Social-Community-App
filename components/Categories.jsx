import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import SellingItems from "./SellingItems";

const Categories = () => {
  const [selectedTab, setSelectedTab] = useState("Beauty");

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={{ marginVertical: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "400" }}>Categories</Text>
        <Text style={{ fontWeight: "400" }}>
          See More <Octicons name="arrow-right" size={18} color="black" />
        </Text>
      </View>

      {/* Tabs */}
      {/* <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 12,
          marginTop: 26,
        }}
      >
        <View style={styles.bar}>
          <Text>Beauty</Text>
        </View>
        <View style={styles.bar}>
          <Text>Gaming</Text>
        </View>
        <View style={styles.bar}>
          <Text>Computing</Text>
        </View>
        <View style={styles.bar}>
          <Text>Phones & Tablets</Text>
        </View>
        <View style={styles.bar}>
          <Text>Fashion</Text>
        </View>
        <View style={styles.bar}>
          <Text>Electronics</Text>
        </View>
      </View> */}
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
                  selectedTab === "Beauty" ? "#7b2dfa" : "lightgray",
              },
            ]}
            onPress={() => handleTabPress("Beauty")}
          >
            <Text
              style={{ color: selectedTab === "Beauty" ? "white" : "black" }}
            >
              Beauty
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bar,
              {
                backgroundColor:
                  selectedTab === "Gaming" ? "#7b2dfa" : "lightgray",
              },
            ]}
            onPress={() => handleTabPress("Gaming")}
          >
            <Text
              style={{ color: selectedTab === "Gaming" ? "white" : "black" }}
            >
              Gaming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bar,
              {
                backgroundColor:
                  selectedTab === "Computing" ? "#7b2dfa" : "lightgray",
              },
            ]}
            onPress={() => handleTabPress("Computing")}
          >
            <Text
              style={{ color: selectedTab === "Computing" ? "white" : "black" }}
            >
              Computing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bar,
              {
                backgroundColor:
                  selectedTab === "Phones" ? "#7b2dfa" : "lightgray",
              },
            ]}
            onPress={() => handleTabPress("Phones")}
          >
            <Text
              style={{ color: selectedTab === "Phones" ? "white" : "black" }}
            >
              Phones & Tablets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bar,
              {
                backgroundColor:
                  selectedTab === "Fashion" ? "#7b2dfa" : "lightgray",
              },
            ]}
            onPress={() => handleTabPress("Fashion")}
          >
            <Text
              style={{ color: selectedTab === "Fashion" ? "white" : "black" }}
            >
              Fashion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.bar,
              {
                backgroundColor:
                  selectedTab === "Electronics" ? "#7b2dfa" : "lightgray",
              },
            ]}
            onPress={() => handleTabPress("Electronics")}
          >
            <Text
              style={{
                color: selectedTab === "Electronics" ? "white" : "black",
              }}
            >
              Electronics
            </Text>
          </TouchableOpacity>
        </View>
        {selectedTab === "Beauty" && (
          <View>
            <SellingItems />
          </View>
        )}
        {selectedTab === "Gaming" && (
          <View>
            <SellingItems />
          </View>
        )}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "lightgray",
    paddingHorizontal: 16,
    padding: 8,
    alignItems: "flex-start",
    borderRadius: 6,
  },
});
