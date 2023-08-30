import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default Button = ({ buttonText, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.button}>
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
    backgroundColor: "#F6F6F6",
  },
  buttonTitle: {
    color: "#BDBDBD",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
