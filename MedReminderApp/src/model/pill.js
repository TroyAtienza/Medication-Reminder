// TODO: extend Component and implement render() method for pill icon 
import React from 'react';
import { Component } from 'react';
import {View, Text, TouchableOpacity, Button, Alert, StyleSheet} from 'react-native';

export default class Pill extends Component{
    constructor(props){
        super(props);
        this.pillName = "";
        this.pillSize = "";
        this.pillColour = ["", ""];
        this.pillInformation = "";
        this.pillRepeats = [0, 0, 0, 0, 0, 0, 0];
        this.pillFrequency = 0;
        this.pillTimes = [];
        this.isTaken = false;
    }
    render() {
        return (
        <View style={styles.container}>
            <Text> Name </Text>
            <Button style={styles.deleteButton} title="Delete" onPress={() => Alert.alert('Are you sure you want to delete?','You cannot undo...',[
                {text: 'OK', onPress: this.onDelete},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
             ],{cancelable: false})}
             />
        </View>
        );      
    }
}

function onDelete(){
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    deleteButton: {
      height: 40,
      top: '2%',
      left: '10%',
      width: '30%',
      float: "right",
    },
    text:{
      fontSize: 12,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'red',
    },
  });
