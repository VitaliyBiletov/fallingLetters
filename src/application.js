import $ from 'jquery';
import box2d from 'box2d';
import { Drop } from './Drop.js';
import dropImg from './img/drop-info-img.png'
import CircleType from 'circletype';
import {Game} from './Game';

export default () => {


    $(document).ready(()=>{
        //Создание картинки
        const button = document.createElement('button');
        $(button).addClass('button');
        $(button).text('Начать');
        $('.container-start-button').append(button);
        //---------------------//

        //Создание кнопки
        const dropInfoImg = document.querySelector('.drop-info-img');
        const dropTagImg = document.createElement('img');
        dropTagImg.src = dropImg;
        //console.log(dropInfoImg);
        dropInfoImg.appendChild(dropTagImg);
        //---------------------//

        //Создание заголовка
        const containerTitle = document.querySelector('.container-title');
        const title = document.createElement('h1');
        containerTitle.textContent = 'Буквапельки';
        containerTitle.appendChild(title);
        //---------------------//

        $('.cloud').fadeIn(1000);
        $('.container-start-button').fadeIn(2000);
        //$('.container-title').fadeIn(3000);


        const circleTitleText = new CircleType(document.querySelector('.container-title'));
        circleTitleText.radius(1000).dir(1);

        $('.drop-info').animate({
            right: `-${3}vh`
        }, { duration: 1000, queue: false})

        $('.container-title').animate({
            top: `+=${25}vh`,
            opacity: 1,
        }, { duration: 1000, queue: false})

        $('.button').click(function(){
            $('.button').fadeOut(200);
            $('.container-title').hide(400);
            $('.drop-info').hide(200);
            const game = new Game();
            game.start();
        })
        })
}

const getRandomWord = (words) => {
    const randomNum = Math.round(Math.random() * (words.length - 1));
    return words[randomNum];
}

