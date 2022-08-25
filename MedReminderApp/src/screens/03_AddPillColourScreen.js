import { StatusBar } from 'expo-status-bar';
import { PillList } from '../model/PillList';
import React from 'react';
import createStyles from '../view/SplitView'
import { StyleSheet, Button, Text, Alert, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

var topPillColor = 'topWhite'
var botPillColor = 'botWhite'

const ColorSelectButton = ({ onPress, backgroundColor }) => (
  <View>
    <TouchableOpacity style={{
      borderRadius: 15,
      height: 60,
      width: 60,
      backgroundColor: backgroundColor,
      }}
      onPress={onPress}>
    </TouchableOpacity>
  </View>
);

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
      </View>

      {/* Bottom Screen */}
      <View style={styles.bottomScreen}>
      
        {/* Top capsule */}
        <View style={styles.colorSelect}>
          <ColorSelectButton backgroundColor='#E74C3C' onPress={() => { topPillColor='red', console.log(topPillColor, botPillColor) }}/>
          <ColorSelectButton backgroundColor='#58D68D' onPress={() => { topPillColor='green', console.log(topPillColor, botPillColor) }}/>
          <ColorSelectButton backgroundColor='#3498DB' onPress={() => { topPillColor='blue', console.log(topPillColor, botPillColor) }}/>
          <ColorSelectButton backgroundColor='#FFFFFF' onPress={() => { topPillColor='white', console.log(topPillColor, botPillColor) }}/>
        </View>

        {/* Bottom capsule */}
        <View style={styles.colorSelect}>
          <ColorSelectButton backgroundColor='#E74C3C' onPress={() => { botPillColor='red', console.log(topPillColor, botPillColor) }}/>
          <ColorSelectButton backgroundColor='#58D68D' onPress={() => { botPillColor='green', console.log(topPillColor, botPillColor) }}/>
          <ColorSelectButton backgroundColor='#3498DB' onPress={() => { botPillColor='blue', console.log(topPillColor, botPillColor) }}/>
          <ColorSelectButton backgroundColor='#FFFFFF' onPress={() => { botPillColor='white', console.log(topPillColor, botPillColor) }}/>
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
    height: 50,
    width: 50,
    justifyContent: 'space-evenly'
  },
});

export default AddPillColourScreen;