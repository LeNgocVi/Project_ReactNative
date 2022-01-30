import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
} from "react-native";
import { auth } from "../../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const MoreDetail = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.block}>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>My profile</Text>
            <View style={styles.rightContent}>
              <Ionicons name="arrow-forward" size={19} color={"#0D0A03"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>Language</Text>

            <View style={styles.rightContent}>
              <Text style={styles.boldText}>English</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>Price display</Text>

            <View style={styles.rightContent}>
              <Text style={styles.boldText}>AUD</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.BtnItem}>
            <Text style={styles.leftContent}>Notifications</Text>

            <Switch
              style={styles.toggleSwitch}
              trackColor={{ false: "#F7F8F9", true: "#DB147F" }}
              thumbColor={"#ffff"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={styles.block}>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>About us</Text>
            <View style={styles.rightContent}>
              <Ionicons name="arrow-forward" size={19} color={"#2D1F21"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>About Kindicare application</Text>
            <View style={styles.rightContent}>
              <Ionicons name="arrow-forward" size={19} color={"#2D1F21"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>
              The Kindicare Rating Explained
            </Text>
            <View style={styles.rightContent}>
              <Ionicons name="arrow-forward" size={19} color={"#2D1F21"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>
              About the National Quality Standard (NQS)
            </Text>
            <View style={styles.rightContent}>
              <Ionicons name="arrow-forward" size={19} color={"#2D1F21"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>
              The Value for Money Rating Explained
            </Text>
            <View style={styles.rightContent}>
              <Ionicons name="arrow-forward" size={19} color={"#2D1F21"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>
              About the Government Childcare Subsidy
            </Text>
            <View style={styles.rightContent}>
              <Ionicons name="arrow-forward" size={19} color={"#2D1F21"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>FAQ</Text>
            <View style={styles.rightContent}>
              <Ionicons name="arrow-forward" size={19} color={"#2D1F21"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>Term & Conditions</Text>
            <View style={styles.rightContent}>
              <Ionicons name="arrow-forward" size={19} color={"#2D1F21"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>Privacy Policy</Text>
            <View style={styles.rightContent}>
              <Ionicons name="arrow-forward" size={19} color={"#2D1F21"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnItem}>
            <Text style={styles.leftContent}>Feedback & Support</Text>
            <View style={styles.rightContent}>
              <Ionicons name="arrow-forward" size={19} color={"#2D1F21"} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.BtnItem} onPress={handleSignOut}>
            <Text style={styles.leftContent}>Logout</Text>
            <View style={styles.rightContent}>
              <Ionicons name="log-out-outline" size={19} color={"#200E32"} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MoreDetail;

const styles = StyleSheet.create({
  container: {
    marginTop: -25,
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#F7F8F9",
  },

  BtnItem: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    fontSize: 14,
    marginRight: 5,
  },

  block: {
    paddingVertical: 5,
    paddingHorizontal: 9,
    backgroundColor: "#ffff",
    flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: 12,
  },

  footer: {
    paddingVertical: 5,
    paddingHorizontal: 9,
    backgroundColor: "#ffff",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  rightContent: {
    padding: 11,
  },
  leftContent: {
    color: "#2D1F21",
    padding: 11,
  },
  boldText: {
    color: "#2D1F21",
    fontWeight: "700",
  },
});
