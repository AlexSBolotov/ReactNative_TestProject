import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import AvatarImg from "../images/motivation_00.jpg";
import { useEffect, useState } from "react";

export default PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts---->", posts);
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <View style={styles.avatarWrapper}>
          <Image source={AvatarImg} style={styles.image} />
        </View>
        <View>
          <Text style={styles.userName}>userName</Text>
          <Text style={styles.userEmail}>userEmail</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.photo }}
              style={{ width: 300, height: 200, marginBottom: 10 }}
            />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  userWrapper: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  avatarWrapper: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 16,
    resizeMode: "cover",
  },
  userName: {
    color: "#212121",
    fontSize: 13,
    fontFamily: "Roboto-Bold",
  },
  userEmail: {
    color: "#212121",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
  },
});
