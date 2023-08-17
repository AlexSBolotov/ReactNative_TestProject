import { useState } from "react";
import { TextInput } from "react-native";

export default BasicInput = ({
  name,
  placeholder = "",
  secureTextEntry = false,
  // onChangeText,
}) => {
  const [isTextInputFocused, setTextInputFocused] = useState(false);
  return (
    <TextInput
      style={{
        position: "relative",
        width: "100%",
        height: 50,
        backgroundColor: isTextInputFocused ? "#fff" : "#F6F6F6",
        borderWidth: 0.5,
        borderColor: isTextInputFocused ? "#FF6C00" : "#E8E8E8",
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight: 16,
        color: "#212121",
        fontSize: 16,
        fontFamily: "Roboto-Regular",
        fontStyle: "normal",
      }}
      placeholder={placeholder}
      placeholderTextColor={"#BDBDBD"}
      selectionColor={"#BDBDBD"}
      secureTextEntry={secureTextEntry}
      onFocus={() => setTextInputFocused(true)}
      onBlur={() => setTextInputFocused(false)}
      //   onChangeText={() => onChangeText()}
    />
  );
};
