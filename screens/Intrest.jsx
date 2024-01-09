import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    image: require("../assets/music.jpg"),
    label: "Music",
    value: "Music",
  },
  {
    id: 2,
    image: require("../assets/entertain.jpg"),
    label: "Entertainment",
    value: "Entertainment",
  },
  {
    id: 3,
    image: require("../assets/sports.webp"),
    label: "Sport",
    value: "sport",
  },
  {
    id: 4,
    image: require("../assets/gaming.jpg"),
    label: "Gaming",
    value: "gaming",
  },
  {
    id: 5,
    image: require("../assets/fashion.jpg"),
    label: "Fashion & Beauty",
    value: "fashion",
  },
  {
    id: 6,
    image: require("../assets/food.jpeg"),
    label: "Food",
    value: "food",
  },
  {
    id: 7,
    image: require("../assets/biz.jpg"),
    label: "Business & Finances",
    value: "Business",
  },
  {
    id: 8,
    image: require("../assets/arts.jpg"),
    label: "Arts & Culture",
    value: "Arts",
  },
  {
    id: 9,
    image: require("../assets/politics.jpg"),
    label: "Politics",
    value: "Politics",
  },
  {
    id: 10,
    image: require("../assets/news.jpg"),
    label: "News",
    value: "News",
  },
  {
    id: 11,
    image: require("../assets/tech.jpg"),
    label: "Technology",
    value: "Technology",
  },
  {
    id: 12,
    image: require("../assets/travel.jpeg"),
    label: "Travel",
    value: "Travel",
  },
];

const Intrest = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemPress = (item) => {
    const isSelected = selectedItems.some(
      (selectedItem) => selectedItem.id === item.id
    );

    if (isSelected) {
      const updatedItems = selectedItems.filter(
        (selectedItem) => selectedItem.id !== item.id
      );
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        {/* Header */}
        <View>
          <Text style={{ fontWeight: "700", fontSize: 22 }}>
            What are your Interest?
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 10,
              color: "#a9acab",
            }}
          >
            Select at least 3 Intrests to personalize your HashIT experince
          </Text>
        </View>
      </View>
      {/* Gallery */}

      <ScrollView style={{ height: "100%", padding: 16 }}>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 6,
          }}
        >
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={{ position: "relative", height: 100, width: "49%" }}
              onPress={() => handleItemPress(item)}
            >
              <Image
                style={{ width: "100%", height: "100%", borderRadius: 8 }}
                source={item.image}
                resizeMode="cover"
              />
              <Text
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  color: "white",
                  fontWeight: "800",
                  fontSize: 17,
                  top: "40%",
                }}
              >
                {item.label}
              </Text>
              {selectedItems.some(
                (selectedItem) => selectedItem.id === item.id
              ) && (
                <MaterialCommunityIcons
                  name="checkbox-marked-circle"
                  size={24}
                  color="white"
                  style={{ position: "absolute", right: "5%", top: "5%" }}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ padding: 20 }} />
      </ScrollView>

      <View style={{ padding: 16 }}>
        <TouchableOpacity
          onPress={() => {
            /* handle onPress */
          }}
        >
          <View
            style={{
              marginTop: 6, // Margin top
              paddingVertical: 12,
              paddingHorizontal: 18,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#5f5f5f",
              borderWidth: 1,
              backgroundColor: "#000000",
            }}
          >
            <Text
              style={{
                fontSize: 16, // Font size
                fontWeight: "normal", // Font weight
                color: "#fff", // Text color
              }}
            >
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Intrest;

const styles = StyleSheet.create({});
