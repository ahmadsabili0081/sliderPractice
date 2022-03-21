let slider = document.querySelectorAll('.slider__Wrapper .slider__box');
let slidersLength = slider.length;
console.log(slidersLength)
let Leftprev = document.querySelector('.left__arrow');
let rightPrev = document.querySelector('.right__arrow');

 for(let i = 0; i < slider.length; i++) {
 let element = slider[i];
 element.style.transform = "translateX("+100*(i)+"%)";
 }
let loop  = 0 + 1000* slidersLength;
 function goNext(){
 loop++;
for(let index = 0; index < slider.length; index++){
 let element = slider[index];
                element.style.transform = "translateX(" + 100*(index - loop%slidersLength) + "%)";
            }
        }
        function GoBack(){
            loop--;
            for(let index = 0; index < slider.length; index++){
                let element = slider[index];
                element.style.transform = "translateX(" + 100*(index - loop%slidersLength) + "%)";
            }
        }
        rightPrev.addEventListener('click', goNext);
        Leftprev.addEventListener('click', GoBack);
        document.addEventListener('keydown', (e) => {
            if(e.code === 'rightPrev'){
                goNext();
            }else if(e.code === "Leftprev"){
                GoBack();
            }
        });