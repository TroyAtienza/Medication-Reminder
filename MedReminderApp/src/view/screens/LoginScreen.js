import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";
import Profile from "../../model/Profile";
import ProfileOperations from "../../controller/ProfileController";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPreviousUser, setPreviousUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user && !isPreviousUser) {
        navigation.navigate("Home");
        AsyncStorageNative.setItem('last-user', JSON.stringify(user))
        ProfileOperations.profile = new Profile(
            user.email,
        )
      }
    })
    return unsubscribe;
  }, [])

  useEffect(() => {
    AsyncStorageNative.getItem('last-user').then((result) => {
      if (result) {
        let user = JSON.parse(result);
        ProfileOperations.profile = new Profile(
            user.email,
        );
        setPreviousUser(true);
        navigation.navigate("Home");
      }
      else {
        setPreviousUser(false);
      }
    });
  }, []);

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
      <Image source={require("../../assets/MedApp_Logo.png")} style={styles.logo}></Image>
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