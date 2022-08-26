import { StatusBar } from 'expo-status-bar';
import { PillList } from '../model/PillList';
import  React, { useState } from 'react';
import createStyles from '../view/SplitView'
import { StyleSheet, Button, Text, Alert, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

// This page can register and return pill color. 
// TODO:
// - need to link chosen color to pill object
// - change color of button to grey after press
// - live pill change ? (don't know how to approach without using var. maybe look into state changes?)

// Pill color information
var topPillColor = 'white'
var botPillColor = 'white'
var colorName = 'white-white'

// Touchable opacity style
const ColorSelectButton = ({ onPress, backgroundColor }) => (
  <View>
    <TouchableOpacity style={{
      borderRadius: 15,
      height: 60,
      width: 60,
      backgroundColor: backgroundColor,
      }}
      onPress={onPress}
      disabled={false}>
    </TouchableOpacity>
  </View>
);

// Takes top pill color and bottom pill color to update color name in 'color-color' format
const changeColorName = ({}) => {
  colorName = topPillColor + '-' + botPillColor;
};

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
        <Text>Select pill color!</Text>
        <Image style={styles.image} source={require('../assets/pillCapsule/white-white.png')}/>
      </View>

      {/* Bottom Screen */}
      <View style={styles.bottomScreen}>
      
        {/* Top capsule */}
        <View style={styles.colorSelect}>
          <ColorSelectButton backgroundColor='#E74C3C' onPress={() => { topPillColor='red', changeColorName(topPillColor, botPillColor)}}/>
          <ColorSelectButton backgroundColor='#58D68D' onPress={() => { topPillColor='green', changeColorName(topPillColor, botPillColor)}}/>
          <ColorSelectButton backgroundColor='#3498DB' onPress={() => { topPillColor='blue', changeColorName(topPillColor, botPillColor)}}/>
          <ColorSelectButton backgroundColor='#FFFFFF' onPress={() => { topPillColor='white', changeColorName(topPillColor, botPillColor)}}/>
        </View>

        {/* Bottom capsule */}
        <View style={styles.colorSelect}>
          <ColorSelectButton backgroundColor='#E74C3C' onPress={() => { botPillColor='red', changeColorName(topPillColor, botPillColor)}}/>
          <ColorSelectButton backgroundColor='#58D68D' onPress={() => { botPillColor='green', changeColorName(topPillColor, botPillColor)}}/>
          <ColorSelectButton backgroundColor='#3498DB' onPress={() => { botPillColor='blue', changeColorName(topPillColor, botPillColor)}}/>
          <ColorSelectButton backgroundColor='#FFFFFF' onPress={() => { botPillColor='white', changeColorName(topPillColor, botPillColor)}}/>
        </View>

        {/* Buttons */}
        <View style={styles.colorSelect}>
          <View style={styles.bottomButton}>
            <Button style={styles.button} title="Back" onPress={() => navigation.navigate('PillType')}></Button>
          </View>
          <View style={styles.bottomButton}>
            <Button style={styles.button} title="Next" onPress={() => navigation.navigate('PillDetails')}></Button>
         </View>
        </View>

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
  colorSelect: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  image: {
    height: 130,
    width: 130,
    justifyContent: 'center',
  },
  bottomButton: {
    marginBottom: 50,
    justifyContent: 'space-between'
  },
});

export default AddPillColourScreen;