import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "react-native-raw-bottom-sheet";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const statesData = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const Address = () => {
  const bottomSheetRef = useRef(null);
  const [selectedState, setSelectedState] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current.close();
  };

  const handleStateSelection = (state) => {
    setSelectedState(state);
    closeBottomSheet();
  };

  const filteredStates = statesData.filter((state) =>
    state.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <SafeAreaView style={{ backgroundColor: "#fefefe", padding: 16, flex: 1 }}>
      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <View>
        <View
          style={{ alignSelf: "flex-start", paddingTop: "10%", width: "95%" }}
        >
          <Text style={{ fontWeight: "700", fontSize: 17 }}>
            Whats Your House Address??
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 13,
              color: "#a9acab",
            }}
          >
            Please use your current residential address
          </Text>
        </View>

        {/* Form */}
        <View style={{ paddingTop: 32, gap: 16 }}>
          {/* State */}
          <View>
            <Text style={{ paddingBottom: 8 }}>State</Text>
            <Pressable
              onPress={openBottomSheet}
              style={[styles.inputContainer, styles.dropdpwn]}
            >
              <Text style={{ fontWeight: "200", color: "gray" }}>
                {selectedState || "Select State"}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            </Pressable>
            <BottomSheet
              ref={bottomSheetRef}
              closeOnDragDown
              height={600}
              customStyles={{
                container: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                },
              }}
            >
              <View style={{ padding: 16 }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "lightgray",
                    marginBottom: 16,
                    paddingVertical: 8,
                    position: "relative",
                    paddingHorizontal: 56,
                    borderRadius: 12,
                  }}
                >
                  <AntDesign
                    name="search1"
                    size={24}
                    color="grey"
                    style={{ position: "absolute", top: "40%", left: "10%" }}
                  />
                  <TextInput
                    placeholder="Search"
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                  />
                </View>

                <FlatList
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{}}
                  data={filteredStates}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <Pressable
                      onPress={() => handleStateSelection(item)}
                      style={{
                        borderBottomColor: "lightgray",
                        borderBottomWidth: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          paddingVertical: 8,
                          fontWeight: "800",
                          textAlign: "center",
                          marginVertical: 6,
                        }}
                      >
                        {item}
                      </Text>
                    </Pressable>
                  )}
                />
              </View>
            </BottomSheet>
          </View>

          {/* City */}
          <View>
            <Text style={{ paddingBottom: 8 }}>City</Text>
            <Pressable style={[styles.inputContainer, styles.dropdpwn]}>
              <Text style={{ fontWeight: "200", color: "gray" }}>
                Select LGA
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            </Pressable>
          </View>

          {/* House Number */}
          <View>
            <Text style={{ paddingBottom: 8 }}>House Number</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter your house number"
                style={styles.input}
                keyboardType="numeric"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Street Name */}
          <View>
            <Text style={{ paddingBottom: 8 }}>Street Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter your street name"
                style={styles.input}
                keyboardType="numeric"
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>

        <View style={{ height: 32 }} />
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
      </View>
    </SafeAreaView>
  );
};

export default Address;

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
  dropdpwn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
