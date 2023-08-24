import { View } from "react-native";
import DeletePostIcon from "../images/svg/trash.svg";

export default DeletePost = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        borderRadius: 20,
        width: 70,
        height: 40,
      }}
    >
      <DeletePostIcon width={24} heigth={24} />
    </View>
  );
};
