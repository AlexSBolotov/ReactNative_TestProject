import { View } from "react-native";
import AddPostIcon from "../images/svg/add-post.svg";

export default AddPost = () => {
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
      <AddPostIcon width={13} heigth={13} color={"#FFFFFF"} />
    </View>
  );
};
