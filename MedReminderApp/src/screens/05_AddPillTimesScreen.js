import { Button, TextInput, StyleSheet, Text, View, Alert } from 'react-native';
import createStyles from '../view/SplitView';
import TopNav from '../view/TopNav';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import useInput from '../controller/PillTimeController';

// TODO:
// - add time picker dependency (after merge)
// - wrap bottom screen in a scroll list (after merge)
// - add a check for input
// - link chosen times to pill object (after merge)

const splitScreenStyles = createStyles();


// time picker variables

const AddPillTimesScreen = (props) => {
  const navigation = useNavigation();

  // text input variables
  const [input, setText] = useState('');

  var pillTimes = []; // pill times for rendering
  var inputs = []; // vars for each time input
  var dtPickerID = null;
  var currentInput = null;

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
    // initialise variables for each input
    pillTimes = [];
    inputs = [];
    dtPickerID = null;
    currentInput = null;

    // for every input amount, add a new row to the pillTimes list
    for (let i = 0; i < input; i++) {
      inputs.push(useInput(new Date())) // makes a new input variable and adds it to the list
      currentInput = inputs[i]; // sets input to variable
      dtPickerID = 'dtPicker' + i; // reset testID
      pillTimes.push(<Text key={i} style={styles.listText}>
      { 'Pill ' + (i + 1) + ':         ' }
      <Button onPress={inputs[i].showDatepicker} title="--:--"/>
      {currentInput.show && (
        <DateTimePicker
        testID={dtPickerID} 
        value={inputs[i].date}
        mode={inputs[i].mode}
        is24Hour={false}
        display="default"
        onChange={inputs[i].onChange}/>
      )}
      </Text>);
    }
    console.log(pillTimes)
    console.log(inputs)
    console.log('=============================')
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
          <Text style={styles.bottomScreenText}> How Many Times A Day? </Text>
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