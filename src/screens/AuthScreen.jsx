// import "react-native-get-random-values";
// import { v4 as uuid } from "react-native-uuid";
// import { nanoid } from "nanoid";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import LoginRegisterForm from "../shared/components/LoginRegisterForm";
import { registerInputs, loginInputs } from "../constants";
import AuthBackground from "../images/auth-background.jpg";
import { useState } from "react";

export default RegisterScreen = ({ navigation }) => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground source={AuthBackground} style={styles.background}>
          <View
            style={[
              styles.formWrapper,
              { flex: isLoginScreen ? 0.5 : 0.72 },
              { paddingTop: isLoginScreen ? 32 : 92 },
            ]}
          >
            <LoginRegisterForm
              navigation={navigation}
              titleText={isLoginScreen ? "Увійти" : "Реєстрація"}
              inputs={isLoginScreen ? loginInputs : registerInputs}
              buttonText={isLoginScreen ? "Увійти" : "Зареєстуватися"}
              switcherText={
                isLoginScreen ? "Немає акаунту? " : "Вже є акаунт? "
              }
              switcherLinkText={isLoginScreen ? "Зареєструватися" : "Увійти"}
              isLoginScreen={isLoginScreen}
              setIsLoginScreen={setIsLoginScreen}
            />
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
    justifyContent: "flex-end",
  },
  formWrapper: {
    width: "100%",
    height: "auto",
    position: "relative",
    alignItems: "center",
    paddingTop: 94.5,
    backgroundColor: "#fff",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
