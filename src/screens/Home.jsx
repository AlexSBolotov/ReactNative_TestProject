import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LogOutButton from "../components/LogOutButton";
import GoBackButton from "../components/GoBackButton";
import Boxes from "../images/svg/boxes.svg";
import UserIcon from "../images/svg/user-inactive.svg";
import AddPost from "../components/AddPost";
import DeletePost from "../components/DeletePost";
import UserActive from "../components/UserActive";

export default Home = ({ navigation, route }) => {
  const BottomTab = createBottomTabNavigator();
  const { userName = "User", userEmail = "user@mail.com" } = route.params;

  function MyTabBar({ state, descriptors, navigation }) {
    // const shouldDisplay = (label, isFocused) => {
    //   if (label === "Posts" && isFocused) return false;
    //   else
    //     if (label === "Create" && isFocused) return false;
    //     else
    //       if (label === "Profile" && isFocused) return false;
    //   else return true;
    // };
    return (
      <View style={styles.tabWrapper}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          // if (!shouldDisplay(route.name, isFocused)) return null;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          if (route.name === "Posts") {
            return (
              <TouchableOpacity key={route.key} onPress={onPress}>
                <Boxes width={24} heigth={24} />
              </TouchableOpacity>
            );
          } else if (route.name === "Create") {
            return isFocused ? (
              <TouchableOpacity key={route.key} onPress={onPress}>
                <DeletePost />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity key={route.key} onPress={onPress}>
                <AddPost />
              </TouchableOpacity>
            );
          } else if (route.name === "Profile") {
            return isFocused ? (
              <TouchableOpacity key={route.key} onPress={onPress}>
                <UserActive />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity key={route.key} onPress={onPress}>
                <UserIcon width={24} heigth={24} />
              </TouchableOpacity>
            );
          }
        })}
      </View>
    );
  }

  return (
    <BottomTab.Navigator
      // screenOptions={({ route }) => ({
      //   tabBarShowLabel: false,
      //   tabBarIcon: ({ focused, color, size }) => {
      //     if (route.name === "Posts") {
      //       return focused ? <Boxes /> : <Boxes />;
      //     } else if (route.name === "Create") {
      //       return focused ? <Boxes /> : <Boxes />;
      //     }
      //   },
      // })}
      // screenOptions={{ tabBarShowLabel: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <BottomTab.Screen
        name="Posts"
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            fontWeight: 500,
            color: "#212121",
          },
          headerLeft: () => <></>,
          headerBackVisible: false,
          headerRight: () => <LogOutButton />,
          // tabBarShowLabel: false,
        }}
        children={() => (
          <PostsScreen userName={userName} userEmail={userEmail} />
        )}
      />
      <BottomTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            fontWeight: 500,
            color: "#212121",
          },
          headerLeft: () => <GoBackButton navigation={navigation} />,
          // tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        // component={ProfileScreen}
        children={() => (
          <ProfileScreen userName={userName} userEmail={userEmail} />
        )}
        options={{
          headerShown: false,
          // tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabWrapper: {
    flexDirection: "row",
    gap: 31,
    backgroundColor: "#fff",
    height: 83,
    borderTopWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
