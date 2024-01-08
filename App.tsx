import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OpenAccount from "./screens/OpenAccount";

export default function App() {
  return (
    <View>
      <OpenAccount />
      <StatusBar style="auto" />
    </View>
  );
}
