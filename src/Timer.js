export class Timer {
    start(timeMinute){
        timeMinute *= 60;
        const timer = setInterval(function () {
            let seconds = timeMinute % 60; // Получаем секунды
            let minutes = timeMinute / 60 % 60; // Получаем минуты
            // Условие если время закончилось то...
            if (timeMinute <= 0) {
                // Таймер удаляется
                clearInterval(timer);
                // Выводит сообщение что время закончилось
                alert("Время закончилось");
            } else { // Иначе
                // Создаём строку с выводом времени
                let strTimer = `${Math.trunc(minutes)}:${seconds}`;
                // Выводим строку в блок для показа таймера
                console.log(strTimer);
            }
            --timeMinute; // Уменьшаем таймер
        }, 1000)
    }
}