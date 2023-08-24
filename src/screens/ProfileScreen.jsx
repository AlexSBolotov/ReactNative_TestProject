import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AuthBackground from "../images/auth-background.jpg";

export default ProfileScreen = ({ userName, userEmail }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={AuthBackground} style={styles.background}>
          <View style={styles.formWrapper}>
            <Text>{userName}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  formWrapper: {
    flex: 1,
    // width: "100%",
    height: "auto",
    // position: "relative",
    alignItems: "center",
    marginTop: 103,
    backgroundColor: "#fff",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
