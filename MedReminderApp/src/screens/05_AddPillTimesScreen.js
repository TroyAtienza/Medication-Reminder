import { Button, TextInput, StyleSheet, Text, View, Alert } from 'react-native';
import createStyles from '../view/SplitView';
import TopNav from '../view/TopNav';
import React, { useState } from 'react';

// TODO:
// - add time picker dependency
// - render list dependant on dosage amount
// - wrap bottom screen in a flat list.

const splitScreenStyles = createStyles();
var dosage = [];
var isValid = false;

const AddPillTimesScreen = (props) => {
  const [text, setText] = useState('');

  /*
  * Checks if the text input value is valid. 
  * If it is, the pill dosage list can be updated, otherwise the user must input again.
  */
  const checkInput = () => {
    if (isNaN(text)) {
      Alert.alert("Please enter a valid number.");
      // need to make the text input box clear
      isValid = false;
    } else {
      isValid = true;
      newDosage();
    }
  }

  /*
  * Updates the dosage list to match users input 
  * 
  */
  const newDosage = () => {
    dosage = [];
    for (let i = 0; i < text; i++) {
      dosage.push(<Text style={styles.listText}> {'Pill ' + (i + 1) + ': '} </Text>);
    }
  }

    return (
      <View style={splitScreenStyles.container}>
        <TopNav/>

        {/* Top Screen */}
        <View style={splitScreenStyles.topScreen}>  
          <Text style={styles.topText}>Set a Time to Take Your Pill:</Text>
        </View>

        {/* Bottom Screen */}
        <View style={splitScreenStyles.bottomScreen}>

          {/* Frequency Input */}
          <View style={styles.row}>
            <Text style={styles.bottomScreenText}> Pill dosage per day: </Text>
            <TextInput
            value={text}
            onChangeText={(newText) => setText(newText)}
            placeholder="Enter dosage amount" 
            style={styles.bottomScreenText}
            keyboardType="numeric"/>
          </View>

          {/* Dosage List */}
          <View style={styles.row}>
            <Text style={styles.bottomScreenText}> Select Dosage Times: </Text>
            { checkInput() }
            { dosage }
          </View>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <View style={styles.buttons}>
              <Button title="Back" onPress={() =>  navigation.navigate('PillDetails')}></Button>
            </View>
            <View style={styles.buttons}>
              <Button title="Finish" onPress={() =>  navigation.navigate('Home')}></Button>
            </View> 
          </View> 
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  row: {
    flex: 1,
  },
  topText : {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#274C77',
  },
  bottomScreenText : {
    color: 'white',
    marginBottom: 10,
    fontSize: 16,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttons: {
    justifyContent: 'space-between',
  },
  listText: {
    fontSize: 20,
    color: 'white',
  },
});

export default AddPillTimesScreen;