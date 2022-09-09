import { Button, TextInput, StyleSheet, Text, View, Alert } from 'react-native';
import createStyles from '../styles/GlobalStyles';
import TopNav from '../view/TopNav';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import FinishButton from '../components/FinishButton';
import { addPill } from '../controller/PillController'
import { setPillFrequency } from '../controller/PillController';

const splitScreenStyles = createStyles();
const buttonStyle = require('../styles/ButtonStyle');

const AddPillTimesScreen = (props) => {
  const navigation = useNavigation();

  // text input variables
  const [text, setText] = useState('');
  // pill times for rendering
  var pillTimes = []; 
  
  /*
  * Checks if the text input value is valid. 
  * If it is, the pill dosage list can be updated, otherwise the user must input again.
  */
  const checkInput = () => {
    if (isNaN(text)) { // need to check for non-ints, empty spaces, add limit, non zero
      Alert.alert("Please enter a valid number.");
    } else {
      renderPillTimes();
    }
  }

  /*
  * Updates the length of the dosage time list to render the amount of
  * dosages from the users input 
  */
  const renderPillTimes = () => {
    pillTimes = [];
    // for every input amount, add a new row to the pillTimes list
    for (let i = 0; i < text; i++) {
      pillTimes.push(<Text key={i} style={styles.listText}>
      { 'Pill ' + (i + 1) + ':         ' }
      </Text>);
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
          <Text style={styles.bottomScreenText}> How Many Times A Day? </Text>
          <TextInput
          value={text}
          onChangeText={(newText) => setText(newText)}
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
        <View style={buttonStyle.footerContainer}>
          <BackButton onPress={() => navigation.navigate('PillDetails')}/>
          <FinishButton onPress={() => {
            setPillFrequency(text);
            addPill();
            navigation.navigate('Home');
            }}/>
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
  listText: {
    fontSize: 20,
    color: 'white',
  },
});

export default AddPillTimesScreen;