import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Header = ({
  iconName,
  title,
  iconLeft,
  marginLeft,
  marginRight,
  onPress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.contentHeader}>
        <MaterialCommunityIcons name={iconName} size={30} color="#fff" />
        <Text style={[styles.styleText, { marginLeft }]}>{title}</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          color="#fff"
          style={{ marginTop: 4, marginRight }}
          onPress={onPress}
        />
        <MaterialIcons
          name={iconLeft}
          size={24}
          color="#fff"
          style={{ marginTop: 4 }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 130,
    width: "100%",
    backgroundColor: "#ff6600",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  contentHeader: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  styleText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 5,
  },
});
