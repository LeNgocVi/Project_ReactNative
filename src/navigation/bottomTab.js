import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
const Tab = createBottomTabNavigator();
import HomeScreen from "../../Home";
import Centres from "../Centres/CentresApp";
function CentresScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Centres') {
            iconName = focused ? 'storefront-outline' : 'storefront-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'dots-horizontal' : 'dots-horizontal';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={30} color={color} />
          );
        },
        tabBarActiveTintColor: '#ff6600   ',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })}>
      <Tab.Screen
        name="Dashboard"
        color="#ff6600"
        component={HomeScreen}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Centres"
        component={Centres}
        options={{
          tabBarLabel: "Centres",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={SettingsScreen}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={color}
              size={26}
            />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}
