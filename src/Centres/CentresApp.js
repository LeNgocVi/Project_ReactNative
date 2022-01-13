import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Centres from './centres';
import Detail from '../Detail/Detail';

const CentreStack = createNativeStackNavigator();
export default function CentresApp({navigator}) {
    return (
        <CentreStack.Navigator
        initialRouteName="Centre"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      >
        <CentreStack.Screen
          name="Centre"
          component={Centres}
          options={{ headerShown: false }}
        />
        <CentreStack.Screen
         name="CentreDetails" 
        component={Detail} />
      </CentreStack.Navigator>
    )
}
