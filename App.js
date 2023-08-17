import { useFonts } from "expo-font";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import AuthScreen from "./src/components/AuthScreen";
import { useState } from "react";

export default App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/shared/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/shared/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/shared/fonts/Roboto/Roboto-Bold.ttf"),
  });
  const [isLoginScreen, setIsLoginScreen] = useState(false);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <AuthScreen
          isLoginScreen={isLoginScreen}
          setIsLoginScreen={setIsLoginScreen}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
