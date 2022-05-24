const canvas = document.
querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

var x = 0;
var y = 150;

setInterval(gameloop,50);

function gameloop() {
    if(y<=canvas.height) desenharAsteroide(x,y);
    else clearInterval();
    y = y + 10;
}

function desenharAsteroide(pX,pY) {
    c.clearRect(0,0, canvas.width, canvas.height)
    c.fillStyle = 'blue';
    c.fillRect(pX,pY,100,100);
}

desenharAsteroide(x,y);

var image = new Image();
image.src = './1263097_flight_space_spacecraft_spaceship_icon.png';
image.onload = () => {
    c.drawImage(image, 100,100,50,50)
}

class Jogador {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fill()
    }
}

const jogador = new Jogador(100, 100, 30, 'blue')
jogador.draw()

console.log(jogador)