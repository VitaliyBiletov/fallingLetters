import { Drop } from "./Drop";
import { Timer } from "./Timer";
import $ from 'jquery';
import drop_s from './sounds/drop.mp3'

export class Game {
    constructor() {
        this.score = 0;
    }
    async start(letter, collectionLetters){
        const timer = new Timer(1);
        let correctAppearedCount = 0; //количество правильных выпавших букв
        timer.start()
        const words = collectionLetters;
        words.push(letter);
        //console.log('words:', words);
        const body = document.querySelector('body');

        $('#selectedLetter #letter').text(`Поймай только буквы: ${letter}`);

        setInterval(()=>{
            const currentLetter = getRandomWord(words);
            const drop = new Drop(currentLetter);

            if (letter === currentLetter){
                correctAppearedCount += 1;
            }
            drop.container.addEventListener('click',(e)=>{
                //drop.remove();
                const audio = new Audio(drop_s);
                audio.play();
                //console.log(e.target.innerText);
                const selectLetter = e.target.innerText;
                //console.log(selectLetter, ' ', letter);
                if (selectLetter === letter){
                    this.score += 1;
                    drop.setFunny();
                } else {
                    drop.setSad();
                }
            })
            body.appendChild(drop.container);
            const min = drop.getWidth();
            const max = document.documentElement.clientWidth - min;
            const randomPosX = Math.round(Math.random() * (max - min) + min);
            drop.move(randomPosX);
        }, 2000)
    }
}

const getRandomWord = (words) => {
    const randomNum = Math.round(Math.random() * (words.length - 1));
    return words[randomNum];
}


