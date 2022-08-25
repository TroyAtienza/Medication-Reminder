import { StatusBar } from 'expo-status-bar';
import { PillList } from '../model/PillList';
import React from 'react';
import createStyles from '../view/SplitView'
import { StyleSheet, Button, Text, Alert, View, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ColorSelectButton = ({ onPress, backgroundColor}) => (
  <View>
    <TouchableOpacity 
    onPress={onPress} 
    style={styles.button}>
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
        <Text>Pill Colour!</Text>
      </View>

      {/* Bottom Screen */}
      <View style={styles.bottomScreen}>

        {/* Top capsule */}
        <View style={styles.colorSelect}>
          <ColorSelectButton backgroundColor="#ff0000" onPress={() => { alert("topRed") }}/>
          <ColorSelectButton backgroundColor="#00FF00" onPress={() => { alert("topGreen") }}/>
          <ColorSelectButton backgroundColor="#0000FF" onPress={() => { alert("topBlue") }}/>
          <ColorSelectButton backgroundColor="#FFFFFF" onPress={() => { alert("topWhite") }}/>
        </View>

        {/* Bottom capsule */}
        <View style={styles.colorSelect}>
          <ColorSelectButton backgroundColor="#ff0000" onPress={() => { alert("botRed") }}/>
          <ColorSelectButton backgroundColor="#00FF00" onPress={() => { alert("botGreen") }}/>
          <ColorSelectButton backgroundColor="#0000FF" onPress={() => { alert("botBlue") }}/>
          <ColorSelectButton backgroundColor="#FFFFFF" onPress={() => { alert("botWhite") }}/>
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
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    height: 60,
    width: 60,
  },
});

export default AddPillColourScreen;