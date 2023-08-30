import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthScreen from "./src/screens/AuthScreen";
import PostsScreen from "./src/screens/PostsScreen";
import LogOutButton from "./src/components/LogOutButton";
import CreatePostsScreen from "./src/screens/CreatePostsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import Home from "./src/screens/Home";

export default App = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/shared/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/shared/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/shared/fonts/Roboto/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const MainStack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {/* <BottomTab.Navigator>
        <BottomTab.Screen name="Posts" component={PostsScreen} />
        <BottomTab.Screen name="Create" component={CreatePostsScreen} />
        <BottomTab.Screen name="Profile" component={ProfileScreen} />
      </BottomTab.Navigator> */}
      <MainStack.Navigator initialRouteName="Authentication">
        <MainStack.Screen
          name="Authentication"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
