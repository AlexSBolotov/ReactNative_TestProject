import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default Button = ({ buttonText }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.button}
      // onPress={console.log(formState)}
    >
      <Text style={styles.buttonTitle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginTop: 27,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
