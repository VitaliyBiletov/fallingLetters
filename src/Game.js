import {Drop} from "./Drop";

export class Game {
    start(letter, collectionLetters){
        const words = collectionLetters;
        words.push(letter);
        //console.log('words:', words);
        const body = document.querySelector('body');
        const clientWidth = document.documentElement.clientWidth;
        const drop = new Drop(getRandomWord(words));
        const randomPosX = Math.random() * clientWidth - drop.getWidth();
        body.appendChild(drop.container);
        drop.go(randomPosX);
        setInterval(()=>{
            const drop = new Drop(getRandomWord(words));

            drop.container.addEventListener('click',()=>{
                drop.remove();
            })

            body.appendChild(drop.container);
            const min = drop.getWidth();
            const max = document.documentElement.clientWidth - min;
            const randomPosX = Math.round(Math.random() * (max - min) + min);
            drop.go(randomPosX);
        }, 2000)
    }
}

const getRandomWord = (words) => {
    const randomNum = Math.round(Math.random() * (words.length - 1));
    return words[randomNum];
}


