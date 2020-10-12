import { Game } from './Game.js';
import $ from 'jquery';

export const setOfLetters = () => {
    const setOfLowercaseLetters = {
        'а' : ['о', 'д'],
        'б' : ['д'],
        'в' : ['д'],
        'г' : ['п','р'],
        'д' : ['у','з','б','в','а'],
        'е' : ['ё', 'с'],
        'ё' : ['е'],
        'ж' : ['х'],
        'з' : ['д','у'],
        'и' : ['у','л','ш','щ','ц'],
        'й' : ['и'],
        'л' : ['и','н','я','м'],
        'м' : ['ш','л'],
        'н' : ['ю','п','к','л'],
        'о' : ['с','а','д'],
        'п' : ['т','н'],
        'р' : ['п','г','ф','ь'],
        'с' : ['е','о','э'],
        'т' : ['п','ш'],
        'у' : ['д','з','и'],
        'ф' : ['р'],
        'х' : ['ж'],
        'ч' : ['ъ'],
        'ц' : ['и','щ'],
        'щ' : ['ш','ц','и'],
        'ь' : ['ъ','р','ч'],
        'ъ' : ['ч','ь'],
        'э' : ['с'],
        'ю' : ['н'],
        'я' : ['л'],
    }

    const setOfUppercaseLetters = {
        'А' : ['Л'],
        'Б' : ['В'],
        'В' : ['Б'],
        'Г' : ['Р','П'],
        'Е' : ['Ё'],
        'Ж' : ['Х'],
        'З' : ['Е'],
        'И' : ['Щ','Ц','Ш'],
        'К' : ['Н'],
        'Л' : ['М','Я','А','Н'],
        'Н' : ['К','Л','П'],
        'П' : ['Т','Р','Г'],
        'Р' : ['Г','Ф','П'],
        'С' : ['Э','Е'],
        'У' : ['Ч'],
        'Ф' : ['Р'],
        'Х' : ['Ж'],
        'Ч' : ['У'],
        'Ц' : ['И','Щ'],
        'Щ' : ['И','Ш','Ц'],
        'Ш' : ['И','Щ','М'],
        'Э' : ['С'],
        'Ю' : ['Н'],
        'Я' : ['Л'],

    }

    const lowercaseLetters = Object.keys(setOfLowercaseLetters);

    const containerLowercaseLetters = document.querySelector('.containerLowercaseLetters .setOfLetters');

    for (const letter of lowercaseLetters){
        const span = document.createElement('span');
        span.textContent = letter;
        containerLowercaseLetters.appendChild(span);
        span.addEventListener('click', function(){
            //console.log(setOfLowercaseLetters[letter]);
            $('.containerCollectionLetters').hide(200);
            const game = new Game();
            game.start(letter, setOfLowercaseLetters[letter]);
        })
    }

    const uppercaseLetters = Object.keys(setOfUppercaseLetters);
    for(const values of setOfUppercaseLetters['А']){
        console.log(values);
    }

    const containerUppercaseLetters = document.querySelector('.containerUppercaseLetters .setOfLetters');

    for (const letter of uppercaseLetters){
        const span = document.createElement('span');
        span.textContent = letter;
        containerUppercaseLetters.appendChild(span);
        span.addEventListener('click', function(){
            $('.containerCollectionLetters').hide(200);
            const game = new Game();
            game.start(letter, setOfUppercaseLetters[letter]);
            //console.log(setOfUppercaseLetters[letter]);
        })
    }
}



