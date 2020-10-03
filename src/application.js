import $ from 'jquery';
import box2d from 'box2d';
import { Drop } from './Drop.js';
import dropImg from './img/drop-info-img.png'

export default () => {
    //const drop = document.querySelector('.drop');
    const words = ['и','ш','й','л','у'];
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
    title.textContent = 'Буквапельки';
    containerTitle.appendChild(title);
    //---------------------//

    $(document).ready(()=>{
        $('.cloud').fadeIn(1000);
        $('.container-start-button').fadeIn(3000);
        $('.container-title').fadeIn(3000);
        $('.drop-info').addClass('go');
        $('.button').click(function(){
            $('.button').fadeOut(300);
            $('.container-title').hide(400);
            $('.drop-info').removeClass('go');
            // setTimeout(()=>{
                const body = document.querySelector('body');
                const clientWidth = document.documentElement.clientWidth;
                const drop = new Drop(getRandomWord(words));
                const randomPosX = Math.random() * clientWidth - drop.getWidth();
                body.appendChild(drop.container);
                drop.go(randomPosX);
                setInterval(()=>{
                    const drop = new Drop(getRandomWord(words));
                    body.appendChild(drop.container);
                    const min = drop.getWidth();
                    const max = document.documentElement.clientWidth - min;
                    console.log('min ', min);
                    console.log('max ', max);
                    const randomPosX = Math.round(Math.random() * (max - min) + min);
                    drop.go(randomPosX);

                }, 2000)
            // }, 500)
            console.log('width:', drop.getWidth())
            console.log(document.documentElement.clientWidth)
        })
        })
}

const getRandomWord = (words) => {
    const randomNum = Math.round(Math.random() * (words.length - 1));
    return words[randomNum];
}

