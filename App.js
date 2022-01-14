import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Home";
import LoginScreen from "./src/components/authentication/login";
import ForgotPassword from "./src/components/authentication/forgotPassword";
import React from "react";
import Detail from "./src/Detail/Detail";
import BottomTab from "./src/navigation/bottomTab";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <BottomTab />
      {/* <Stack.Navigator>
      <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
<<<<<<< HEAD
        <Stack.Screen name="BottomTab" component={BottomTab} />
    
=======
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTab"
          component={BottomTab}
        />
>>>>>>> a722c47611852c09e0bbf5d135d33bbed3acbe2e
        <Stack.Screen
          options={{ headerShown: false }}
          name="ForgotPassWord"
          component={ForgotPassword}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

