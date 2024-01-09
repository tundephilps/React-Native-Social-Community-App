import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OpenAccount from "./screens/OpenAccount";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import OTPScreen from "./screens/OTPScreen";
import OTPInput from "./components/OTPInput";
import AboutForm from "./screens/AboutForm";

export default function App() {
  return (
    <>
      <AboutForm />
      <StatusBar style="auto" />
    </>
  );
}
