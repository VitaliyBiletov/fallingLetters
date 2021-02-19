import $ from "jquery";
import dropImage from './img/drop.gif'
import funnyDropImage from './img/funny.png'
import sadDropImage from './img/sad.png';

class Drop {
    constructor(word) {
        this.container = document.createElement('div');
        this.image = document.createElement('img');
        this.word = document.createElement('p');

        this.image.src = dropImage;
        this.word.textContent = String(word);

        this.container.classList.add('drop');
        this.container.setAttribute('data-word', `${word}`);

        this.container.appendChild(this.image);
        this.container.appendChild(this.word);

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

    setFunny(){
        $('.drop p').remove();
        this.image.src = funnyDropImage;
        $('.drop img').css({'width': '16vw', 'left': '-3vw', 'top':'30px'});
    }

    setSad(){
        $('.drop p').remove();
        this.image.src = sadDropImage;
        $('.drop img').css({'width': '16vw', 'left': '-3vw', 'top':'30px'});
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

