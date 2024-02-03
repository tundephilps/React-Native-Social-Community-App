import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Image } from "react-native";

const data = [
  {
    id: "1",
    image: require("../assets/sim.png"),
    text: "Buy Airtime",
    route: "AirtimeScreen",
  },
  {
    id: "2",
    image: require("../assets/cash3.png"),
    text: "Send Money",
    route: "SendMoneyScreen",
    comingSoon: true,
  },
  {
    id: "3",
    image: require("../assets/wifi.png"),
    text: "Buy Data",
    route: "BuyDataScreen",
  },
  {
    id: "4",
    image: require("../assets/list.png"),
    text: "Utilities",
    route: "BuyDataScreen",
  },

  {
    id: "5",
    image: require("../assets/protect.png"),
    text: "Save",
    route: "BuyDataScreen",
    comingSoon: true,
  },

  {
    id: "6",
    image: require("../assets/loan.png"),
    text: "Loan",
    route: "BuyDataScreen",
    comingSoon: true,
  },

  {
    id: "7",
    image: require("../assets/list.png"),
    text: "Earn",
    route: "BuyDataScreen",
  },

  {
    id: "8",
    image: require("../assets/list.png"),
    text: "Crowd pool",
    route: "BuyDataScreen",
    comingSoon: true,
  },

  {
    id: "9",
    image: require("../assets/list.png"),
    text: "Social",
    route: "BuyDataScreen",
    comingSoon: true,
  },

  {
    id: "10",
    image: require("../assets/list.png"),
    text: "Market",
    route: "BuyDataScreen",
  },

  {
    id: "11",
    image: require("../assets/list.png"),
    text: "Advert",
    route: "BuyDataScreen",
  },
  {
    id: "12",
    image: require("../assets/list.png"),
    text: "Giveaway",
    route: "BuyDataScreen",
    comingSoon: true,
  },
];

const Slides = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        padding: 16,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: "#d2d5dd",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        borderRadius: 14,
        marginBottom: 10,
        marginRight: 8,
      }}
      onPress={() => navigation.navigate("")}
    >
      <Image
        source={item.image}
        style={{ width: 18, height: 18, marginRight: 8 }}
      />

      <Text style={{ fontSize: 10, fontWeight: "300" }}>{item.text}</Text>
      {item.comingSoon && (
        <View
          style={{
            backgroundColor: "#f4e8d2",
            padding: 8,
            paddingVertical: 4,
            borderRadius: 8,
            marginLeft: "auto",
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: "700", color: "orange" }}>
            Coming Soon
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default Slides;
