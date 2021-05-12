import $ from "jquery";

export class Timer {
    constructor(timeMinute) {
        this.timeMinute = timeMinute * 60;
    }
    start(actionEnd){
        const timerContainer = $('#timer');
        let timeMinute = this.timeMinute
        const timer = setInterval(function () {
            let seconds = timeMinute % 60; // Получаем секунды
            let minutes = timeMinute / 60 % 60; // Получаем минуты
            // Условие если время закончилось то...
            //console.log(timeMinute)
            if (timeMinute <= 0) {
                // Таймер удаляется
                clearInterval(timer);
                actionEnd()
                // Выводит сообщение что время закончилось
            } else { // Иначе
                // Создаём строку с выводом времени
                timerContainer.text(`0${Math.trunc(minutes)} : ${Math.trunc(seconds / 10) === 0 ? '0': ''}${seconds}`);
                let strTimer = `${Math.trunc(minutes)}:${seconds}`;
                // Выводим строку в блок для показа таймера
                //console.log(strTimer);
            }
            --timeMinute;
             // Уменьшаем таймер
        }, 1000)
    }
}