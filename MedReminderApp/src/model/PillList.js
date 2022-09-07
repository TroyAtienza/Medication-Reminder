import React from 'react';
import { useState } from "react";
import { Text, TouchableOpacity, SafeAreaView, SectionList, StyleSheet, View, Button } from "react-native";
import Pill from "./Pill";

const temp = new Pill();
temp.pillName = "Panadol";
temp.pillRepeats = 5;
temp.pillInformation = "Take 2 every 8 hours.";

const temp1 = new Pill();
temp1.pillName = "Pill";
temp1.pillRepeats = 3;
temp1.pillInformation = "Take twice a day with food.";

const temp2 = new Pill();
temp2.pillName = "asdfsaf";
temp2.pillRepeats = 3;
temp2.pillInformation = "Take twice a day with food.";

const temp3 = new Pill();
temp3.pillName = "Pasdfsadfasd";
temp3.pillRepeats = 3;
temp3.pillInformation = "Take twice a day with food.";

const data = [
    {
      id: 0,
      day: 'Monday',
      data: [temp, temp1, temp2, temp3],
    },
    {
      id: 1,
      day: 'Tuesday',
      data: [temp2],
    },
    {
      id: 2,
      day: 'Wednesday',
      data: [],
    },
    {
      id: 3,
      day: 'Thursday',
      data: [temp3],
    },
    {
      id: 4,
      day: 'Friday',
      data: [],
    },
    {
      id: 5,
      day: 'Saturday',
      data: [],
    },
    {
      id: 6,
      day: 'Sunday',
      data: [],
    },
    
  ];
  
/**
 * Renders a touchable, dynamic list.
 * @param {day} props 
 * @returns The list.
 */

  const PillList = (props) => {
    const [state, setState] = useState(data);
    const index = state.findIndex(e => e.day === props.day); // Finds the index of the provided day.
    
    const editItem = (itemId, newValue) => {
      let newState = [...state];
      let itemIndex = newState.find((item) => item.id == itemId);
      if (itemIndex < 0) return;
      newState[itemIndex] = {
        ...newState[itemIndex],
        ...newValue,
      };
      setState(newState);
    };
  
    const removePill = (itemId, pill) => {
      let currentItem = state.find((item) => item.id == itemId);
      currentItem.data = currentItem.data.filter((item) => item != pill);
      editItem(itemId, currentItem);
    };

    const Item = ({ item, section }) => {
        if (section.id != index){
            return null;
        }
        const [taken, setTaken] = useState(false);
        return (
            <TouchableOpacity 
                onPress = {() => (taken) ? setTaken(false) : setTaken(true)}
                style = {[(taken) ? styles.taken : styles.notTaken, styles.row]}>
                <View style={{flex:2,flexDirection:"row",justifyContent:'space-between',padding:10}}>
                    <Text style={styles.textStyle}> {item.pillName} </Text>
                    <Text style={styles.textStyle}> {item.pillInformation} </Text>
                    <TouchableOpacity onPress={() => removePill(section.id, item)}> 
                        <View style={styles.circle2}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    };
    
    return (
        <SectionList 
            sections={state} 
            keyExtractor={(item, index) => item + index} 
            renderItem={Item}
        />
    );
  }
  
  const styles = StyleSheet.create({
    textStyle:{
        textAlign: 'left',
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center',
    },
    header: {
        paddingVertical: 5,
        width: '100%',
        borderBottomWidth: 1,
    },
    inputWrapper: {
        paddingVertical: 15,
        marginBottom: 10,
    },
    sectionListWrapper: {
        padding: 5,
    },
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    taken: {
        backgroundColor: "grey",
    },
    notTaken: {
        backgroundColor: "lightgrey",
    },
    circle2: {
        width: 15,
        height: 15,
        borderRadius: 44/2,
        backgroundColor: 'red',
    },
  });

export {PillList, data}