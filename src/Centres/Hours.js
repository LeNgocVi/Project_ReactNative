
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Hours() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Normal</Text>
        <View style={styles.dateContainer}>
          <View style={styles.dayContainer}>
            <TouchableOpacity
              style={[
                styles.dayBtn,
                {
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  backgroundColor: '#DB147F',
                  borderRadius: 6,
                },
              ]}
            >
              <Text style={[styles.dayText, { color: '#FFFFFF' }]}>
                Mon - Fri
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dayBtn}>
              <Text style={[styles.dayText, { color: '#857E7F' }]}>Sat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dayBtn}>
              <Text style={[styles.dayText, { color: '#857E7F' }]}>Sun</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.timeContent}>
              <Text style={styles.timeTitle}>Morning</Text>
              <View style={styles.timeContainerInside}>
                <TouchableOpacity style={styles.timeBtn}>
                  <Text style={styles.timeText}>8:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeBtn}>
                  <Text>12:00</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.timeContent}>
              <Text style={styles.timeTitle}>Afternoon</Text>
              <View style={styles.timeContainerInside}>
                <TouchableOpacity style={styles.timeBtn}>
                  <Text style={styles.timeText}>14:00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeBtn}>
                  <Text>17:00</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    marginTop: 16,
    width: '100%',
  },
  title: {
    color: '#2D1F21',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  dateContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 20,
    marginTop: 10,
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayBtn: {
    width: '30%',
  },
  dayText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.02,
    textAlign: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  timeContent: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 12,
    width: '48%',
  },
  timeTitle: {
    color: '#2D1F21',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  timeText: {
    color: '#2D1F21',
    fontSize: 14,
    fontWeight: 24,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  timeContainerInside: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  timeBtn: {
    backgroundColor: '#E9F4FF',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    width: '48%',
  },
});