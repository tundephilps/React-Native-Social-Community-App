import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OpenAccount from "./screens/OpenAccount";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

export default function App() {
  return (
    <View>
      <SignUp />
      <StatusBar style="auto" />
    </View>
  );
}
