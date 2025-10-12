//https://youtu.be/03Fx2AY_8rg

let estado = 0;
let imagenesCuento = [];
let textoCuento = [];
let textoBotones = [];
let pressed = false;
let fuenteTexto;
let chatter;
let cancion;
let woodwork;
let growl;
let howl;
let doorslam;
let hurray;
let posXBotonBueno = 450;
let posYBotonBueno = 390;
let posXBotonMalo = 30;
let posYBotonMalo = 390;



function preload() {
  for (let i=0; i<=21; i++) {
    imagenesCuento[i] = loadImage("data/image" + i + ".png");
  }
  textoCuento = loadStrings("data/textos.txt");
  textoBotones = loadStrings("data/botones.txt");
  fuenteTexto = loadFont("data/gabriola.ttf");
  soundFormats("mp3");
  chatter = loadSound("data/chatter.mp3");
  cancion = loadSound("data/instrumental_song.mp3");
  woodwork = loadSound("data/woodwork.mp3");
  growl = loadSound("data/growl.mp3");
  doorslam = loadSound("data/doorslam.mp3");
  howl = loadSound("data/howl.mp3");
  hurray = loadSound("data/hurray.mp3");
}

function setup() {
  createCanvas(640, 480);
  background(250);
}


function draw() {
  background(255);
  if (estado==0) {
    dibujarPantallaBoton1(estado, 245, 400, 40, CENTER, 0, 1, chatter);
    cancion.stop();
  } else if (estado==1) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, null);   
    reproducirAudio(cancion);
  } else if (estado==2) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, null);
  } else if (estado==3) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, null);
  } else if (estado==4) {
    dibujarPantallaBoton2(estado, 25, LEFT, 1, 2, woodwork, woodwork);
  } else if (estado==5) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, null);
  } else if (estado==6) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, growl);
  } else if (estado==7) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, null);
  } else if (estado==8) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, null);
  } else if (estado==9) {
    dibujarPantallaBoton2(estado, 25, LEFT, 3, 1, null, doorslam);
  } else if (estado==10) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, null);
  } else if (estado==11) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, null);
  } else if (estado==12) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, howl);
  } else if (estado==13) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, null);
  } else if (estado==14) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, hurray);
  } else if (estado==15) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 4, 5, null);
  } else if (estado==16) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, null);
  } else if (estado==17) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 5, 4, null);
  } else if (estado==18) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, null);
  } else if (estado==19) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 1, 1, howl);
  } else if (estado==20) {
    dibujarPantallaBoton1(estado, 450, 390, 25, LEFT, 5, 4, null);
  } else if (estado==21) {
    dibujarPantallaCreditos(estado, 245, 400, 5, 4);
  }
}

function mousePressed() {
  pressed = true;
}

function mouseReleased() {
  pressed = false;
}
