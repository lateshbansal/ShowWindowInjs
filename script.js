'use strict';


const modal= document.querySelectorAll('.show-modal');

const close= document.querySelector('.close-modal');

const window1= document.querySelector('.modal');

const overlay= document.querySelector('.overlay');

// console.log(overlay)

// console.log(modal)


for(var i=0;i<modal.length;i++)
{
    modal[i].addEventListener('click',showModal);

    console.log("btn click");
}


function showModal(){
    console.log("button clicked");

  window1.classList.remove('hidden');

  overlay.classList.remove('hidden');

}


close.addEventListener('click',function(){
    window1.classList.add('hidden');

    overlay.classList.add('hidden');
});