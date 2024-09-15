import { drawKen,updateKen } from './ken.js';
import { drawBackground } from './stage.js';

const GameViewport = {
    WIDTH: 384  ,
    HEIGHT: 224 ,
};

window.onload = function () {
    const canvasEL = document.querySelector('canvas');
    const context = canvasEL.getContext('2d');

    canvasEL.width = GameViewport.WIDTH;
    canvasEL.height = GameViewport.HEIGHT;

    function frame(){
        updateKen(context);

        drawBackground(context);
        drawKen(context);

       window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);

    }