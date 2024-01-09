import { Camera, CameraType } from "expo-camera";
import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//import { useNavigation } from "@react-navigation/native";

export default function PhotoShoot() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isSnapping, setSnapping] = useState(false);
  const [capturedImageUri, setCapturedImageUri] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  // const navigation = useNavigation();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function takePicture() {
    if (isSnapping) {
      // Avoid taking multiple pictures in quick succession
      return;
    }

    setSnapping(true);

    try {
      const { uri } = await camera.takePictureAsync();
      setCapturedImageUri(uri);
      setModalVisible(true);
    } catch (error) {
      console.error("Error taking picture:", error);
    } finally {
      setSnapping(false);
    }
  }

  function closeModal() {
    setModalVisible(false);
    setCapturedImageUri(null);
  }

  async function saveImageToBackend() {
    // Implement your logic to send the image to the backend API
    // You can use the capturedImageUri state to get the URI of the captured image
    console.log("Save image to backend:", capturedImageUri);

    // Close the modal after saving

    navigation.navigate("Agree");
    closeModal();
  }

  let camera;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 16,
          color: "white",
          textAlign: "center",
          width: "90%",
          alignSelf: "center",
          paddingTop: 16,
        }}
      >
        Take or unload your photo. Please ensure no part of your face is
        covered.
      </Text>

      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => {
            camera = ref;
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        {/* <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>
            <MaterialIcons name="flip-camera-ios" size={32} color="white" />
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={takePicture}
          style={{ backgroundColor: "white", padding: 12, borderRadius: 8 }}
        >
          <Text style={{ fontWeight: "200", fontSize: 12 }}>Capture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text>
            <AntDesign name="camera" size={32} color="white" />
          </Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} transparent>
        <View
          style={{ backgroundColor: "#2a2a29", height: "100%", padding: 16 }}
        >
          <TouchableOpacity>
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 16,
              color: "white",
              textAlign: "center",
              width: "90%",
              alignSelf: "center",
              paddingTop: 16,
            }}
          >
            Take or unload your photo. Please ensure no part of your face is
            covered.
          </Text>
          <Image source={{ uri: capturedImageUri }} style={styles.modalImage} />

          <View style={styles.modalButtonContainer}>
            <TouchableOpacity style={styles.modalButton2} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Retake</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalButton}
              //      onPress={saveImageToBackend}
            >
              <Text style={styles.modalButtonText}>This Image Looks Good</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#2a2a29",
    padding: 16,
  },
  cameraContainer: {
    height: "65%",
    width: 310,
    borderRadius: 12,
    overflow: "hidden",
    margin: 16,
    alignSelf: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 12,
    alignItems: "center",
  },
  button: {
    backgroundColor: "skyblue",
    padding: 18,
    borderRadius: 99,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2a2a29",
  },
  modalImage: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: "center",
    marginTop: 12,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 52,
  },
  modalButton: {
    padding: 10,
    backgroundColor: "#33b45f",
    borderRadius: 8,
    paddingHorizontal: 32,
  },
  modalButton2: {
    padding: 10,
    backgroundColor: "#ef0a04",
    borderRadius: 8,

    paddingHorizontal: 32,
  },
  modalButtonText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "white",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  logIn: {
    fontSize: 25,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    alignSelf: "center",
  },
});
