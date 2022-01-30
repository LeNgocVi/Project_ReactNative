import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../../../firebase";

export default function More() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("MoreDetail")}
      >
        <Ionicons name="person-circle" size={45} color={"#ACB2B8"} />
        <View style={styles.userName}>
          <Text style={styles.Text}>Jane Cooper</Text>
          <Text style={styles.text1}>Provider User (Admin)</Text>
          <Text>Email: {auth.currentUser?.email}</Text>
        </View>
        <View style={styles.iconArrow}>
          <Ionicons name="chevron-forward-sharp" size={20} color={"black"} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    paddingVertical: 18,
    marginTop: -25,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingLeft: 16,
  },
  iconArrow: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  userName: {
    paddingLeft: 16,
    flexDirection: "column",
  },
  Text: {
    fontWeight: "700",
    fontSize: 16,
    color: "#171725",
  },
  text1: {
    fontWeight: "400",
    fontSize: 14,
    color: "#171725",
  },
});
