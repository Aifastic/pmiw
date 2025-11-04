let juego;

function setup() {
  createCanvas(640,480);
  juego= new Juego();
  juego.iniciar();
}


function draw() {
  background(255);
  juejo.dibujar();
}
