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
        dropInfoImg.appendChild(dropTagImg);
        //---------------------//

        //Создание заголовка
        const containerTitle = document.querySelector('.container-title');
        const title = document.createElement('h1');
        containerTitle.textContent = 'Буквапельки';
        containerTitle.appendChild(title);
        //---------------------//

        $('.cloud').fadeIn(1000); //Появление облака сверху
        $('.container-start-button').fadeIn(2000); //Появление кнопки "Начать"

        const circleTitleText = new CircleType(document.querySelector('.container-title'));
        circleTitleText.radius(1000).dir(1); //Изгиб заголовка
        console.log(circleTitleText.container);
        circleTitleText.forceWidth(true);
        console.log(circleTitleText.container);
        //Анимация капли справа
        $('.drop-info').animate({
            right: `-${3}vh`
        }, { duration: 500, queue: false})

        //Анимация появления заголовка
        $('.container-title').animate({
            top: `+=${20}vh`,
            opacity: 1,
        }, { duration: 1000, queue: false})

        //Событие при нажатии кнопки "Начать"
        $('.button').click(function(){
            $('.container').fadeOut(200); //Скрытие основного контейнера
            $('.titleLowerLetters').text('Строчные буквы');
            $('.titleUpperLetters').text('Прописные буквы');
            $('.containerCollectionLetters').css('display', 'flex');
            $('.containerCollectionLetters').animate({
                opacity: 1,
            }, { duration: 1000, queue: false}) //Появление контейнера с выбором букв
        })
        })
}