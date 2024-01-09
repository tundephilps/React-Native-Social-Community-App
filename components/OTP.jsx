import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Keyboard } from "react-native";
import OTPInput from "./OTPInput";
//import { ButtonContainer, ButtonText } from "./components/OTP/styles";

export default function OTP() {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  return (
    <Pressable onPress={Keyboard.dismiss}>
      <View
        style={{
          // backgroundColor: "#141414",

          backgroundColor: !isPinReady ? "#141414" : "#32b65f",
          paddingVertical: 30,
          borderRadius: 12,
        }}
      >
        <OTPInput
          code={otpCode}
          setCode={setOTPCode}
          maximumLength={maximumCodeLength}
          setIsPinReady={setIsPinReady}
        />

        <View
          disabled={!isPinReady}
          style={
            {
              //   backgroundColor: !isPinReady ? "grey" : "#000000",
            }
          }
        >
          {/* <Text
          style={{
            color: !isPinReady ? "blue" : "#EEEEEE",
          }}
        >
          Login
        </Text> */}
        </View>
      </View>
      <StatusBar style="auto" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
