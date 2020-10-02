import dropImage from './img/drop.png'
import $ from "jquery";

class Drop {
    constructor(word) {
        this.container = document.createElement('div');
        this.containerWord = document.createElement('div');
        this.containerDrop = document.createElement('div');
        this.image = document.createElement('img');
        this.word = document.createElement('p');

        this.image.src = dropImage;
        this.word.textContent = String(word);

        this.containerWord.classList.add('containerWord');
        this.containerDrop.classList.add('containerDrop')
        this.container.classList.add('drop');

        this.containerDrop.appendChild(this.image);
        this.containerWord.appendChild(this.word);

        this.container.appendChild(this.containerWord);
        this.container.appendChild(this.containerDrop);
    }

    go(posX){
       let posY = 0;
        $(this.container).css('left', `${posX}px`);
       const timerID = setInterval(()=> {
           posY += 5;
           $(this.container).css('top', `${posY}px`);
           if (posY > document.documentElement.clientHeight){
               clearTimeout(timerID);
               this.container.remove();
           }
       }, 50)
        console.log('go')
    }
}

export {Drop}

