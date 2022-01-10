import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("BottomTab");
      }
    });
    return unsubscribe;
  });
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };
  const handlesLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Login with email:", user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        style={styles.tinyLogo}
        source={require("../../../assets/logo.png")}
      />
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text>Email</Text>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            // style={styles.input}
          />
        </View>
        <View style={styles.input}>
          <Text>Password</Text>
          <TextInput
            label="Passwword"
            placeholder="Enter your passwword"
            value={password}
            onChangeText={(text) => setPassword(text)}
            // style={styles.input}
            secureTextEntry
          />
        </View>
      </View>
      <Text
        onPress={() => {
          navigation.navigate("ForgotPassWord");
        }}
        style={styles.txtForgot}
      >
        Forgot Password?
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlesLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.txtbottom}>
        <Text>If you have trouble logging in to KindiCare CRM,</Text>
        <Text>please contact our Customer Care team</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    height: 100,
    width: 100,
  },
  inputContainer: {
    width: "80%",
  },
  txtForgot: {
    paddingVertical: 20,
    width: "80%",
    color: "#DB147F",
    textAlign: "right",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    // borderWidth: 0.5,
    // opacity: 0.2,
  },
  // input: {
  //   backgroundColor: "white",
  //   paddingHorizontal: 15,
  //   paddingVertical: 10,
  //   borderRadius: 10,
  //   marginTop: 5,
  // },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#DB147F",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  txtbottom: {
    alignItems: "center",
    top: 120,
    lineHeight: 24,
  },
});
