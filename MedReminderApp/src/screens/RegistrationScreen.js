import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      console.log('Account created');
      const user = userCredentials.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/MedApp_Logo.png")} style={styles.logo}></Image>
      <KeyboardAvoidingView
        style={styles.inputContainer}
        behavior="padding"
      >
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSignUp}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>
                Already have an account?
                <Text style={styles.footerLink} onPress={() => { navigation.navigate("Login") }}>
                  Log in
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#A3CEF1",
  },
  logo: {
    width: 200,
    height: 200,
    marginTop:60,
  },
  inputContainer: {
    marginTop: 100,
    width: "80%",
  },
  input: {
    backgroundColor: "#E7ECEF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 15,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: "#6096BA",
    width: "100%",
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "#E7ECEF",
    fontWeight: "700",
    fontSize: 16,
  },
  footerContainer: {
    marginTop: 20,
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
  },
})