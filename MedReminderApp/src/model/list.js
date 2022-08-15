import Pill from "./pill";

const temp = new Pill();
temp.pillName = "hi";

export const data = [
    {
        day: "Monday",
        items: [temp]
    },
    {
        day: "Tuesday",
        items: []
    },
    {
        day: "Wednesday",
        items: []
    },
    {
        day: "Thursday",
        items: []
    },
    {
        day: "Friday",
        items: []
    },
    {
        day: "Saturday",
        items: []
    },
    {
        day: "Sunday",
        items: []
    }
];

export default {
    data,
}