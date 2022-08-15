import { data } from './src/model/list';
import Pill from "./pill";

//Builder Model
const currentPill = new Pill();

const AddPill = () => {
    data[0].push(currentPill);
}

const addName = (name) => {
    currentPill.name = name;
}