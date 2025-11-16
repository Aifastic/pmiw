let juego;
let imgFondo = [];
let imgObjeto;
let imgPozo;
let fuenteTexto;

function preload(){
  for (let i=0; i<=3; i++) {
    imgFondo[i] = loadImage("/data/fondo" + i + ".png");
  }
  imgObjeto = loadImage("/data/imgObjeto.png");
  imgPozo = loadImage("/data/imgPozo.png");
  imgLobo = loadImage("/data/lobo.png");
  fuenteTexto = loadFont("/data/gabriola.ttf");
}

function setup() {
  createCanvas(640,480);
  juego = new Juego();
  juego.iniciar();
}


function draw() {
  background(255);
  juego.dibujar();
  if (mouseX >= 245 && mouseX <= 245 + 150 && mouseY >= 500 && mouseY <= 500 + 40 && mouseIsPressed===true){
    juego.reiniciar();
  }
}

function keyPressed(){
  juego.teclaPresionada();
}

function mouseReleased(){
  juego.mouseSuelto();
}
