// TODO: extend Component and implement render() method for pill icon 
import { Component } from 'react';
import { Text, StyleSheet, View } from "react-native";

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
  }
  render(){
    return(
      <View>
        <Text> Name Information Repeats </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
      backgroundColor: "grey",
  },
  dontView: {
      backgroundColor: "white",
  },
  item: {
      margin: 10,
  },
  text: {
      fontSize: 12,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'red',
  },
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
})
