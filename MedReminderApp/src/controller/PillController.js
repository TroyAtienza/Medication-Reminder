import { data } from "../model/PillList";
import Pill from "../model/Pill";

// TODO: Callback functions are probably going to be useful here.
//Builder Model
const currentPill = new Pill();

const AddPill = () => {
    data[0].push(currentPill);
}

const addName = (name) => {
    currentPill.name = name;
}