import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FontAwesome,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

//import { LinearGradient } from 'expo-linear-gradient';
//import MaskedView from '@react-native-masked-view/masked-view';

const Cards = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#e8e8e8", height: "100%" }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#000000",
            height: 200,
            position: "relative",
            padding: 16,
          }}
        >
          <View style={{ display: "flex", gap: 12, paddingTop: 16 }}>
            <View
              style={{
                paddingHorizontal: 12,
                padding: 16,
                backgroundColor: "#3d4250",
                alignSelf: "flex-start",
                borderRadius: 22,
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
              }}
            >
              <FontAwesome name="credit-card" size={14} color="gray" />
              <Text style={{ fontWeight: 300, color: "green", fontSize: 10 }}>
                Virtual Card creation
              </Text>
            </View>

            <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
              Choose card type
            </Text>
            <Text style={{ color: "gray" }}>Please make a selection below</Text>
          </View>

          <View style={{ position: "absolute", right: "-5%" }}>
            <Image
              style={{ height: 200, width: 200 }}
              source={require("../../assets/art10.jpg")}
              resizeMode="contain"
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            margin: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 12,
            borderRadius: 6,
          }}
        >
          <View>
            <Text style={{ fontWeight: "600" }}>Naira Card</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              //    backgroundColor: "blue",
              width: "25%",
            }}
          >
            <Image
              style={{ height: 30, width: "60%" }}
              source={require("../../assets/verve.png")}
              resizeMode="cover"
            />
            <Text style={{ fontSize: 20, fontWeight: "700" }}>₦</Text>
          </View>
        </View>

        <Text style={{ alignSelf: "center", fontWeight: "300", color: "gray" }}>
          Only limited to Nigerian currency and Nigerians
        </Text>

        <Text
          style={{ fontSize: 10, fontWeight: "700", margin: 16, color: "gray" }}
        >
          Issuing Fee
        </Text>
        <View
          style={{
            marginHorizontal: 16,
            backgroundColor: "rgba(173, 216, 230, 0.5)",
            padding: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            borderRadius: 6,
          }}
        >
          <AntDesign name="infocirlce" size={18} color="blue" />
          <Text style={{ fontWeight: "200", width: "90%", fontSize: 12 }}>
            Payment for card issuing and delivery is final and cannot be
            refunded
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            padding: 12,
            paddingVertical: 16,
            margin: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 6,
          }}
        >
          <View style={{ flexDirection: "row", gap: 12 }}>
            <Ionicons name="cash-outline" size={24} color="black" />
            <View>
              <Text style={{ fontSize: 10, fontWeight: "200" }}>
                Charge Fee
              </Text>
              <Text style={{ fontWeight: "700", fontSize: 16 }}>N200</Text>
            </View>
          </View>

          <Image
            style={{ height: 20, width: "15%" }}
            source={require("../../assets/verve.png")}
            resizeMode="cover"
          />
        </View>

        <Text style={{ marginHorizontal: 16, marginVertical: 4 }}>
          Benefits
        </Text>
        <View
          style={{
            backgroundColor: "white",
            padding: 16,
            marginHorizontal: 16,
            borderRadius: 6,
            gap: 12,
          }}
        >
          {/* Card */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
            <View
              style={{
                backgroundColor: " rgba(173, 216, 230, 0.5);",
                padding: 6,
                borderRadius: 6,
              }}
            >
              <MaterialCommunityIcons
                name="car-speed-limiter"
                size={24}
                color="blue"
              />
            </View>
            <View style={{ width: "100%", gap: 6 }}>
              <Text style={{ fontWeight: "700" }}>Usable Across Nigeria</Text>
              <Text style={{ fontSize: 10 }}>Across all 36 states</Text>
              <View
                style={{
                  height: 1,
                  width: "85%",
                  backgroundColor: "lightgray",
                }}
              />
            </View>
          </View>
          {/* Card */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
            <View
              style={{
                backgroundColor: " rgba(144, 238, 144, 0.5)",
                padding: 6,
                borderRadius: 6,
              }}
            >
              <AntDesign name="shoppingcart" size={24} color="green" />
            </View>
            <View style={{ width: "100%", gap: 6 }}>
              <Text style={{ fontWeight: "700" }}>
                Online Shopping/Payments
              </Text>
              <Text style={{ fontSize: 10 }}>Shop on any platform online</Text>
              <View
                style={{
                  height: 1,
                  width: "85%",
                  backgroundColor: "lightgray",
                }}
              />
            </View>
          </View>
          {/* Card */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
            <View
              style={{
                backgroundColor: "rgba(255, 99, 71, 0.5)",
                padding: 6,
                borderRadius: 6,
              }}
            >
              <MaterialCommunityIcons name="television" size={24} color="red" />
            </View>
            <View style={{ width: "100%", gap: 6 }}>
              <Text style={{ fontWeight: "700" }}>Entertainment</Text>
              <Text style={{ fontSize: 10 }}>
                Pay for any entertainment stuff
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{ marginHorizontal: 16, marginVertical: 16 }}
          onPress={() => {
            /* handle onPress */
          }}
        >
          <View
            style={{
              backgroundColor: "gray", // Background color
              marginTop: 6, // Margin top
              paddingVertical: 18,
              paddingHorizontal: 18,

              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16, // Font size
                fontWeight: "normal", // Font weight
                color: "#fff", // Text color
              }}
            >
              Get Virtual Hash Naira Card
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cards;

const styles = StyleSheet.create({});
