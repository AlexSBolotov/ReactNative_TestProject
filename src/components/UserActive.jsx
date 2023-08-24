import { View } from "react-native";
import UserActiveIcon from "../images/svg/user-active.svg";

export default UserActive = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6C00",
        borderRadius: 20,
        width: 70,
        height: 40,
      }}
    >
      <UserActiveIcon width={13} heigth={13} color={"#FFFFFF"} />
    </View>
  );
};
