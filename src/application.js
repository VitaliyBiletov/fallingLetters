import $ from 'jquery';
import box2d from 'box2d';
import { Drop } from './Drop.js';
import dropImg from './img/drop-info-img.png'
import CircleType from 'circletype';
import {Game} from './Game';

export default () => {

    $(document).ready(()=>{
        //Создание кнопки
        const button = document.createElement('button');
        $(button).addClass('button');
        $(button).text('Начать');
        $('.container-start-button').append(button);
        //---------------------//

        //Создание картинки с каплей справа
        const dropInfoImg = document.querySelector('.drop-info-img');
        const dropTagImg = document.createElement('img');
        dropTagImg.src = dropImg;
        dropInfoImg.appendChild(dropTagImg);
        //---------------------//

        $('.cloud').fadeIn(1000); //Появление облака сверху
        $('.container-start-button').fadeIn(2000); //Появление кнопки "Начать"

        //Создание заголовка
        const containerTitle = document.querySelector('.container-title');
        const title = document.createElement('h1');
        containerTitle.innerHTML = 'Буквапельки';
        containerTitle.appendChild(title);

        const circleTitleText = new CircleType(document.querySelector('.container-title'));
        circleTitleText.radius(1800).dir(1); //Изгиб заголовка

        //--------------------------//

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