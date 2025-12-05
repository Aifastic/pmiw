//https://youtu.be/jP2NHmu87jo

let juego;
let imgFondo = [];
let imgObjeto;
let imgPozo;
let fuenteTexto;
let howl;
let hurray;
let musica;

function preload() {
  for (let i=0; i<=3; i++) {
    imgFondo[i] = loadImage("/data/fondo" + i + ".png");
  }
  imgObjeto = loadImage("/data/imgObjeto.png");
  imgPozo = loadImage("/data/imgPozo.png");
  imgLobo = loadImage("/data/lobo.png");
  fuenteTexto = loadFont("/data/gabriola.ttf");
  howl = loadSound("data/howl.mp3");
  hurray = loadSound("data/hurray.mp3");
  musica = loadSound("data/musica.mp3");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  juego.iniciar();
}


function draw() {
  background(255);
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
}

function mouseClicked() {
  juego.mouseClickeado();
}
