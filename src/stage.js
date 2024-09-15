const background = document.querySelector('img[alt="Background"]');

export function drawBackground(context){
    context.drawImage(background, 0, 0); 
}
