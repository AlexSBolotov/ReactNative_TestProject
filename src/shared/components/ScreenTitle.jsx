import { StyleSheet, Text } from "react-native";

export default ScreenTitle = ({ titleText }) => {
  return (
    <Text style={styles.formHeader} textAlign={"center"}>
      {titleText}
    </Text>
  );
};

const styles = StyleSheet.create({
  formHeader: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    letterSpacing: 0.3,
    marginBottom: 33,
  },
});
