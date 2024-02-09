import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Categories from "./Categories";
import SellingItems from "./SellingItems";
import AllProducts from "./AllProducts";
import ProductOrders from "./ProductOrders";

const TabsLine = () => {
  const [activeTab, setActiveTab] = useState("AllProducts");

  const renderTabContent = () => {
    switch (activeTab) {
      case "AllProducts":
        return <AllProducts />;
      case "Active":
        return <AllProducts />;
      case "Inactive":
        return <AllProducts />;

      case "Orders":
        return <ProductOrders />;
      default:
        return null;
    }
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "AllProducts" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("AllProducts")}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text
              style={[
                styles.activeText,
                activeTab !== "AllProducts" && styles.words,
              ]}
            >
              All Products (0)
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Active" && styles.activeTab]}
          onPress={() => setActiveTab("Active")}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text
              style={[
                styles.activeText,
                activeTab !== "Active" && styles.words,
              ]}
            >
              Active (0)
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Inactive" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Inactive")}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text
              style={[
                styles.activeText,
                activeTab !== "Inactive" && styles.words,
              ]}
            >
              Inactive(0)
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "Orders" && styles.activeTab]}
          onPress={() => setActiveTab("Orders")}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text
              style={[
                styles.activeText,
                activeTab !== "Orders" && styles.words,
              ]}
            >
              Product Orders
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ paddingVertical: 12 }}
        showsVerticalScrollIndicator={false}
      >
        {renderTabContent()}
      </ScrollView>
    </>
  );
};

export default TabsLine;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "#eee",
    marginVertical: 18,
    borderRadius: 16,
  },
  tabButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,

    borderRadius: 6,
    color: "white",
  },
  activeTab: {
    // backgroundColor: "#000000",
    borderBottomWidth: 3,
    borderBottomColor: "black",
    paddingHorizontal: 12,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  words: {
    color: "black",
    fontWeight: "300",
    fontSize: 10,
  },
  activeText: {
    color: "black",
    fontWeight: "300",
    marginBottom: 8,
    fontSize: 10,
  },
});
