import {
    ELEMENTS
} from "./view.js";
import {
    compareAsc,
    format,
    intervalToDuration,
    parse
} from "date-fns";

ELEMENTS.BUTTON.addEventListener('click', getDate);

function getDate() {
    let inputTime = Date.parse(ELEMENTS.INPUT.value);
    const currentTime = new Date();
    subDate(inputTime, currentTime);
    inputTime = '';
    console.log(inputTime)
}

function subDate(inputTime, currentTime) {
    setInterval(() => {
        const resultTime = intervalToDuration({
            start: new Date(),
            end: inputTime,
        });
        if (inputTime < currentTime) {
            ELEMENTS.INPUT.value = '';
            return alert('Введите дату больше текущей')
        }
        ELEMENTS.TEXT.value = `${resultTime.months} месяцев ${resultTime.days} дней ${resultTime.hours} часов ${resultTime.seconds} секунд`;

    }, 1000);
}