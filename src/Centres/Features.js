import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
const feature = [
  {
    icon: 'home',
    text: 'Waitlist',
    status: true,
  },
  {
    icon: 'credit-card',
    text: 'Direct Debit Facility',
    status: false,
  },
  {
    icon: 'utensils',
    text: 'All Meals Provided',
    status: false,
  },
  {
    icon: 'mug-hot',
    text: 'Nappies Provided',
    status: true,
  },
  {
    icon: 'bed',
    text: 'Bed Linen Provided',
    status: true,
  },
  {
    icon: 'hamburger',
    text: 'Some Meals Provided',
    status: false,
  },
  {
    icon: 'car',
    text: 'Car Parking',
    status: true,
  },
  {
    icon: 'cart-plus',
    text: 'Pram Parking',
    status: true,
  },
  {
    icon: 'door-open',
    text: 'Outdoor Play Area',
    status: true,
  },
  {
    icon: 'door-closed',
    text: 'Indoor Play Area',
    status: false,
  },
  {
    icon: 'music',
    text: 'Music Lessons',
    status: true,
  },
  {
    icon: 'home',
    text: 'Sandpit',
    status: true,
  },
  {
    icon: 'home',
    text: 'Cooking Lessons',
    status: true,
  },
  {
    icon: 'home',
    text: 'Excursions',
    status: true,
  },
  {
    icon: 'home',
    text: 'Allergy Aware',
    status: true,
  },
];
export default function Feature() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (item) => {
    item.status = !item.status;
  };
 
  return (
    <ScrollView>
      <View style={styles.container}>
        {feature.map((item, key) => {
          return (
            <View style={styles.row} key={key}>
              <View style={{ flexDirection: 'row', padding: 15 }}>
                <View style={{ width: 30, alignItems: 'center' }}>
                  <FontAwesome5 name={item.icon} color="#333" size={20} />
                </View>

                <Text
                  style={{ fontSize: 15, color: '#2D1F21', marginLeft: 20 }}
                >
                  {item.text}
                </Text>
              </View>
              <Switch
                trackColor={{ false: '#BEBEBE', true: '#DB147F' }}
                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch(item)}
                value={item.status}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  Text: {
    fontSize: 25,
  },
});