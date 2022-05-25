const canvas = document.
querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

//dados do asteróide
var x_aster = 0;
var y_aster = 200;
var larg_aster = 50;
var alt_aster = 50;

//dados do asteróide 2
var x_aster_2 = 700;
var y_aster_2 = 200;
var larg_aster_2 = 50;
var alt_aster_2 = 50;

requestAnimationFrame(gameloop);

function detectarColisao() {
    if(((x_aster + larg_aster) > x_aster_2 && x_aster < (x_aster_2 + larg_aster_2)) && ((y_aster + alt_aster) > y_aster_2 && y_aster < (y_aster_2 + alt_aster_2)
    )) {
        alert("game over");
    }
    else {
        requestAnimationFrame(gameloop);
    }
}
//
// window.onkeydown = pressionaTecla;
// function pressionaTecla(tecla) {
//     if(tecla.keyCode == 38) {
//         y_aster = y_aster - 5;
//     }
//     if(tecla.keyCode == 40) {
//         y_aster = y_aster + 5;
//     }
//     if(tecla.keyCode == 39) {
//         x_aster = x_aster + 5;
//     }
//     if(tecla.keyCode == 37) {
//         x_aster = x_aster - 5;
//     }
// }

function gameloop() {
    desenharAsteroide(x_aster,y_aster);
    desenharAsteroide(x_aster_2,y_aster_2);
    detectarColisao();
}

function desenharAsteroide() {
    c.clearRect(0,0, canvas.width, canvas.height);
    c.fillStyle = 'rgb(255,0,0)';
    c.fillRect(x_aster,y_aster,larg_aster,alt_aster);
    c.fillStyle = 'rgb(0,0,255)';
    c.fillRect(x_aster_2,y_aster_2,larg_aster_2,alt_aster_2);
    x_aster_2 = x_aster_2 - 5;
    x_aster = x_aster - 5;
}

//dados da nave
// var image = new Image();
// image.src = './1263097_flight_space_spacecraft_spaceship_icon.png';
// image.onload = () => {
//     c.drawImage(image, 100,100,50,50)
// }
//
// class Jogador {
//     constructor(x, y, radius, color) {
//         this.x = x
//         this.y = y
//         this.radius = radius
//         this.color = color
//     }
//
//     draw() {
//         c.beginPath()
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//         c.fill()
//     }
// }
//
// const jogador = new Jogador(100, 100, 30, 'blue')
// jogador.draw()
//
// console.log(jogador)