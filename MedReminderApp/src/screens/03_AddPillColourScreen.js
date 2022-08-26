import { StatusBar } from 'expo-status-bar';
import { PillList } from '../model/PillList';
import  React, { useState } from 'react';
import createStyles from '../view/SplitView'
import { StyleSheet, Button, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import TopNav from '../view/TopNav'

// This page can register the top and bottom pill colors selected in 'color-color' var. 
// TODO:
// - need to link chosen color to pill object (can do once add pill type is done)
// - change color of button to grey after press
// - live pill change ? (don't know how to approach without using var. maybe look into state changes?)
// - add back and next button from ../components once completed.

const splitScreenStyles = createStyles();

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
    <View style={splitScreenStyles.container}>
      <TopNav/>

      {/* Top Screen */}
      <View style={splitScreenStyles.topScreen}>
        <Text>Select pill color!</Text>
        <Image style={styles.image} source={require('../assets/pillCapsule/white-white.png')}/>
      </View>

      {/* Bottom Screen */}
      <View style={splitScreenStyles.bottomScreen}>
      
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

const styles = StyleSheet.create({
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
  button : {
    
  },
});

export default AddPillColourScreen;