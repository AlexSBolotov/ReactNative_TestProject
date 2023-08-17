import { Image, Keyboard, StyleSheet, View } from "react-native";
import AddActive from "../../images/svg/add-active.svg";
import AddInactive from "../../images/svg/add-inactive.svg";
import AvatarImg from "../../images/avatar-001.jpg";
import useKeyboard from "../hooks/useKeyboard";

export default AvatarInput = ({ isLoginScreen }) => {
  const isKeyboardVisible = useKeyboard();
  return (
    <View style={[styles.avatarWrapper, { transform: [{ translateX: 60 }] }]}>
      {isKeyboardVisible && <Image source={AvatarImg} style={styles.image} />}
      <View
        style={[
          styles.addActiveBox,
          { borderColor: isKeyboardVisible ? "#E8E8E8" : "#FF6C00" },
        ]}
      >
        {isKeyboardVisible ? (
          <AddInactive width={13} height={13} />
        ) : (
          <AddActive width={13} height={13} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  avatarWrapper: {
    position: "absolute",
    right: "50%",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  image: {
    borderRadius: 16,
    resizeMode: "contain",
  },
  addActiveBox: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: "90%",
    top: "68%",
    width: 25,
    height: 25,
    borderWidth: 0.5,
    borderRadius: 100,
    backgroundColor: "#fff",
  },
});
