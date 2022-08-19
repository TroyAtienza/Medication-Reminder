import { data } from './src/model/list';
import Pill from "./pill";

// TODO: Callback functions are probably going to be useful here.
//Builder Model
const currentPill = new Pill();

const AddPill = () => {
    data[0].push(currentPill);
}

const addName = (name) => {
    currentPill.name = name;
}