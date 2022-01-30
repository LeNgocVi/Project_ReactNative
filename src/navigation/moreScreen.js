import React from "react";
import More from "../components/more/more";
import MoreDetail from "../components/more/moreDetail";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const moreScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="More"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 16,
        },
      }}
    >
      <Stack.Screen name="More" component={More} />
      <Stack.Screen
        options={{ title: "More" }}
        name="MoreDetail"
        component={MoreDetail}
      />
    </Stack.Navigator>
  );
};

export default moreScreen;

const styles = StyleSheet.create({});
