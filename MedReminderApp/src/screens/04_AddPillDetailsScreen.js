import React, { useState } from 'react';
import { StyleSheet, Button, ScrollView, Text, View, TextInput, Platform } from 'react-native';
import createStyles from '../view/SplitView'
import TopNav from '../view/TopNav'
import PillboxCarousel from "../components/PillboxCarousel";
import AddButton from '../components/AddButton';
import RepeatSelection from '../components/RepeatSelection';
import DateTimePicker from '@react-native-community/datetimepicker'
import { useNavigation } from "@react-navigation/native";
import Pill from '../model/Pill';
import { setPillInformation, setPillName, setPillStartingDate, setPillEndingDate, setPillRepeats } from '../controller/PillController';
import BackButton from '../components/BackButton';
import NextButton from '../components/NextButton';

const styles = createStyles()
const buttonStyle = require('../styles/ButtonStyle');

const AddPillDetailsScreen = (props) => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  const [name, onChangeName] = useState('');
  const [description, onChangeDescription] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [modeEnd, setModeEnd] = useState('date');
  const [showEnd, setShowEnd] = useState(false);

  const [modeStart, setModeStart] = useState('date');
  const [showStart, setShowStart] = useState(false);

  const [textStart, setTextStart] = useState("Select a start date!");
  const [textEnd, setTextEnd] = useState("Select an end date!");

  const [selectedDays, setSelectedDays] = useState([0,0,0,0,0,0,0]);

  const onChangeStartDate = (event, selectedDate) => {
    if (event.type == 'set') {
      const currentDate = selectedDate || startDate;
      setShowStart(Platform.OS === 'android');
      setStartDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
      setTextStart(fDate);
    }
    setShowStart(false);
  }

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
      <View style={styles.topScreen}>
        <AddButton onPress={() => navigation.navigate("PillType")}/>
        <PillboxCarousel setIndex = {setIndex}/>
      </View>
      <View style={styles.bottomScreen}>
        <ScrollView contentContainerStyle={styles.listContainer}> 
        
          <RepeatSelection setSelectedDays = {setSelectedDays}/>
          <Text style={detailsStyles.titleText}> Name: </Text>
          <View style={detailsStyles.inputBox}>
            <TextInput style={detailsStyles.inputText} onChangeName={onChangeName} onChangeText={text => onChangeName(text)} value={name}/>
          </View>

          <Text style={detailsStyles.titleText}> Additional Information: </Text>
          <View style={detailsStyles.inputBox}>
            <TextInput style={detailsStyles.inputText} onChangeDescription={onChangeDescription} onChangeText={text => onChangeDescription(text)} value={description}/>
          </View>
          
          <View style={detailsStyles.rowContainer}>
           <Button title="Start Date:" onPress={()=> showModeStart('date')}/>
           <Text style={detailsStyles.inputText}> {textStart} </Text>
          </View>

          {showStart && (
              <DateTimePicker testID='startDatePicker' value={startDate} mode={modeStart} is24Hour={true} display='default' onChange={onChangeStartDate}/>
          )}

          <View style={detailsStyles.rowContainer}>
           <Button title="End Date:" onPress={()=> showModeEnd('date')}/>
           <Text style={detailsStyles.inputText}> {textEnd} </Text>
          </View>

          {showEnd && (
              <DateTimePicker testID='endDatePicker' value={endDate} mode={modeEnd} is24Hour={true} display='default' onChange={onChangeEndDate}/>
          )}

          <View style={buttonStyle.footerContainer}>
            <BackButton onPress={() => navigation.navigate('PillType')}/>
            <NextButton onPress={() => {
              setPillName(name);
              setPillInformation(description);
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