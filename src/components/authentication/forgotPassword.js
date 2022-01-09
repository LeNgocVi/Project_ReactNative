import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  Modal,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../../../firebase";
import { Ionicons } from "@expo/vector-icons";

const ForgotPassword = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const forgotPassword = (Email) => {
    console.log("reset email sent to " + Email);
    auth
      .sendPasswordResetEmail(Email, null)
      .then(() => {
        setEmail("");
        setModalVisible(true);
      })
      .catch(function (e) {
        console.log(e);
      });
  };
  return (
    <SafeAreaView behavior="padding" style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="gray"
          onPress={() => navigation.navigate("Login")}
          style={styles.iconHeader}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.passwordText}>Forgot password</Text>
        <Text style={styles.passwordSub}>
          Please enter your email address to get reset link
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text>Email</Text>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => forgotPassword(email)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Reset Link</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={require("../../../assets/logo.png")}
              style={{ width: 80, height: 80, resizeMode: "contain" }}
            />
            <Text style={styles.modalText}>Success</Text>
            <Text style={{ textAlign: "center", color: "#808080" }}>
              Reset link has been sent to {"\n"}
              “goodstartearlylearning@gmail.com”
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
    marginTop: 40,
  },
  inputContainer: {
    width: "90%",
  },
  iconHeader: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  passwordText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  passwordSub: {
    color: "#808080",
    fontSize: 14,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#DB147F",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginTop: 18,
    backgroundColor: "#DB147F",
    paddingHorizontal: 105,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});
