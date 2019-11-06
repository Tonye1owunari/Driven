window.addEventListener('load', ()=>{
    const driveBtn = document.querySelector('.drive');
    const stopBtn = document.querySelector('.stop');
    const changeCarBtn = document.querySelector('.change-car');
    const engineSound = document.querySelector('audio');
    const road = document.querySelector('#road');
    const carImage = document.querySelector('img');

    let car = {
        make: 'ferrari',
        color: 'red',
        started: false,
        imgSrc: '/img/ferrari.png',
        drive: ()=>{ 
            this.started = true;
            if(this.started){
                engineSound.play();
                road.style.backgroundImage = 'url(/img/road-move.gif)';
            }
        },
        stop: ()=>{ 
            this.started = false;
            engineSound.pause();
            road.style.backgroundImage = 'url(/img/road-stop.jpg)';
        }
    };

    driveBtn.addEventListener('click', car.drive);
    stopBtn.addEventListener('click', car.stop);
    changeCarBtn.addEventListener('click', ()=>{
        if(car.make == 'ferrari'){
            car.make = 'volks wagon';
            car.color = 'white';
            car.imgSrc = '/img/volks.png';
            carImage.src = car.imgSrc;
        } else if(car.make == 'volks wagon'){
            car.make = 'ferrari';
            car.color = 'red';
            car.imgSrc = '/img/ferrari.png';
            carImage.src = car.imgSrc;
        }
    } );

} );

window.addEventListener("keydown", (event)=>{
    const keyPressed = event.key;
    const validKeys = keyPressed =='ArrowLeft' || keyPressed =='ArrowRight' || keyPressed =='ArrowUp';
    const carImage = document.querySelector('img');

    if(validKeys){
        if(keyPressed == 'ArrowLeft'){
            carImage.style.left = '30%';
        } else if(keyPressed == 'ArrowRight'){
            carImage.style.left = '70%';
        } else if(keyPressed == 'ArrowUp'){
            carImage.style.left = '50%';
        }
    }
} );





