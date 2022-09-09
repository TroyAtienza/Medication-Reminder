import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home");
        console.log(user.email);
      }
    })
    return unsubscribe;
  }, [])

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
    })
    .catch(error => {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        Alert.alert("User not found.");
      }
    });
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/MedApp_Logo.png")} style={styles.logo}></Image>
      <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
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
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSignIn}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Don't have an account?
              <Text style={styles.footerLink} onPress={() => {navigation.navigate("Register")}}>
                &nbsp;Sign up
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default LoginScreen

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