// TODO: extend Component and implement render() method for pill icon 
import { Component } from 'react';

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
}
