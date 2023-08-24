import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LogoutIcon from "../images/svg/log-out.svg";

export default LogOutButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16,
      }}
      onPress={() => navigation.navigate("Authentication")}
    >
      <LogoutIcon width={24} heigth={24} />
    </TouchableOpacity>
  );
};
