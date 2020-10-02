import $ from 'jquery';
import box2d from 'box2d';
import { Drop } from './Drop.js';

export default () => {
    //const drop = document.querySelector('.drop');
    const words = ['и','ш','й','л','у'];
    $(document).ready(()=>{
        $('.button').click(function(){
            $('.button').hide(200);
            const body = document.querySelector('body');
            const clientWidth = document.documentElement.clientWidth;
            const drop = new Drop(getRandomWord(words));
            const randomPosX = Math.random() * clientWidth - drop.getWidth();
            body.appendChild(drop.container);
            drop.go(randomPosX);
            setInterval(()=>{
                const drop = new Drop(getRandomWord(words));
                const randomPosX = Math.random() * clientWidth;
                body.appendChild(drop.container);
                drop.go(randomPosX);
            }, 2000)
        })
        })

}

const getRandomWord = (words) => {
    const randomNum = Math.round(Math.random() * (words.length - 1));
    console.log(randomNum);
    return words[randomNum];
}

