// import "react-native-get-random-values";
// import { v4 as uuid } from "react-native-uuid";
// import { nanoid } from "nanoid";
import { ImageBackground, StyleSheet, View } from "react-native";

import LoginRegisterForm from "../shared/components/LoginRegisterForm";
import { registerInputs, loginInputs } from "../constants";
import AuthBackground from "../images/auth-background.jpg";

export default RegisterScreen = ({ isLoginScreen, setIsLoginScreen }) => {
  return (
    <ImageBackground source={AuthBackground} style={styles.background}>
      <View
        style={[
          styles.formWrapper,
          { flex: isLoginScreen ? 0.5 : 0.72 },
          { paddingTop: isLoginScreen ? 32 : 92 },
        ]}
      >
        <LoginRegisterForm
          titleText={isLoginScreen ? "Увійти" : "Реєстрація"}
          inputs={isLoginScreen ? loginInputs : registerInputs}
          buttonText={isLoginScreen ? "Увійти" : "Зареєстуватися"}
          switcherText={isLoginScreen ? "Немає акаунту? " : "Вже є акаунт? "}
          switcherLinkText={isLoginScreen ? "Зареєструватися" : "Увійти"}
          isLoginScreen={isLoginScreen}
          setIsLoginScreen={setIsLoginScreen}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
