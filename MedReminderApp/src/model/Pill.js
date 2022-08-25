// TODO: extend Component and implement render() method for pill icon 
import { Component } from 'react';

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
