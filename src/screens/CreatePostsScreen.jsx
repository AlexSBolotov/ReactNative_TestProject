import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";

import useKeyboard from "../shared/hooks/useKeyboard";

import DeletePost from "../components/DeletePost";
import Button from "../shared/components/Button";
import ButtonInactive from "../shared/components/ButtonInactive";
import CameraIcon from "../images/svg/camera.svg";
import CameraIconWhite from "../images/svg/camera_white.svg";
import GeoIcon from "../images/svg/map-pin.svg";
import FlipCameraIcon from "../images/svg/flip_camera_ios.svg";

export default CreatePostsScreen = ({ navigation, route }) => {
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const isKeyboardVisible = useKeyboard();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setPhoto(null);
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function toggleCameraType() {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
    console.log(type);
  }

  const takePhoto = async () => {
    const snap = await camera.takePictureAsync();
    const uri = await MediaLibrary.createAssetAsync(snap.uri);
    setPhoto(uri.uri);
    console.log(uri.uri);
  };

  const sendPost = () => {
    navigation.navigate("Posts", { photo });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ScrollView
          style={{
            // flex: 1,
            width: "100%",
            // height: "100%",
            // position: "relative",
          }}
        >
          <View style={styles.photoView}>
            {/* {!permission.granted ? (
          <Text>No access to camera</Text>
        ) : ( */}
            <Camera style={styles.cameraBox} type={type} ref={setCamera}>
              {photo && (
                <View style={styles.imageView}>
                  <Image style={styles.image} src={photo} />
                </View>
              )}
            </Camera>
            <TouchableOpacity
              style={[
                styles.buttonCameraWrapper,
                {
                  backgroundColor:
                    photo === null ? "#fff" : "rgba(255, 255, 255, 0.30)",
                },
              ]}
              onPress={takePhoto}
            >
              {photo === null ? (
                <CameraIcon width={24} height={24} />
              ) : (
                <CameraIconWhite width={24} height={24} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.flipCameraWrapper}
              onPress={toggleCameraType}
            >
              <FlipCameraIcon width={24} height={24} fill={"#E8E8E8"} />
            </TouchableOpacity>
          </View>
          <View style={styles.photoDescr}>
            {photo === null ? (
              <Text style={styles.photoDescrText}>Завантажте фото</Text>
            ) : (
              <Text style={styles.photoDescrText}>Редагувати фото</Text>
            )}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              name={"Description"}
              // value={value}
              placeholder={"Назва..."}
              // onChangeText={onChangeText}
              placeholderTextColor={"#BDBDBD"}
              selectionColor={"#BDBDBD"}
              // secureTextEntry={secureTextEntry}
              // onFocus={() => setTextInputFocused(true)}
              // onBlur={() => setTextInputFocused(false)}
            />
            <TextInput
              style={[styles.input, { paddingLeft: 28 }]}
              name={"Description"}
              // value={value}
              placeholder={"Місцевість..."}
              // onChangeText={onChangeText}
              placeholderTextColor={"#BDBDBD"}
              selectionColor={"#BDBDBD"}
              // secureTextEntry={secureTextEntry}
              // onFocus={() => setTextInputFocused(true)}
              // onBlur={() => setTextInputFocused(false)}
            />
            <GeoIcon width={24} height={24} style={styles.geoIcon} />
          </View>
          {photo === null ? (
            <ButtonInactive buttonText={"Опублікувати"} />
          ) : (
            <Button buttonText={"Опублікувати"} onPress={sendPost} />
          )}
        </ScrollView>
        <TouchableOpacity
          style={[
            styles.buttonWrapper,
            { display: isKeyboardVisible ? "none" : "flex" },
          ]}
          // onPress={onPress}
        >
          <DeletePost />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
    alignItems: "center",
    borderTopWidth: 0.5,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  buttonWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    right: 16,
    backgroundColor: "rgba(255, 255, 255, 0.30)",
    height: 83,
    alignItems: "center",
    paddingTop: 9,
  },
  photoView: {
    position: "relative",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    borderColor: "#E8E8E8",
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  cameraBox: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  buttonCameraWrapper: {
    zIndex: 1000,
    position: "absolute",
    top: "40%",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  flipCameraWrapper: {
    position: "absolute",
    top: "80%",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#BDBDBD",
    alignItems: "center",
    justifyContent: "center",
  },
  photoDescr: {
    marginTop: 8,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  photoDescrText: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  inputWrapper: {
    width: "100%",
    position: "relative",
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    // backgroundColor: isTextInputFocused ? "#fff" : "#F6F6F6",
    // borderWidth: 0.5,
    // borderColor: isTextInputFocused ? "#FF6C00" : "#E8E8E8",
    // borderRadius: 8,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 16,
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
  },
  geoIcon: {
    position: "absolute",
    bottom: 16,
    left: 0,
  },
});
