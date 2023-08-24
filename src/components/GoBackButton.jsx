import { TouchableOpacity } from "react-native";
import GoBackIcon from "../images/svg/arrow-left.svg";

export default GoBackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 16,
      }}
      onPress={() => navigation.navigate("Posts")}
    >
      <GoBackIcon width={24} heigth={24} />
    </TouchableOpacity>
  );
};
