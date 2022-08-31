import { React, useState } from 'react';
import { StyleSheet, Button, ScrollView, Text, View, TextInput, Platform } from 'react-native';
import createStyles from '../view/SplitView'
import TopNav from '../view/TopNav'
import PillboxCarousel from "../components/PillboxCarousel";
import AddButton from '../components/AddButton';
import RepeatSelection from '../components/RepeatSelection';
import DateTimePicker from '@react-native-community/datetimepicker'
import { useNavigation } from "@react-navigation/native";
import Pill from '../model/Pill';

const styles = createStyles()

const AddPillDetailsScreen = (props) => {
  const navigation = useNavigation();
  const [name, onChangeName] = useState('');
  const [description, onChangeDescription] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textStart, setTextStart] = useState("Select a start date!");
  const [textEnd, setTextEnd] = useState("Select an end date!");

  const onChangeStartDate = (event, selectedDate) => {
    if (event.type == 'set') {
    const currentDate = selectedDate || startDate;
    setShow(Platform.OS === 'android');
    setStartDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
    setTextStart(fDate);
    console.log(textStart);
    }

    setShow(false);
  }

  const onChangeEndDate = (event, selectedDate) => {
    if (event.type == 'set') {
      const currentDate = selectedDate || endDate;
      setShow(Platform.OS === 'android');
      setEndDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear();
      setTextEnd(fDate);
    }
    setShow(false);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }
 
  function sendValues(enteredName, enteredDescription, startDate, endDate) {
    console.log(enteredName);
    console.log(enteredDescription);
    console.log(startDate);
    console.log(endDate);
    new Pill();
  };
  
  return (
    <View style={styles.container}>
      <TopNav/>
      <View style={styles.topScreen}>
        <AddButton/>
        <PillboxCarousel/>
      </View>
      <View style={styles.bottomScreen}>
        <ScrollView contentContainerStyle={styles.listContainer}> 
        
          <RepeatSelection/>
          <Text style={detailsStyles.titleText}> Name: </Text>
          <View style={detailsStyles.inputBox}>
            <TextInput style={detailsStyles.inputText} onChangeName={onChangeName} onChangeText={text => onChangeName(text)} value={name}/>
          </View>

          <Text style={detailsStyles.titleText}> Additional Information: </Text>
          <View style={detailsStyles.inputBox}>
            <TextInput style={detailsStyles.inputText} onChangeDescription={onChangeDescription} onChangeText={text => onChangeDescription(text)} value={description}/>
          </View>
          
          <View style={detailsStyles.rowContainer}>
           <Button title="Start Date:" onPress={()=> showMode('date')}/>
           <Text style={detailsStyles.inputText}> {textStart} </Text>
          </View>

          {show && (
              <DateTimePicker testID='startDatePicker' value={startDate} mode={mode} is24Hour={true} display='default' onChange={onChangeStartDate}/>
          )}

          <View style={detailsStyles.rowContainer}>
           <Button title="End Date:" onPress={()=> showMode('date')}/>
           <Text style={detailsStyles.inputText}> {textEnd} </Text>
          </View>

          {show && (
              <DateTimePicker testID='endDatePicker' value={endDate} mode={mode} is24Hour={true} display='default' onChange={onChangeEndDate}/>
          )}

          <View style={{alignItems: 'flex-end'}}>
            <Button title="Create Pill" fontWeightm='bold' onPress={() => sendValues(name, description, startDate, endDate)}/> 
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