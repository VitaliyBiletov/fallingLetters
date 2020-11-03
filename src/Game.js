import $ from 'jquery';
import { Drop } from "./Drop";

export class Game {
    start(letter, collectionLetters){
        const words = collectionLetters;
        words.push(letter);
        //console.log('words:', words);
        const body = $("body");
        const clientWidth = document.documentElement.clientWidth;
        const drop = new Drop(getRandomWord(words));
        const randomPosX = Math.random() * clientWidth - drop.getWidth();
        body.append(drop.container);
        drop.move(randomPosX);
        const intervalId = setInterval(()=>{
            const drop = new Drop(getRandomWord(words));
            drop.container.addEventListener('click',()=>{
                drop.remove();
            })
            body.append(drop.container);
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


