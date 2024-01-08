import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [password2, setPassword2] = useState("");

  const [referral, setReferral] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#fefefe", padding: 16 }}>
      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%" }}
      >
        <View
          style={{ alignSelf: "flex-start", paddingTop: "10%", width: "80%" }}
        >
          <Text style={{ fontWeight: "700", fontSize: 17 }}>Sign Up</Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 13,
              color: "#a9acab",
            }}
          >
            Open your HashIT account in minutes, Your password must have at
            least 8 characters including letters and a number.
          </Text>
        </View>
        {/* Inputs */}

        <View style={{ height: "5%" }} />
        <View style={styles.inputContainer}>
          <Ionicons
            name="md-mail-outline"
            size={20}
            color="lightgray"
            style={styles.icon}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Phone Number */}
        <View>
          <Text style={{ paddingBottom: 8, paddingTop: 16 }}>Phone Number</Text>
          <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "lightgray",
                width: "20%",
                paddingVertical: 13,
                borderRadius: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  alignSelf: "center",
                }}
              >
                <Image
                  style={{ height: 18, width: 18, borderRadius: 99 }}
                  source={require("../assets/flag.png")}
                  resizeMode="cover"
                />
                <Text style={{ fontWeight: "500" }}>+234</Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "lightgray",
                width: "",
                paddingVertical: 8,
                borderRadius: 8,
                flex: 1,
                paddingHorizontal: 12,
              }}
            >
              <TextInput
                keyboardType="number-pad"
                placeholder="Number without the leading zero"
              />
            </View>
          </View>
        </View>

        {/* Password Input */}

        <Text style={{ paddingTop: 16, paddingBottom: 8 }}>Password</Text>
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="lock-outline"
            size={20}
            color="lightgray"
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 10, color: "gray", paddingBottom: 16 }}>
          Password must contain at least one uppercase letter, one lowercase
          leter, one numeric digit and one special character
        </Text>

        {/* Forget Password */}
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="lock-outline"
            size={20}
            color="lightgray"
            style={styles.icon}
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            value={password2}
            onChangeText={(text) => setPassword2(text)}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={{ height: 16 }} />
        {/* Referral */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Referral code (optional)"
            style={styles.input}
            value={referral}
            onChangeText={(text) => setReferral(text)}
            keyboardType="numeric"
            autoCapitalize="none"
          />
        </View>
        <Text style={{ fontSize: 10, color: "#000000" }}>
          Spread the vibe! Invite family and friends to share the vibe with your
          referral code.
        </Text>

        <View style={{ height: "5%" }} />
        <TouchableOpacity
          onPress={() => {
            /* handle onPress */
          }}
        >
          <View
            style={{
              marginTop: 6, // Margin top
              paddingVertical: 12,
              paddingHorizontal: 18,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#5f5f5f",
              borderWidth: 1,
              backgroundColor: "#000000",
            }}
          >
            <Text
              style={{
                fontSize: 16, // Font size
                fontWeight: "normal", // Font weight
                color: "#fff", // Text color
              }}
            >
              Next
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: "center", paddingTop: "20%", width: "80%" }}
        >
          <Text
            style={{
              fontWeight: "300",
              fontSize: 13,
              paddingTop: 8,
              textAlign: "center",
            }}
          >
            By tapping <Text style={{ fontWeight: "900" }}>"Next"</Text>,you
            agree to our
            <Text style={{ fontWeight: "900" }}>
              {" "}
              Terms & Conditions and Policy Privacy.
            </Text>
          </Text>
        </TouchableOpacity>
        <View style={{ padding: "20%" }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d5d7d6",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 13,
  },
  focus: {
    borderColor: "#000000",
  },
});
