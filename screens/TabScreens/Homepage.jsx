import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Slides from "../../components/Slides";
import DebitCardsList from "../../components/DebitCardsList";

const data = [1]; // Dummy data, you can use any data here

const renderItem = ({ item }) => (
  <>
    <View
      style={{
        backgroundColor: "#7a2ef6",
        padding: 16,
        borderRadius: 16,
        position: "relative",
        width: 300,
        marginRight: 6,
      }}
    >
      <View style={{ gap: 12, paddingBottom: 22 }}>
        <Text style={{ fontSize: 19, color: "white", fontWeight: "700" }}>
          Earn by performing tasks
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "white",
            width: "80%",
            fontWeight: "200",
          }}
        >
          Earn steady daily income by performing social media tasks such as
          following, liking, commenting sharing, retweeting etc..
        </Text>
        <View
          style={{
            paddingHorizontal: 32,
            padding: 12,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 16,
            alignSelf: "flex-start",
          }}
        >
          <Text style={{ color: "white", fontWeight: "300", fontSize: 12 }}>
            Activate now
          </Text>
        </View>
      </View>
      <Image
        style={{
          height: 140,
          width: 90,
          bottom: "0%",
          right: "0%",
          position: "absolute",
          borderRadius: 12,
        }}
        source={require("../../assets/art1.jpg")}
        resizeMode="cover"
      />
    </View>

    {/* Card */}
    <View
      style={{
        backgroundColor: "#f3315f",
        padding: 16,
        borderRadius: 16,
        position: "relative",
        width: 300,

        marginRight: 6,
      }}
    >
      <View style={{ gap: 12, paddingBottom: 22 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Text style={{ fontSize: 19, color: "white", fontWeight: "700" }}>
            Advertisement
          </Text>
          <View
            style={{
              padding: 8,
              backgroundColor: "green",
              borderRadius: 16,
            }}
          >
            <Text style={{ fontSize: 12, color: "white", fontWeight: "300" }}>
              Active
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 10,
            color: "white",
            width: "70%",
            fontWeight: "200",
          }}
        >
          Get people to repost your adverts on their social media on your behalf
          or advertise directly on the hashIT platform
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#000000",
            padding: 4,
            borderRadius: 12,
            gap: 7,
            alignSelf: "flex-start",
          }}
        >
          <Feather name="check-circle" size={14} color="gray" />
          <Text style={{ color: "white", fontWeight: "200", fontSize: 10 }}>
            StartNow
          </Text>
        </View>
        <View
          style={{
            borderColor: "lightgray",
            borderRadius: 16,
            alignSelf: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "300", fontSize: 12 }}>
            Advertise{"   "}
            <FontAwesome name="long-arrow-right" size={14} color="white" />
          </Text>
        </View>
      </View>
      <Image
        style={{
          height: 180,
          width: 90,
          bottom: "5%",
          right: "0%",
          position: "absolute",
          borderRadius: 12,
        }}
        source={require("../../assets/art2.jpg")}
        resizeMode="cover"
      />
    </View>

    {/* Card */}
    <View
      style={{
        backgroundColor: "#7920aa",
        padding: 16,
        borderRadius: 16,
        position: "relative",
        width: 300,
      }}
    >
      <View style={{ gap: 12, paddingBottom: 22 }}>
        <Text style={{ fontSize: 19, color: "white", fontWeight: "700" }}>
          Earn by reselling products
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "white",
            width: "60%",
            fontWeight: "200",
          }}
        >
          Earn up to N150,000 monthly on sales commision
        </Text>
        <View
          style={{
            paddingHorizontal: 32,
            padding: 12,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 16,
            alignSelf: "flex-start",
          }}
        >
          <Text style={{ color: "white", fontWeight: "300", fontSize: 12 }}>
            Resell Products
          </Text>
        </View>
      </View>
      <Image
        style={{
          height: 140,
          width: 120,
          bottom: "0%",
          right: "0%",
          position: "absolute",
          borderRadius: 12,
          zIndex: -1,
        }}
        source={require("../../assets/art3.jpg")}
        resizeMode="cover"
      />
    </View>
  </>
);

const Homepage = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#fefefe", height: "100%", padding: 16 }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "#000000",
            flexDirection: "row",
            padding: 12,
            gap: 12,
            borderRadius: 8,
          }}
        >
          <Image
            style={{ height: 20, width: 20, borderRadius: 50 }}
            source={require("../../assets/face.jpeg")}
            resizeMode="contain"
          />
          <Text style={{ color: "white", fontWeight: "200" }}>#NewUser</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="credit-card-scan-outline"
              size={24}
              color="#3e71f1"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Balance */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignSelf: "center",
            paddingTop: 22,
            gap: 12,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Text style={{ fontSize: 12, fontWeight: "300" }}>
              Dashboard Balance
            </Text>
            <Entypo name="eye" size={18} color="black" />
          </View>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <Text style={{ fontSize: 22 }}>₦</Text>
            <Text style={{ fontSize: 32, fontWeight: "700" }}>
              0.<Text style={{ fontSize: 16 }}>00</Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                textDecorationLine: "underline",
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              Account limit
            </Text>
          </View>
        </View>

        {/* Status */}
        <View
          style={{
            backgroundColor: "#0f1013",
            padding: 18,
            paddingHorizontal: 24,
            borderRadius: 12,
            marginTop: 12,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Ionicons name="add-circle" size={16} color="white" />
            <Text style={{ color: "#f1f2f5", fontWeight: "300", fontSize: 12 }}>
              Account
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={16}
              color="white"
            />
            <Text style={{ color: "#f1f2f5", fontWeight: "300", fontSize: 12 }}>
              Quick actions
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Feather name="arrow-up-circle" size={16} color="white" />
            <Text style={{ color: "#f1f2f5", fontWeight: "300", fontSize: 12 }}>
              More
            </Text>
          </View>
        </View>

        <View style={{ height: 32 }} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 22,
          }}
        >
          <Text style={{ color: "black", fontWeight: "700" }}>Shortcut</Text>
          <Text style={{ color: "#3e71f1", fontWeight: "300" }}>See All</Text>
        </View>

        {/* Slide */}
        <Slides />

        {/* Verification */}
        <View
          style={{
            backgroundColor: "#edeefb",
            padding: 16,
            borderRadius: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 42,
          }}
        >
          <View style={{ width: "60%" }}>
            <Text style={{ fontSize: 18, fontWeight: "800" }}>
              Complete Verification
            </Text>
            <Text style={{ fontWeight: "200", fontSize: 10, color: "gray" }}>
              Its important you complete the KYC so you can enjoy unlimited
              offers.
            </Text>
            <View
              style={{
                backgroundColor: "#305bf4",
                paddingVertical: 12,
                paddingHorizontal: 42,
                borderRadius: 16,
                alignSelf: "flex-start",
                marginTop: 22,
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>
                Complete now
              </Text>
            </View>
          </View>
          <View style={{ display: "flex" }}>
            <Image
              style={{ height: 70, width: 70 }}
              source={require("../../assets/badge.jpg")}
              resizeMode="contain"
            />
            <Text style={{ fontWeight: "600", color: "gray", fontSize: 12 }}>
              1 of 5 Completed
            </Text>
          </View>
        </View>

        <View style={{ height: 12 }} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 22,
          }}
        >
          <Text style={{ color: "black", fontWeight: "700" }}>Revenue</Text>
        </View>

        {/* FlatList */}
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.toString()}
          renderItem={renderItem}
        />

        {/* Transaction */}
        <View style={{ height: 12 }} />
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingVertical: 32,
          }}
        >
          <Text style={{ fontWeight: "200", fontWeight: "700" }}>History</Text>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "200", marginRight: 25 }}>Filter</Text>
            <Ionicons name="filter" size={14} color="red" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#e8e8e8",
            borderRadius: 12,
            height: 160,
            justifyContent: "center",
          }}
        >
          <View style={{ alignSelf: "center", alignItems: "center", gap: 6 }}>
            <Fontisto name="arrow-swap" size={24} color="gray" />
            <Text style={{ fontWeight: "700" }}>
              You have performed no transaction
            </Text>
            <Text style={{ fontSize: 10, color: "grey" }}>
              Your transaction will appear here
            </Text>
          </View>
        </View>

        <View style={{ height: 12 }} />
        <Text style={{ paddingVertical: 12, fontWeight: "700" }}>
          HashTrybe
        </Text>
        <View
          style={{
            backgroundColor: "#000000",
            borderRadius: 12,
            padding: 22,
            paddingVertical: 26,
            position: "relative",
          }}
        >
          <Image
            style={{
              height: 200,
              width: 120,
              position: "absolute",
              bottom: "-30%",
              right: "10%",
            }}
            source={require("../../assets/art4.jpg")}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 10,
              color: "white",
              width: "50%",
              fontWeight: "200",
              lineHeight: 16,
            }}
          >
            Meet new people share all you want expressively-{" "}
            {"                "}
            <Text style={{ fontWeight: "600" }}>
              {" "}
              Connect Socialize, Inspire!{" "}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              width: "50%",
              fontWeight: "700",
            }}
          >
            Join the HashTrybe
          </Text>
          <View
            style={{
              paddingHorizontal: 18,
              paddingVertical: 3,
              backgroundColor: "rgba(0, 0, 210, 0.4);",
              alignSelf: "flex-start",
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "blue", fontWeight: "100", fontSize: 10 }}>
              Coming Soon
            </Text>
          </View>
        </View>

        <Text style={{ paddingVertical: 16, fontWeight: "700" }}>
          Debit Cards
        </Text>
        <DebitCardsList />

        <Text style={{ paddingVertical: 16, fontWeight: "700" }}>
          Opportunities
        </Text>
        <View
          style={{
            backgroundColor: "#c6922a",
            padding: 14,
            borderRadius: 8,
            flexDirection: "row",
            gap: 22,
          }}
        >
          <Image
            style={{ height: 140, width: 100 }}
            source={require("../../assets/art8.jpg")}
            resizeMode="cover"
          />
          <View>
            <Text style={{ fontSize: 32, color: "white", width: "70%" }}>
              Win big HashITfest
            </Text>
            <Text style={{ color: "white", width: "75%" }}>
              Join the HashIT fest and stand a chance to win up to
            </Text>
            <Text style={{ color: "white", fontSize: 19, fontWeight: "900" }}>
              Win N1,000,000
            </Text>
          </View>
        </View>

        <View
          style={{ padding: 32, alignSelf: "center", alignItems: "center" }}
        >
          <Text style={{ fontWeight: "600" }}>HashIT App Ltd</Text>
          <Text style={{ fontWeight: "200", color: "gray" }}>
            App version 1.1.2
          </Text>
        </View>

        <View style={{ padding: 22 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
