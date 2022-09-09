import { data } from "../model/PillList";
import Pill from "../model/Pill";

//Builder Model
let pill = new Pill();

/**
 * Adds a pill to the pill list.
 * The day the pill is added is based off pill.repeats information.
 */
export const addPill = () => {
    for (let i = 0; i < pill.repeats.length; i++) {
        if (pill.repeats[i]) {
            data[i].data.push(pill);
        }
    }
}

/**
 * Resets the pill to default.
 */
export function createNewPill() {
    pill = new Pill();
}

/**
 * Name setter.
 * @param name Name to be set.
 */
export function setPillName(name) {
    pill.name = name;
}

/**
 * Information setter.
 * @param information Info to be set.
 */
export function setPillInformation(information) {
    pill.information = information;
}


/**
 * Colour setter.
 * @param colour Colour to be set.
 */
export function setPillColour(colour) {
    pill.colour = colour;
}

/**
 * Type setter.
 * @param type Type to be set.
 */
export function setPillType(type) {
    pill.type = type;
}

/**
 * Size setter.
 * @param size Size to be set.
 */
export function setPillSize(size) {
    pill.size = size;
}

/**
 * Starting Date setter.
 * @param date The starting date to be set.
 */
export function setPillStartingDate (date) {
    pill.startingDate = date;
}

/**
 * Ending Date setter.
 * @param date The ending date to be set.
 */
export function setPillEndingDate (date) {
    pill.endingDate = date;
}

/**
 * Frequency setter.
 * @param frequency Frequency to be set.
 */
export function setPillFrequency(frequency) {
    pill.frequency = frequency;
}

/**
 * Repeats setter.
 * @param repeats Repeats to be set.
 */
export function setPillRepeats(repeats) {
    pill.repeats = repeats;
}