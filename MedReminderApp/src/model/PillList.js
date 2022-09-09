import React from 'react';
import { useState } from "react";
import { SectionList, View } from "react-native";
import Item from '../view/components/Item';

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
    const [state, setState] = useState(data); //set initial state as original list
    const index = props.index; //find index of carousel 

    const editItem = (itemId, newValue) => {
      let newState = [...state]; //initialise a new state
      let itemIndex = newState.find((item) => item.id == itemId); //find the item to remove 
      if (itemIndex < 0) return;
      newState[itemIndex] = { 
        ...newState[itemIndex],
        ...newValue,
      };
      setState(newState); //sets the new state
    };
  
    const removePill = (itemId, pill) => {
      let currentItem = state.find((item) => item.id == itemId); //find the item id
      currentItem.data = currentItem.data.filter((item) => item != pill); //filters current list to remove item
      editItem(itemId, currentItem);
    };

    return (
      <View>
        <SectionList //uses section list to divide list by days
          sections={state} 
          keyExtractor={(item, index) => item + index} 
          //renders each item in the section, removes pill from render when deleted
          renderItem={({item, section}) => <Item index={index} section={section} item={item} removePill={removePill}/>}
        />
      </View>
    );
  }

export {PillList, data}
