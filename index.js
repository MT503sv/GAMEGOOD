const GameViewport = {
    WIDTH: 384  ,
    HEIGHT: 224 ,
};

window.onload = function () {
    const canvasEL = document.querySelector('canvas');
    const context = canvasEL.getContext('2d');

    canvasEL.width = GameViewport.WIDTH;
    canvasEL.height = GameViewport.HEIGHT;

    const ken = document.querySelector('img');

    const position =

    function frame(){
        context.strokeStyle = `yellow`;
        context.moveTo(0, 0);
        context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
        context.moveTo(GameViewport.WIDTH, 0);
        context.lineTo(0 ,GameViewport.HEIGHT);
        context.stroke();

        context.drawImage(ken, 0, 0);

        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);

    console.log(context);
    }