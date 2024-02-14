import { StyleSheet, Text, View, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, FontAwesome, FontAwesome6 } from "react-native-vector-icons";

import OpenAccount from "../screens/OpenAccount";
import Homepage from "../screens/TabScreens/Homepage";
import Hashit from "../screens/TabScreens/Hashit";
import Cards from "../screens/TabScreens/Cards";
import MarketPlace from "../screens/TabScreens/MarketPlace";
import Login from "../screens/Login";
import More from "../screens/TabScreens/More";
import HashAi from "../screens/TabScreens/HashAi";
import SignUp from "../screens/SignUp";
import OTPScreen from "../screens/OTPScreen";
import AboutForm from "../screens/AboutForm";
import Address from "../screens/Address";
import Selfie from "../screens/Selfie";
import PhotoShoot from "../screens/PhotoShoot";
import Intrest from "../screens/Intrest";
import Passcode from "../screens/Passcode";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="OpenAccount"
      >
        <Stack.Screen name="OpenAccount" component={OpenAccount} />

        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="OTPScreen" component={OTPScreen} />

        <Stack.Screen name="AboutForm" component={AboutForm} />

        <Stack.Screen name="Address" component={Address} />

        <Stack.Screen name="Selfie" component={Selfie} />

        <Stack.Screen name="Intrest" component={Intrest} />

        <Stack.Screen name="Passcode" component={Passcode} />
        <Stack.Screen name="PhotoShoot" component={PhotoShoot} />
        <Stack.Screen name="MyTabs" component={MyTabs} />

        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",

          tabBarStyle: { position: "absolute" },
          tabBarLabelStyle: {
            fontWeight: "700", // Add this line to set fontWeight
            marginBottom: 6,
          },
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            if (route.name === "Home") {
              iconSource = focused
                ? require("../assets/home1.png")
                : require("../assets/home2.png");
            } else if (route.name === "HashIT Ai") {
              iconSource = focused
                ? require("../assets/magic2.png")
                : require("../assets/magic1.png");
            } else if (route.name === "Cards") {
              iconSource = focused
                ? require("../assets/card2.png")
                : require("../assets/card1.png");
            } else if (route.name === "HashIT") {
              iconSource = focused
                ? require("../assets/hash2.png")
                : require("../assets/hash1.png");
            } else if (route.name === "MarketPlace") {
              iconSource = focused
                ? require("../assets/market2.png")
                : require("../assets/market1.png");
            } else if (route.name === "More") {
              iconSource = focused
                ? require("../assets/grids1.png")
                : require("../assets/grids2.png");
            }

            return (
              <Image
                source={iconSource}
                style={{ height: 21, width: 21 }}
                resizeMode="contain"
              />
            ); // Use FontAwesome icon
          },
        })}
      >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="HashIT Ai" component={HashAi} />
        <Tab.Screen name="Cards" component={Cards} />
        <Tab.Screen name="HashIT" component={Hashit} />

        <Tab.Screen name="MarketPlace" component={MarketPlace} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
