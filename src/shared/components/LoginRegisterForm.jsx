import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import BasicInput from "./BasicInput";
import LoginRegisterSwitcher from "./LoginRegisterSwitcher";
import Button from "./Button";
import ScreenTitle from "./ScreenTitle";
import AvatarInput from "./AvatarInput";
import { loginInitialState, registerInitialState } from "../../constants";

export default LoginRegisterForm = ({
  titleText,
  inputs,
  buttonText,
  switcherText,
  switcherLinkText,
  isLoginScreen,
  setIsLoginScreen,
  navigation,
}) => {
  const [showPass, setShowPass] = useState(false);
  const [registerState, setRegisterState] = useState(registerInitialState);
  const [loginState, setLoginState] = useState(loginInitialState);
  // const navigation = useNavigation();

  const handleLoginSubmit = () => {
    console.log(loginState);
    navigation.navigate("Home", {
      userName: "User",
      userEmail: loginState.email,
    });
    setLoginState(loginInitialState);
  };
  const handleRegisterSubmit = () => {
    console.log(registerState);
    navigation.navigate(
      "Home"
      // , {
      // userName: registerState.name,
      // userEmail: registerState.email,
      // }
    );
    setRegisterState(registerInitialState);
  };
  return (
    <>
      {!isLoginScreen && <AvatarInput isLoginScreen={isLoginScreen} />}
      <ScreenTitle titleText={titleText} />
      <ScrollView style={{ width: "100%" }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.intutWrapper}
        >
          {inputs.map((el) => (
            <BasicInput
              key={el.id}
              placeholder={el.placeholder}
              name={el.name}
              value={
                isLoginScreen ? loginState[el.name] : registerState[el.name]
              }
              secureTextEntry={
                el.placeholder === "Пароль" && showPass === false ? true : false
              }
              onChangeText={(value) => {
                isLoginScreen
                  ? setLoginState((prevState) => ({
                      ...prevState,
                      [el.name]: value,
                    }))
                  : setRegisterState((prevState) => ({
                      ...prevState,
                      [el.name]: value,
                    }));
              }}
            />
          ))}
          <Pressable
            onPressIn={() => {
              setShowPass(true);
            }}
            onPressOut={() => {
              setShowPass(false);
            }}
            style={[styles.showPassword, { top: isLoginScreen ? 80 : 146 }]}
          >
            {({ pressed }) => (
              <Text style={styles.showPasswordText}>
                {pressed ? "Сховати" : "Показати"}
              </Text>
            )}
          </Pressable>
          <Button
            buttonText={buttonText}
            onPress={() => {
              isLoginScreen ? handleLoginSubmit() : handleRegisterSubmit();
            }}
          />
          <LoginRegisterSwitcher
            switcherText={switcherText}
            switcherLinkText={switcherLinkText}
            isLoginScreen={isLoginScreen}
            setIsLoginScreen={setIsLoginScreen}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  intutWrapper: {
    flex: 1,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    gap: 16,
    marginBottom: 43,
  },

  showPassword: {
    position: "absolute",
    right: 32,
    top: 146,
    cursor: "pointer",
  },
  showPasswordText: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
