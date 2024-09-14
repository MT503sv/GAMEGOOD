const GameViewport = {
    WIDTH: 384 / 3,
    HEIGHT: 224 / 3,
};

window.onload = function () {
    const canvasEL = document.querySelector('canvas');
    const context = canvasEL.getContext('2d');

    canvasEL.width = GameViewport.WIDTH;
    canvasEL.height = GameViewport.HEIGHT;

    const CAP = document.querySelector('img');

    context.strokeStyle = `yellow`;
    context.moveTo(0, 0);
    context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    context.moveTo(GameViewport.WIDTH, 0);
    context.lineTo(0 ,GameViewport.HEIGHT);
    context.stroke();

    context.drawImage(CAP, 0, 0);

    console.log(context);
}