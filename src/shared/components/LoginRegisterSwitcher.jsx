import { StyleSheet, Text, View } from "react-native";

export default LoginRegisterSwitcher = ({
  switcherText,
  switcherLinkText,
  isLoginScreen,
  setIsLoginScreen,
}) => {
  return (
    <View style={styles.loginRegisterSwitcher}>
      <Text style={styles.loginRegisterSwitcherText}>{switcherText}</Text>
      <Text
        style={[
          styles.loginRegisterSwitcherText,
          { textDecorationLine: "underline" },
        ]}
        onPress={() => setIsLoginScreen(!isLoginScreen)}
      >
        {switcherLinkText}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  loginRegisterSwitcher: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginRegisterSwitcherText: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
