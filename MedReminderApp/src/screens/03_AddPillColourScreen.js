import { StatusBar } from 'expo-status-bar';
import { PillList } from '../model/PillList';
import React from 'react';
import { StyleSheet, Button, Text, Alert, View, TouchableOpacity, Image } from 'react-native';
import AddButton from '../components/AddButton';
import { useNavigation } from "@react-navigation/native";

const AddPillColourScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Top Nav */}
      <View style={{backgroundColor : "#A3CEF1", height : "15%", width: "100%"}}>
          <View style={styles.fixToText}>
          <Button title="Profile"
            onPress={() => Alert.alert("insert profile link here")}/>
          <Text style={{color : "#6096BA", fontSize : 30, fontWeight : "bold", textAlign : "center"}}> MedApp </Text>
          <Button title="Sign out"
            onPress={() => Alert.alert("You are now signed out")}/>
        </View>
      </View>

      {/* Top Screen */}
      <View style={styles.topScreen}>
        <Text>Pill Colour!</Text>
      </View>

      {/* Bottom Screen */}
        <View style={styles.bottomScreen}>
          <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
            <Image source={require("../assets/Pill Capsule.png")}/>
          </TouchableOpacity>
        </View>
     
    </View>
  );
}

const widthProportion = '100%';
const heightProportion = '50%';
const paddingTopBottom = 40;
const paddingLeftRight = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: paddingTopBottom,
  },
  topScreen:{
    backgroundColor: '#fff',
    width: widthProportion,
    height: heightProportion,  
    paddingTop: paddingTopBottom,
    paddingLeft: paddingLeftRight,
    paddingBottom: paddingTopBottom,
    paddingRight: paddingLeftRight,
  },
    bottomScreen:{
    backgroundColor: '#9A9A98',
    width: widthProportion,
    height: heightProportion,
    paddingTop: paddingTopBottom,
    paddingLeft: paddingLeftRight,
    paddingBottom: paddingTopBottom,
    paddingRight: paddingLeftRight,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: "15%",
  },
  button: {
    backgroundColor: '#CAE3F7',
    width: 60,
    height: 60,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});

export default AddPillColourScreen;