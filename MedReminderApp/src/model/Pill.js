// TODO: extend Component and implement render() method for pill icon 
import { Component } from 'react';
import { Text, StyleSheet, View } from "react-native";

export default class Pill{
  constructor(){
    this.name = "";
    this.type = "";
    this.size = "";
    this.colour = ["", ""];
    this.information = "";
    this.repeats = [0, 0, 0, 0, 0, 0, 0];
    this.frequency = 0;
    this.times = [];
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
