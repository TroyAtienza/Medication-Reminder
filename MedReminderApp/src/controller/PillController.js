import { data } from './src/model/list';

//Builder Model
const currentPill = new Pill();

const AddPill = () => {
    data[0].push(currentPill);
}

const addName = (name) => {
    currentPill.name = name;
}