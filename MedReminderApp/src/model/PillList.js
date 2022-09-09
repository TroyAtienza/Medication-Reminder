import React from 'react';
import { useState } from "react";
import { SectionList, StyleSheet, View } from "react-native";
import Item from '../components/Item';

const data = [
    {
      id: 0,
      day: 'Monday',
      data: [],
    },
    {
      id: 1,
      day: 'Tuesday',
      data: [],
    },
    {
      id: 2,
      day: 'Wednesday',
      data: [],
    },
    {
      id: 3,
      day: 'Thursday',
      data: [],
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
    // const index = state.findIndex(e => e.day === props.day); // Finds the index of the provided day.
    const index = props.index;

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

    return (
        <View>
          <SectionList 
              sections={state} 
              keyExtractor={(item, index) => item + index} 
              renderItem={({item, section}) => <Item index={index} section={section} item={item} removePill={removePill}/>}
          />
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    titleStyle:{
        textAlign: 'left',
        fontSize: 20,
        fontStyle: 'bold',
    },
    textStyle:{
        textAlign: 'left',
        fontSize: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
  });

export {PillList, data}
