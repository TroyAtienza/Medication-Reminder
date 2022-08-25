import { data } from "../model/PillList";
import Pill from "../model/Pill";

//Builder Model
let pill = new Pill();

function createNewPill() {
    pill = new Pill();
}

// TODO: dynamic data indexing based off selected day in pill case.
const addPill = () => {
    data[0].push(this.pill);
}

export function buildPill() {
    addPill();
}

export function setPillName(name) {
    pill.name = name;
}

// TODO: Requires further testing because unsure whether the image can be displayed again.
export function setPillType(type) {
    pill.type = type;
}

export function setPillSize(size) {
    pill.size = size;
}

