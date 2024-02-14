import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];
const dialPadSize = width * 0.135;
const pinLength = 6;

export default function Passcode() {
  const navigation = useNavigation();

  const [pinCode, setPinCode] = useState([]);

  const DialPad = ({ onPress }) => {
    return (
      <View style={{ height: 420 }}>
        <FlatList
          data={dialPad}
          numColumns={3}
          style={{ flexGrow: 1 }}
          keyExtractor={(_, index) => index.toString()}
          scrollEnabled={false}
          columnWrapperStyle={{ gap: 45 }}
          contentContainerStyle={{ gap: 35 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  onPress(item);
                  // Check if the pin code length reaches the desired length
                  if (pinCode.length === pinLength) {
                    // Navigate to another screen (replace 'AnotherScreen' with the actual screen name)
                    navigation.navigate("MyTabs");
                  }
                }}
                disabled={item === ""}
              >
                <View
                  style={{
                    width: dialPadSize,
                    height: dialPadSize,
                    borderRadius: dialPadSize / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item === "del" ? (
                    <Ionicons
                      name="backspace-outline"
                      size={dialPadSize / 2}
                      color="black"
                    />
                  ) : item === "" ? (
                    <Ionicons
                      name="finger-print"
                      size={dialPadSize / 2}
                      color="white"
                    />
                  ) : (
                    <Text
                      style={{
                        fontSize: dialPadSize / 2,
                        color: "black",
                        fontWeight: "700",
                      }}
                    >
                      {item}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "white",
        alignItems: "center",
        paddingVertical: 32,
        //   justifyContent: "center",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 8,
            color: "black",
          }}
        >
          Create a Passcode
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "center",
            color: "black",
          }}
        >
          Sign into your app with your Passcode.
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 42,
            color: "black",
          }}
        >
          Please, dont share this Passcode with anyone
        </Text>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            paddingBottom: 32,
          }}
        >
          <FontAwesome5 name="lock" size={16} color="#33b45f" />
          <Text style={{ fontWeight: "700" }}>Passcode</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          marginBottom: 40,
          height: 30,
        }}
      >
        {[...Array(pinLength).keys()].map((index) => {
          const isSelected = !!pinCode[index];

          return (
            <View
              key={index}
              style={{
                width: 22,
                height: isSelected ? 22 : 22,
                borderRadius: 22,
                backgroundColor: isSelected ? "#33b45f" : "white",
                borderWidth: 1,
                borderColor: "lightgray",
              }}
            />
          );
        })}
      </View>
      <DialPad
        onPress={(item) => {
          if (item === "del") {
            setPinCode((prevCode) => prevCode.slice(0, prevCode.length - 1));
          } else if (typeof item === "number") {
            setPinCode((prevCode) => [...prevCode, item]);
          }
        }}
      />
    </SafeAreaView>
  );
}
