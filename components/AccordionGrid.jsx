import React from "react";
import { Text, View } from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  Foundation,
  Fontisto,
  FontAwesome,
  SimpleLineIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";

const AccordionGrid = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        padding: 16,
        zIndex: -1,
        bottom: 20,
        borderRadius: 12,
        paddingTop: 42,
        paddingBottom: 42,

        flexWrap: "wrap",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <MaterialCommunityIcons
          name="file-code-outline"
          size={24}
          color="red"
        />
        <Text style={{ color: "white", fontSize: 10 }}>Buy Airtime</Text>
      </View>
      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <Ionicons name="cash-outline" size={24} color="blue" />
        <Text style={{ color: "white", fontSize: 10 }}>Send Money</Text>
      </View>
      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <MaterialCommunityIcons name="wifi" size={24} color="green" />
        <Text style={{ color: "white", fontSize: 10 }}>Buy Airtime</Text>
      </View>
      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <Foundation name="list-bullet" size={24} color="orange" />
        <Text style={{ color: "white", fontSize: 10 }}>Utilities</Text>
      </View>
      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <MaterialCommunityIcons
          name="shield-key-outline"
          size={24}
          color="#A10F7E"
        />
        <Text style={{ color: "white", fontSize: 10 }}>Save</Text>
      </View>
      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <MaterialCommunityIcons name="cash-multiple" size={24} color="blue" />
        <Text style={{ color: "white", fontSize: 10 }}>Loan</Text>
      </View>

      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <Fontisto name="arrow-return-left" size={24} color="green" />
        <Text style={{ color: "white", fontSize: 10 }}>Earn</Text>
      </View>
      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <FontAwesome name="users" size={24} color="orange" />
        <Text style={{ color: "white", fontSize: 10 }}>Crowd pool</Text>
      </View>
      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <SimpleLineIcons name="people" size={24} color="red" />
        <Text style={{ color: "white", fontSize: 10 }}>Social</Text>
      </View>

      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <AntDesign name="shoppingcart" size={24} color="blue" />
        <Text style={{ color: "white", fontSize: 10 }}>Market</Text>
      </View>
      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <Ionicons name="card-outline" size={24} color="red" />
        <Text style={{ color: "white", fontSize: 10 }}>Advert</Text>
      </View>
      <View
        style={{
          backgroundColor: "#161922",
          paddingVertical: 18,
          borderRadius: 18,
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          width: "30%",
        }}
      >
        <MaterialCommunityIcons name="hand-heart" size={24} color="purple" />
        <Text style={{ color: "white", fontSize: 10 }}>Giveaway</Text>
      </View>
      <View
        style={{
          position: "absolute",
          width: "100%",
          backgroundColor: "#161922",
          bottom: "-10%",
          borderRadius: 16,
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome5 name="robot" size={24} color="red" />
        <Text style={{ color: "white", paddingVertical: 23 }}>Hash A.I</Text>
      </View>
    </View>
  );
};

export default AccordionGrid;
