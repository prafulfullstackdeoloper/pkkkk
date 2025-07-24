const left = document.querySelector('.left');
    
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

const images =document.querySelectorAll('.images')

let slidenumber = 1;


right.addEventListener('click',() =>{ 
    if(slidenumber <images.length){
        slider.style.transform =`translateX(-${ slidenumber*800}px)`;
        slidenumber ++;
    }else{
        slider.style.transform =`translateX(0px)`;
        slidenumber = 1;
    }
   
});