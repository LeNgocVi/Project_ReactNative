

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  Feather,
} from '@expo/vector-icons';
import CircleBorder from '../CircleBorder';

export default function SUMMARY() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.containerContent}>
          <View style={styles.informContainer}>
            <View style={styles.informContent}>
              <Image
                source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEY_f3zfKvNyO1OTqvOw6LpVGxIBRuw-zgBY5pxuPRc0_cyyIHirLdLDkfCqhrkPmjVf4&usqp=CAU"}}
              />
              <View style={styles.goodStartText}>
                <Text style={styles.text}>
                  Goodstart Early{'\n'}Learning ABC
                </Text>
                <View style={styles.row}>
                  <Entypo name="dot-single" size={20} color="#36BF57" />
                  <Text
                    style={{
                      color: '#36BF57',
                      fontWeight: 'bold',
                      fontSize: 14,
                    }}
                  >
                    Active
                  </Text>
                </View>
              </View>
            </View>
            <CircleBorder
              size={40}
              borderWidth={2}
              backgroundColor="#32A4FC"
              marginTop={24}
            >
              <MaterialIcons
                name="keyboard-arrow-up"
                size={16}
                color="#FFFFFF"
              />
            </CircleBorder>
          </View>
          <View style={styles.divider}></View>
          <View>
            <View>
              <Text style={styles.text}>General Information</Text>
              <View style={styles.generalInform}>
                <Ionicons name="location-outline" size={20} color="#DB147F" />
                <Text style={styles.informText}>
                  221 Ferrars Street, South Melbourne,{'\n'} VIC 3205
                </Text>
              </View>
              <View style={styles.generalInform}>
                <MaterialCommunityIcons
                  name="storefront-outline"
                  size={20}
                  color="#DB147F"
                />
                <Text style={styles.informText}>Goodstart Early Learning</Text>
              </View>
              <View style={styles.generalInform}>
                <MaterialCommunityIcons
                  name="blood-bag"
                  size={20}
                  color="#DB147F"
                />
                <Text style={styles.informText}>Centre-based Care</Text>
              </View>
              <View style={styles.generalInform}>
                <MaterialIcons
                  name="calendar-today"
                  size={20}
                  color="#DB147F"
                />
                <Text style={styles.informText}>01 January 2012</Text>
              </View>
            </View>
            <View style={styles.contactContainer}>
              <FontAwesome5 name="temperature-low" size={20} color="#DB147F" />
              <TouchableOpacity
                style={[styles.kindiCareButton, { backgroundColor: '#E9F4FF' }]}
                // onPress={()=>()}
              >
                <Text style={[styles.kindiCareText, { color: '#32A4FC' }]}>
                  KindiCare Basic
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.divider}></View>
            <View>
              <Text style={styles.text}>Contact Info</Text>
              <View style={styles.contactContainer}>
                <MaterialIcons name="phone" size={20} color="#DB147F" />
                <Text style={[styles.contactText, { color: '#171725' }]}>
                  1300 001 154
                </Text>
              </View>
              <View style={styles.contactContainer}>
                <Ionicons name="md-mail-outline" size={20} color="#DB147F" />
                <Text style={[styles.contactText, { color: '#171725' }]}>
                  goodstartearlylearning@gmail.com
                </Text>
              </View>
              <View style={styles.contactContainer}>
                <Feather name="arrow-up-left" size={20} color="#DB147F" />
                <Text style={[styles.contactText, { color: '#DB147F' }]}>
                  https://www.goodstart.org.au/
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.text}>Enquiries Summary</Text>
          <View style={styles.divider}></View>
          <View style={styles.inquireContainer}>
            <View style={styles.row}>
              <CircleBorder
                size={35}
                borderWidth={2}
                backgroundColor="#FFF0FB"
                marginTop={0}
              >
                <Ionicons name="md-heart-outline" size={16} color="#DB147F" />
              </CircleBorder>
              <Text style={styles.inquireText}>Total Enquiries</Text>
            </View>
            <Text style={styles.inquireNumber}>192</Text>
          </View>
          <View style={styles.inquireContainer}>
            <View style={styles.row}>
              <CircleBorder
                size={35}
                borderWidth={2}
                backgroundColor="#E9F4FF"
                marginTop={0}
              >
                <Ionicons name="information" size={16} color="#32A4FC" />
              </CircleBorder>
              <Text style={styles.inquireText}>More Information</Text>
            </View>
            <Text style={styles.inquireNumber}>192</Text>
          </View>
          <View style={styles.inquireContainer}>
            <View style={styles.row}>
              <CircleBorder
                size={35}
                borderWidth={2}
                backgroundColor="#EDF9F0"
                marginTop={0}
              >
                <MaterialCommunityIcons
                  name="chair-school"
                  size={16}
                  color="#36BF57"
                />
              </CircleBorder>
              <Text style={styles.inquireText}>Check for Vacancies</Text>
            </View>
            <Text style={styles.inquireNumber}>192</Text>
          </View>
          <View style={styles.inquireContainer}>
            <View style={styles.row}>
              <CircleBorder
                size={35}
                borderWidth={2}
                backgroundColor="#F3EAFF"
                marginTop={0}
              >
                <Ionicons name="md-flag-outline" size={16} color="#BF2CF3" />
              </CircleBorder>
              <Text style={styles.inquireText}>Book a Tour or Visit</Text>
            </View>
            <Text style={styles.inquireNumber}>192</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  containerContent: {
    borderRadius: 12,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderWidth: 1,
    borderColor: '#F2F0F0',
  },
  row: {
    flexDirection: 'row',
  },
  informContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goodStartText: {
    marginLeft: 10,
    marginTop: 12,
  },
  informContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  informText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#171725',
    letterSpacing: 0.02,
  },
  divider: {
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#F2F0F0',
  },
  generalInform: {
    flexDirection: 'row',
    marginTop: 10,
  },
  kindiCareButton: {
    width: 125,
    marginTop: -4,
    marginLeft: 10,
    padding: 5,
    borderRadius: 6,
  },
  kindiCareText: {
    alignContent: 'center',
    fontSize: 14,
    letterSpacing: 0.02,
    lineHeight: 24,
  },
  contactContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    letterSpacing: 0.02,
    lineHeight: 24,
  },
  inquireContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  inquireText: {
    marginLeft: 15,
    marginTop: 6,
    fontSize: 14,
    fontFamily: 'Mulish',
    color: '#2D1F21',
  },
  inquireNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
    fontFamily: 'Mulish',
    color: '#2D1F21',
  },
});