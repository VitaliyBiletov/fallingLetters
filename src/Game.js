import { Drop } from "./Drop";
import { Timer } from "./Timer";
import $ from 'jquery';

export class Game {
    constructor() {
        this.score = 0;
    }
    start(letter, collectionLetters){
        const timer = new Timer();
        timer.start(1);

        const words = collectionLetters;
        words.push(letter);
        //console.log('words:', words);
        const body = document.querySelector('body');
        // const clientWidth = document.documentElement.clientWidth;
        // const drop = new Drop(getRandomWord(words));
        // const randomPosX = Math.random() * clientWidth - drop.getWidth();
        // body.appendChild(drop.container);
        // drop.move(randomPosX);
        // drop.container.addEventListener('click',()=>{
        //     drop.remove();
        //     this.score += 1;
        //     console.log(this.score);
        // })
        $('#selectedLetter #letter').text(`Поймай только буквы: ${letter}`);
        setInterval(()=>{
            const currentLetter = getRandomWord(words);
            const drop = new Drop(currentLetter);
            drop.container.addEventListener('click',(e)=>{
                drop.remove();
                if (currentLetter == letter){
                    this.score += 1;
                    alert(`Счёт: ${this.score}`);
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


