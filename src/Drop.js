import $ from "jquery";
import dropImage from './img/drop.gif'

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
        this.container.setAttribute('data-word', `${word}`);

        this.containerDrop.appendChild(this.image);
        this.containerWord.appendChild(this.word);

        this.containerDrop.appendChild(this.containerWord);

        //this.container.appendChild(this.containerWord);
        this.container.appendChild(this.containerDrop);
    }

    move(posX){
       let posY = 100;
       $(this.container).css('left', `${posX}px`);
       $(this.container).animate({
            top: `+=${document.documentElement.clientHeight}`,
        },3000, () => {
           if ($(this.container).position().top > document.documentElement.clientHeight - 200){
               this.container.remove();
               delete this;
           }
       })
    }

    getWidth(){
        return $(this.container).width();
    }

    remove(){
        this.container.remove();
        delete this;
    }
}

export {Drop}

