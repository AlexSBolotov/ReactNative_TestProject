import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LogOutButton from "../components/LogOutButton";
import GoBackButton from "../components/GoBackButton";
import Boxes from "../images/svg/boxes.svg";
import UserIcon from "../images/svg/user-inactive.svg";
import PlusBlackIcon from "../images/svg/plus-black.svg";

import AddPost from "../components/AddPost";
import DeletePost from "../components/DeletePost";
import UserActive from "../components/UserActive";

export default Home = ({ state, navigation, route }) => {
  const BottomTab = createBottomTabNavigator();
  const { userName = "User", userEmail = "user@mail.com" } = route.params;
  console.log(route.name);
  function MyTabBar({ state, descriptors, navigation }) {
    const shouldDisplay = (label, isFocused) => {
      // if (label === "Posts" && isFocused) return false;
      // else
      if (label === "Create" && isFocused) return false;
      // else
      //   if (label === "Profile" && isFocused) return false;
      else return true;
    };
    console.log(state.index);
    // let routesToMap;
    if (state.index === 0) {
      routesToMap = ["Posts", "Create", "Profile"];
    } else {
      routesToMap = ["Posts", "Profile", "Create"];
    }
    if (state.index === 1) {
      return null;
    }
    return (
      <View style={styles.tabWrapper}>
        {routesToMap.map((name, index) => {
          // const isFocused = state.index === index;
          // if (!shouldDisplay(route.name, isFocused)) return null;
          // console.log(isFocused);

          const onPress = () => {
            // const event = navigation.emit({
            //   type: "tabPress",
            //   target: route.key,
            //   canPreventDefault: true,
            // });

            // if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: name, merge: true });
            // }
          };

          if (name === "Posts") {
            return (
              <TouchableOpacity key={index} onPress={onPress}>
                <Boxes width={24} heigth={24} />
              </TouchableOpacity>
            );
          } else if (name === "Create") {
            return routesToMap[1] === "Profile" ? (
              <TouchableOpacity key={index} onPress={onPress}>
                <PlusBlackIcon />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity key={index} onPress={onPress}>
                <AddPost />
              </TouchableOpacity>
            );
          } else if (name === "Profile") {
            return routesToMap[1] === "Profile" ? (
              <TouchableOpacity key={index} onPress={onPress}>
                <UserActive />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity key={index} onPress={onPress}>
                <UserIcon width={24} heigth={24} />
              </TouchableOpacity>
            );
          }
        })}
      </View>
    );
  }

  return (
    <BottomTab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
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
        }}
        children={() => (
          <PostsScreen userName={userName} userEmail={userEmail} />
        )}
      />
      <BottomTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={() => ({
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            fontWeight: 500,
            color: "#212121",
          },
          headerLeft: () => <GoBackButton navigation={navigation} />,
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
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
