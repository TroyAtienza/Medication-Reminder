import { data } from "../model/PillList";
import Pill from "../model/Pill";

//Builder Model
let pill = new Pill();

function createNewPill() {
    pill = new Pill();
}

// TODO: dynamic data indexing based off selected day in pill case.
export const addPill = () => {
    // for (let i of pill.repeats) {
    //     if (i) {
    //         data[6].data.push(pill);
    //     } 
    // }
    
    console.log(data);
}

export function buildPill() {
    addPill();
}

export function setPillName(name) {
    pill.name = name;
}

export function setPillInformation(information) {
    pill.information = information;
}

export function setPillColour(colour) {
    pill.colour = colour;
}

// TODO: Requires further testing because unsure whether the image can be displayed again.
export function setPillType(type) {
    pill.type = type;
}

export function setPillSize(size) {
    pill.size = size;
}

export function setPillStartingDate (date) {
    pill.startingDate = date;
}

export function setPillEndingDate (date) {
    pill.endingDate = date;
}

export function setPillFrequency(frequency) {
    pill.frequency = frequency;
}