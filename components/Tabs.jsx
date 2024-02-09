import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import DebitCardsList from "./DebitCardsList";
import Categories from "./Categories";
import Categories2 from "./Categories2";
import Categories3 from "./Categories3";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("yourFriends");

  const renderTabContent = () => {
    switch (activeTab) {
      case "yourFriends":
        return <Categories />;
      case "requests":
        return <Categories2 />;
      case "suggestions":
        return <Categories3 />;
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
            activeTab === "yourFriends" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("yourFriends")}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Feather name="home" size={14} color="gray" />
            <Text
              style={[
                styles.activeText,
                activeTab !== "yourFriends" && styles.words,
              ]}
            >
              Marketplace
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "requests" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("requests")}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Ionicons name="cube-sharp" size={14} color="gray" />
            <Text
              style={[
                styles.activeText,
                activeTab !== "requests" && styles.words,
              ]}
            >
              My Products
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "suggestions" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("suggestions")}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={14}
              color="gray"
            />
            <Text
              style={[
                styles.activeText,
                activeTab !== "suggestions" && styles.words,
              ]}
            >
              My Orders
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ paddingVertical: 12 }}
        showsVerticalScrollIndicator={false}
      >
        <DebitCardsList />
        {renderTabContent()}
      </ScrollView>
    </>
  );
};

export default Tabs;

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
    backgroundColor: "#000000",
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
  },
  activeText: {
    color: "white",
    fontWeight: "300",
  },
});
