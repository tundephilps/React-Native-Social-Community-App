import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ backgroundColor: "#fefefe", height: "100%", padding: 16 }}
    >
      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ alignSelf: "center", paddingTop: "10%" }}>
        <Image
          style={{ height: 80, width: 80, borderRadius: 99 }}
          source={require("../assets/icon.webp")}
          resizeMode="cover"
        />
      </View>
      <View style={{ alignSelf: "center", paddingTop: "10%" }}>
        <Text style={{ fontWeight: "700", fontSize: 17, textAlign: "center" }}>
          Now Login to start 🤩
        </Text>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 18,
            textAlign: "center",
            color: "#a9acab",
          }}
        >
          Provide your correct login details
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
      {/* Password Input */}
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
      <Text style={{ alignSelf: "flex-end", fontWeight: "600" }}>
        Forget Password
      </Text>

      <View style={{ height: "25%" }} />
      <TouchableOpacity onPress={() => navigation.navigate("MyTabs")}>
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
            Log In
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignSelf: "center" }}>
        <Text style={{ fontWeight: "300", fontSize: 12, paddingTop: 8 }}>
          Dont have an Account?
          <Text style={{ color: "#7a9a99", fontWeight: "700", color: "blue" }}>
            {" "}
            Signup Instead
          </Text>{" "}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
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
});
