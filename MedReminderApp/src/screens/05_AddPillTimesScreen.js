import { Button, TextInput, StyleSheet, Text, View, Alert } from 'react-native';
import createStyles from '../view/SplitView';
import TopNav from '../view/TopNav';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

// TODO:
// - add time picker dependency (after merge)
// - wrap bottom screen in a scroll list (after merge)
// - add a check for input
// - link chosen times to pill object (after merge)

const splitScreenStyles = createStyles();

const AddPillTimesScreen = (props) => {
  const navigation = useNavigation();
  const [input, setText] = useState(''); // text input variables
  var pillTimes = []; // pill times for rendering

  /*
  * Checks if the text input value is valid. 
  * If it is, the pill dosage list can be updated, otherwise the user must input again.
  */
  const checkInput = () => {
    if (isNaN(input)) { // need to check for non-ints, empty spaces, add limit, non zero
      Alert.alert("Please enter a valid number.");
      // need to make the text input box clear
    } else {
      renderPillTimes();
    }
  }

  /*
  * Updates the length of the dosage time list to render the amount of
  * dosages from the users input 
  * 
  */
  const renderPillTimes = () => {
    pillTimes = [];
    for (let i = 0; i < input; i++) {
      pillTimes.push(<Text key={i} style={styles.listText}> 
      { 'Pill ' + (i + 1) + ': ' }
      </Text>); // need to add time picker with button, styling
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
          value={input}
          onChangeText={(newInput) => setText(newInput)}
          placeholder="Enter dosage amount" 
          style={styles.bottomScreenText}
          keyboardType="numeric"/>
        </View>

        {/* Live Dosage List */}
        <View style={styles.row}>
          <Text style={styles.bottomScreenText}> Select Dosage Times: </Text>
          { checkInput() }
          { pillTimes }
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