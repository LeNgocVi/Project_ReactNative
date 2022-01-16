import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserInformation() {
    return (
      <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Centre Description</Text>
        <View style={styles.divider}></View>
        <Text style={styles.subContent}>
          At Only About Children South Melbourne, we believe that our holistic
          approach to childcare and kindergarten gives every child the best
          opportunity to reach their full potential. Our quality early learning
          programs are innovative, with a focus on health, wellbeing and
          education. Our unique Campus is located 221 Ferrars Street, South
          Melbourne, in a heritage listed train station which was built in 1883.
          Our two buildings are named Westside and Eastside because they are
          separated by a tram line, which runs between them. We are close to
          several local schools {'\t'}
          <Text style={styles.seeMore}>See More</Text>
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Additional Details</Text>
        <View style={styles.divider}></View>
        <View style={styles.addition}>
          <Text style={styles.add1}>Admin Email</Text>
          <Text style={styles.add2}>sthmelbourne@oac.edu.au</Text>
        </View>
        <View style={styles.addition}>
          <Text style={styles.add1}>Region</Text>
          <Text style={styles.add2}>Victoria Metro</Text>
        </View>
        <View style={styles.addition}>
          <Text style={styles.add1}>LGA</Text>
          <Text style={styles.add2}>Melbourne</Text>
        </View>
      </View>
    </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'column',
    marginTop: 16,
  },
  title: {
    color: '#2D1F21',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Mulish',
  },
  divider: {
    marginTop: 10,
    width: '100%',
    marginBottom: 10,
    borderColor: '#F2F2F2',
    borderWidth: 0.5,
  },
  subContent: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#2D1F21',
    alignSelf: 'stretch',
    fontFamily: 'Mulish',
  },
  seeMore: {
    color: '#DB147F',
    fontWeight: 'bold',
  },
  addition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  add1: {
    width: '45%',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#2D1F21',
    fontFamily: 'Mulish',
  },
  add2: {
    width: '55%',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    color: '#2D1F21',
    fontFamily: 'Mulish',
  },
});