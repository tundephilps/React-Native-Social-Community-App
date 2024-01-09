import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Ionicons } from "@expo/vector-icons";

import { RadioButton } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";

const AboutForm = () => {
  const [firstName, setFirstName] = useState("");

  const [gender, setGender] = useState("");

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const data = ["Female", "Male"];

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  const onDateChange = (event, selectedDate) => {
    if (event.type === "set") {
      setDate(selectedDate || date);
    }

    closeDatePicker();
  };

  const renderRadioButtons = () => {
    return data.map((option) => (
      <Pressable
        key={option}
        onPress={() => {
          setGender(option);
          sheetRef.close();
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? "black"
              : gender === option
              ? "black"
              : "white",
            paddingHorizontal: 8,
            borderRadius: 8,
            marginVertical: 2,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: gender === option ? "white" : "black",
              fontWeight: "300",
            }}
          >
            {option}
          </Text>
          <RadioButton
            value={option}
            status={gender === option ? "checked" : "unchecked"}
            onPress={() => {
              setGender(option);
              sheetRef.close();
            }}
          />
        </View>
      </Pressable>
    ));
  };

  let sheetRef = React.createRef();

  return (
    <SafeAreaView style={{ backgroundColor: "#fefefe", padding: 16, flex: 1 }}>
      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{ alignSelf: "flex-start", paddingTop: "10%", width: "95%" }}
        >
          <Text style={{ fontWeight: "700", fontSize: 17 }}>
            Tell Us About Yourself
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 13,
              color: "#a9acab",
            }}
          >
            You can proceed without BVN for now, you will still need it later to
            make transactions
          </Text>
        </View>

        <View style={{ height: 20 }} />
        <View style={{ display: "flex", gap: 12 }}>
          {/* First Name */}

          <View>
            <Text style={{ paddingBottom: 8 }}>Legal First Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="First Name"
                style={styles.input}
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                keyboardType="default"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Middle Name */}

          <View>
            <Text style={{ paddingBottom: 8 }}>
              Legal Middle Name (optional)
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Middle Name"
                style={styles.input}
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                keyboardType="numeric"
                autoCapitalize="none"
              />
            </View>
          </View>
          {/* Last Name */}

          <View>
            <Text style={{ paddingBottom: 8 }}>Legal Last Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Last Name"
                style={styles.input}
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                keyboardType="numeric"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Gender */}

          <View>
            <Text style={{ paddingBottom: 8 }}>Gender</Text>
            <Pressable
              onPress={() => sheetRef.open()}
              style={[styles.inputContainer, styles.dropdpwn]}
            >
              <Text style={{ fontWeight: "200" }}>
                {gender || "Choose Gender"}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            </Pressable>
          </View>

          <RBSheet
            ref={(ref) => {
              sheetRef = ref;
            }}
            height={150}
            closeOnDragDown
            closeOnPressMask
            customStyles={{
              wrapper: {
                // backgroundColor: "transparent",
              },
              draggableIcon: {
                backgroundColor: "gray",
                width: 80,
              },
              container: {
                borderTopStartRadius: 22,
                borderTopEndRadius: 22,
                paddingHorizontal: 16,
              },
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "300",
                paddingBottom: 18,
              }}
            >
              Select an option
            </Text>
            {renderRadioButtons()}
          </RBSheet>

          {/*Date of Birth */}
          <View>
            <Text style={{ paddingBottom: 8 }}>Date of Birth</Text>
            <Pressable
              onPress={openDatePicker}
              style={[styles.inputContainer, styles.dropdpwn]}
            >
              <Text style={{ fontWeight: "200" }}>
                {date.toDateString() || "Choose Date"}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            </Pressable>

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onDateChange}
              />
            )}
          </View>

          {/* Place of Birth */}
          <View>
            <Text style={{ paddingBottom: 8 }}>Place of birth</Text>
            <Pressable style={[styles.inputContainer]}>
              <TextInput placeholder="Place of birth" />
            </Pressable>
            <Text style={{ fontSize: 10 }}>in what city were you born in?</Text>
          </View>

          {/* Button */}
          <View style={{ height: 12 }} />
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
        <View style={{ padding: "20%" }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutForm;

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
