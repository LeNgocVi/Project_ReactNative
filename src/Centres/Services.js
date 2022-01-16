import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
export default function Service() {
  const services = [
    {
      id: 1,
      title: 'Long Day Care',
      time: '0 to 12 months',
      money: 112.0,
    },
    {
      id: 2,
      title: 'Pre-School/ Kindergarten',
      time: '0 to 12 months',
      money: 112.0,
    },
    {
      id: 3,
      title: 'Before & After School Care',
      time: '0 to 12 months',
      money: 112.0,
    },
    {
      id: 4,
      title: 'Family Day Care',
      time: '0 to 12 months',
      money: 112.0,
    },
    {
      id: 5,
      title: 'Vacation Care',
      time: '0 to 12 months',
      money: 112.0,
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        {services.map((item) => {
          return (
            <View style={styles.row} key={item.id}>
              <View style={styles.icon}>
                <FontAwesome5 name="home" color="#DB147F" size={35} />
              </View>
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.time}>{item.time}</Text>
                <Text style={styles.time}>${item.money}/ full day </Text>
              </View>
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
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    backgroundColor: '#FFF0FB',
    height: '35%',
    borderRadius: 12,
    marginLeft: 30,
    marginTop: 16,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 16,
    marginBottom: 10,
  },
  content: {
    alignItems: 'baseline',
    margin: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '300',
  },
});