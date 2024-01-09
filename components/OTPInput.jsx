import React, { useRef, useState, useEffect } from "react";
import { Text, TextInput, View, Pressable, StyleSheet } from "react-native";

const OTPInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef();

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  const boxDigit = (_, index) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    const styles = StyleSheet.create({
      SplitBoxes: {
        borderColor: "#e5e5e5",

        // borderWidth: 2,
        borderRadius: 5,
        padding: 12,
        minWidth: 50,

        ...(isInputBoxFocused && isValueFocused),
      },
      SplitBoxText: {
        fontSize: 20,
        textAlign: "center",
        color: "#e5e5e5",
      },
      SplitBoxesFocused: {
        borderColor: "#ecdbba",
        backgroundColor: "grey",
      },
    });

    return (
      <View
        style={{
          borderBottomWidth: 2,
          borderColor: "#e5e5e5",
          borderRadius: 5,
          padding: 12,
          minWidth: 50,
        }}
        key={index}
      >
        <Text style={styles.SplitBoxText}>{digit}</Text>
      </View>
    );
  };

  return (
    <View style={styles.OTPInputContainer}>
      <Pressable style={styles.SplitOTPBoxesContainer} onPress={handleOnPress}>
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        style={styles.TextInputHidden}
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  OTPInputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  SplitOTPBoxesContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  TextInputHidden: {
    position: "absolute",
    opacity: 0,
  },
});

export default OTPInput;
