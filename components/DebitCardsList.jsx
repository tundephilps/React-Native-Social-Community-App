import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const data = [1]; // Dummy data, you can use any data here

const renderItem = ({ item }) => (
  <>
    <View
      style={{
        backgroundColor: "#195610",
        padding: 24,
        borderRadius: 16,
        position: "relative",
        width: 300,
        marginRight: 6,
      }}
    >
      <View style={{ gap: 12, paddingBottom: 2 }}>
        <Text style={{ fontSize: 19, color: "white", fontWeight: "700" }}>
          Get Naira Card
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "white",
            width: "50%",
            fontWeight: "200",
          }}
        >
          Spend withdraw with your naira card
        </Text>
        <View
          style={{
            paddingHorizontal: 32,
            padding: 12,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 16,
            alignSelf: "flex-start",
            zIndex: 50,
          }}
        >
          <Text style={{ color: "white", fontWeight: "300", fontSize: 12 }}>
            Get Naira Card
          </Text>
        </View>
      </View>
      <Image
        style={{
          height: 130,
          width: 130,
          bottom: "0%",
          right: "4%",
          position: "absolute",
          borderRadius: 12,
        }}
        source={require("../assets/art6.jpg")}
        resizeMode="cover"
      />
    </View>

    {/* Card */}
    <View
      style={{
        backgroundColor: "#323234",
        padding: 24,
        borderRadius: 16,
        position: "relative",
        width: 300,
        marginRight: 6,
      }}
    >
      <View style={{ gap: 12, paddingBottom: 2 }}>
        <Text
          style={{
            fontSize: 19,
            color: "white",
            fontWeight: "700",
            zIndex: 50,
          }}
        >
          Get USD Virtual Card
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "white",
            width: "50%",
            fontWeight: "200",
          }}
        >
          Shop worldwide with HashIT USD Virtual Cards
        </Text>
        <View
          style={{
            paddingHorizontal: 32,
            padding: 12,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 16,
            alignSelf: "flex-start",
            zIndex: 50,
          }}
        >
          <Text style={{ color: "white", fontWeight: "300", fontSize: 12 }}>
            Get USD Card
          </Text>
        </View>
      </View>
      <Image
        style={{
          height: 130,
          width: 130,
          bottom: "0%",
          right: "4%",
          position: "absolute",
          borderRadius: 12,
        }}
        source={require("../assets/art7.jpg")}
        resizeMode="cover"
      />
    </View>

    {/* Card */}
    <View
      style={{
        backgroundColor: "#7b2dfa",
        padding: 24,
        borderRadius: 16,
        position: "relative",
        width: 300,
        marginRight: 6,
      }}
    >
      <View style={{ gap: 12, paddingBottom: 2 }}>
        <Text
          style={{
            fontSize: 19,
            color: "white",
            fontWeight: "700",
            zIndex: 50,
          }}
        >
          Get Gift Cards
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "white",
            width: "80%",
            fontWeight: "200",
            zIndex: 50,
          }}
        >
          Unlock exclusive shopping experience with HashIt Gift Card
        </Text>
        <View
          style={{
            paddingHorizontal: 32,
            padding: 12,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 16,
            alignSelf: "flex-start",
            zIndex: 50,
          }}
        >
          <Text style={{ color: "white", fontWeight: "300", fontSize: 12 }}>
            Get Gift Card
          </Text>
        </View>
      </View>
      <Image
        style={{
          height: 110,
          width: 130,
          bottom: "0%",
          right: "-2%",
          position: "absolute",
          borderRadius: 12,
        }}
        source={require("../assets/art5.jpg")}
        resizeMode="contain"
      />
    </View>
  </>
);

const DebitCardsList = () => {
  return (
    <View>
      <Text style={{ paddingVertical: 16, fontWeight: "700" }}>
        Debit Cards
      </Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default DebitCardsList;

const styles = StyleSheet.create({});
