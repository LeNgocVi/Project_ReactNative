import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Summary from '../Centres/SUMMARY';
import Centre_Info from '../Centres/USERINFORMATION';
import Hours from '../Centres/Hours';
import Service from '../Centres/Services';
import Feature from '../Centres/Features';
import Marketing from '../Centres/Marketing';
import Ratings_Reviews from '../Centres/RatingsandReviews';

const TabCentre = createMaterialTopTabNavigator();

export default function Detail() {
  return (
    <TabCentre.Navigator
      initialRouteName="Summary"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: 'default' },
        alignItems: 'center',
         justifyContent: 'center'
      }}
    >
      <TabCentre.Screen
        name="Summary"
        component={Summary}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 100,
                marginLeft: -40,
                paddingHorizontal: 15,
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}
              >
                SUMMARY
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="User Information"
        component={Centre_Info}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 142,
                paddingLeft:-100,
                paddingHorizontal: 15,
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}
              >
                USER INFORMATION
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="Hours"
        component={Hours}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 80,
                marginLeft: -30,
             paddingHorizontal: 25,
                paddingVertical: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                HOURS
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="Services"
        component={Service}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 92,
                marginLeft: -40,
                paddingHorizontal: 25,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                SERVICES
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="Features"
        component={Feature}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 94,
                marginLeft: -40,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 25,
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                FEATURES
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="Marketing"
        component={Marketing}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 105,
                marginLeft: -40,
                paddingHorizontal: 25,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                MARKETING
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TabCentre.Screen
        name="Rating Review"
        component={Ratings_Reviews}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity
              style={{
                width: 140,
                marginLeft: -40,
                paddingHorizontal: 25,
                paddingVertical: 5,
                backgroundColor: focused ? '#fff' : '',
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  color: focused ? '#e91e63' : '#857E7F',
                  fontSize: 11,
                  fontWeight: 'bold',
                }}
              >
                RATING REVIEW
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
    </TabCentre.Navigator>
  );
};

