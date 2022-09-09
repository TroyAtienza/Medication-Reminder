import React, { useState } from 'react';
import { StyleSheet, Button, ScrollView, Text, View, TextInput, Platform } from 'react-native';
import createStyles from '../../styles/GlobalStyles'
import TopNav from '../components/TopNav'
import PillboxCarousel from "../components/PillboxCarousel";
import RepeatSelection from '../components/RepeatSelection';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import { setPillInformation, setPillName, setPillStartingDate, setPillEndingDate, setPillRepeats } from '../../controller/PillController';
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';

const styles = createStyles()
const buttonStyle = require('../../styles/ButtonStyle');

const AddPillDetailsScreen = (props) => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  const [name, onChangeName] = useState(''); //name input state
  const [description, onChangeDescription] = useState(null);

  const [startDate, setStartDate] = useState(new Date()); //start and end date states
  const [endDate, setEndDate] = useState(new Date());

  const [modeEnd, setModeEnd] = useState('date'); //set mode of end datepicker
  const [showEnd, setShowEnd] = useState(false);

  const [modeStart, setModeStart] = useState('date'); //set mode of start date picker
  const [showStart, setShowStart] = useState(false);

  const [textStart, setTextStart] = useState("Select a start date!");
  const [textEnd, setTextEnd] = useState("Select an end date!");

  const [selectedDays, setSelectedDays] = useState([0,0,0,0,0,0,0]); //initialise repeats of days

  /**
   * Updates the start date
   * 
   * @param {*} event 
   * @param {*} selectedDate 
   */
  const onChangeStartDate = (event, selectedDate) => {
    if (event.type == 'set') { //on set event, change the date view
      const currentDate = selectedDate || startDate;
      setShowStart(Platform.OS === 'android');
      setStartDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear(); //set date layout
      setTextStart(fDate);
    }
    setShowStart(false);
  }

   /**
   * Updates the end date
   * 
   * @param {*} event 
   * @param {*} selectedDate 
   */
  const onChangeEndDate = (event, selectedDate) => {
    if (event.type == 'set') {
      const currentDate = selectedDate || endDate;
      setShowEnd(Platform.OS === 'android');
      setEndDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
      setTextEnd(fDate);
    }
    setShowEnd(false);
  }

  /** Displays date view when it is active */
  const showModeStart = (currentMode) => {
    setShowStart(true); 
    setModeStart(currentMode);
  }

  const showModeEnd= (currentMode) => {
    setShowEnd(true);
    setModeEnd(currentMode);
  }
  
  return (
    <View style={styles.container}>
      <TopNav/>
      {/* Add top screen */}
      <View style={styles.topScreen}>
        <PillboxCarousel setIndex = {setIndex}/>
      </View>
      {/* Add bottom screen */}
      <View style={styles.bottomScreen}>
        <ScrollView contentContainerStyle={styles.listContainer}>  
        {/* Add repeat selection */}     
          <RepeatSelection setSelectedDays = {setSelectedDays}/>
          {/* Add name text input */}
          <Text style={detailsStyles.titleText}> Name: </Text>
          <View style={detailsStyles.inputBox}>
            <TextInput style={detailsStyles.inputText} onChangeName={onChangeName} onChangeText={text => onChangeName(text)} value={name}/>
          </View>
          {/* Add description text input */}
          <Text style={detailsStyles.titleText}> Additional Information: </Text>
          <View style={detailsStyles.inputBox}>
            <TextInput style={detailsStyles.inputText} onChangeDescription={onChangeDescription} onChangeText={text => onChangeDescription(text)} value={description}/>
          </View>
          
          {/* Add and set start date */}
          <View style={detailsStyles.rowContainer}>
           <Button title="Start Date:" onPress={()=> showModeStart('date')}/>
           <Text style={detailsStyles.inputText}> {textStart} </Text>
          </View>

          {showStart && (
              <DateTimePicker testID='startDatePicker' value={startDate} mode={modeStart} is24Hour={true} display='default' onChange={onChangeStartDate}/>
          )}
          {/* Add and set end date */}  
          <View style={detailsStyles.rowContainer}>
           <Button title="End Date:" onPress={()=> showModeEnd('date')}/>
           <Text style={detailsStyles.inputText}> {textEnd} </Text>
          </View>

          {showEnd && (
              <DateTimePicker testID='endDatePicker' value={endDate} mode={modeEnd} is24Hour={true} display='default' onChange={onChangeEndDate}/>
          )}

          {/* Add back and next button navigation */}  
          <View style={buttonStyle.footerContainer}> 
            <BackButton onPress={() => navigation.navigate('PillType')}/>
            <NextButton onPress={() => {
              setPillName(name);
              setPillInformation(description); //set the pill information when moving screens
              setPillStartingDate(startDate);
              setPillEndingDate(endDate);
              setPillRepeats(selectedDays);
              navigation.navigate('PillTimes');
            }}/>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const detailsStyles = StyleSheet.create({
  dateText:{
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  inputBox: {
    height: '10%',
    width: '100%',
    backgroundColor: '#A9A9A9',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    autoCorrect: 'false',
    maxLength: 50,
    autoCapitalized: "words",
    blurOnSubmit: true,
    placeholderTextColor: "#777"
  },
  inputText: {
    fontSize: 15,
    paddingLeft: '2%',
    paddingTop: '2%',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  rowContainer: {
    flexDirection: 'row',
    paddingTop: '3%',
  },
  buttonContainer:{
    height: '12%',
    width: '20%',
    alignItems: 'flex-end',
  }
})

export default AddPillDetailsScreen;