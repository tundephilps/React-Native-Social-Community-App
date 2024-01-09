import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OpenAccount from "./screens/OpenAccount";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import OTPScreen from "./screens/OTPScreen";
import OTPInput from "./components/OTPInput";
import AboutForm from "./screens/AboutForm";
import Address from "./screens/Address";
import Selfie from "./screens/Selfie";
import PhotoShoot from "./screens/PhotoShoot";

export default function App() {
  return (
    <>
      <PhotoShoot />
      <StatusBar style="auto" />
    </>
  );
}
