let estado = 0;
let imagenesCuento = [];
let textoCuento = [];
let textoBotones = [];
let numeroEscena = 0;
let numeroImagen = 0;
let numeroTexto = 0;
let pressed = false;
let fuenteTexto;
let posXBoton;
let posYBoton;
let posXBotonSi = 450;
let posYBotonSi = 390;
let posXBotonNo = 30;
let posYBotonNo = 390;



function preload() {
  for (let i=0; i<=20; i++) {
    imagenesCuento[i] = loadImage("data/image" + i + ".png");
    textoCuento = loadStrings("/data/textos.txt");
  }
  for (let j=0; j<=3; j++) {
    textoBotones = loadStrings("/data/botones.txt");
  }
  fuenteTexto = loadFont("/data/calibri.ttf");
}

function setup() {
  createCanvas(640, 480);
}


function draw() {
  background(255);
  if (estado==0) {
    posXBoton = 245;
    posYBoton = 400;
    posXTextoBoton = 260;
    posYTextoBoton = 420;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(30);
    textAlign(CENTER);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 0, estado);
  } else if (estado==1) {
    posXBoton = 450;
    posYBoton = 390;
    posXTextoBoton = 260;
    posYTextoBoton = 420;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    textAlign(LEFT);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  } else if (estado==2) {
    posXBoton = 450;
    posYBoton = 390;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  } else if (estado==3) {
    posXBoton = 450;
    posYBoton = 390;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  } else if (estado==4) {
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBotonSi, posYBotonSi, fuenteTexto, textoBotones, 2, estado);
    dibujarBoton(posXBotonNo, posYBotonNo, fuenteTexto, textoBotones, 3, estado);
  } else if (estado==5) {
    posXBoton = 450;
    posYBoton = 390;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  } else if (estado==6) {
    posXBoton = 450;
    posYBoton = 390;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  } else if (estado==7) {
    posXBoton = 450;
    posYBoton = 390;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  }else if (estado==8) {
    posXBoton = 450;
    posYBoton = 390;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  }else if (estado==9) {
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBotonSi, posYBotonSi, fuenteTexto, textoBotones, 2, estado);
    dibujarBoton(posXBotonNo, posYBotonNo, fuenteTexto, textoBotones, 3, estado);
  }else if (estado==10) {
    posXBoton = 450;
    posYBoton = 390;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  }else if (estado==11) {
    posXBoton = 450;
    posYBoton = 390;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  }else if (estado==12) {
    posXBoton = 450;
    posYBoton = 390;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  }else if (estado==13) {
    posXBoton = 450;
    posYBoton = 390;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  }else if (estado==14) {
    posXBoton = 450;
    posYBoton = 390;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 1, estado);
  }else if (estado==15) {
    posXBoton = 245;
    posYBoton = 400;
    image(imagenesCuento[numeroImagen], 0, 0, 640, 480);
    fill(250);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    text(textoCuento[numeroTexto], 50, 300, 540, 100);
    dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, 4, estado);
  }
}

function mousePressed() {
  if (mouseX > posXBoton && mouseX < posXBoton + 150 && mouseY > posYBoton && mouseY < posYBoton + 40 && pressed == false) {
    pressed = true;
  }
}

function mouseReleased() {
  if (mouseX > posXBoton && mouseX < posXBoton + 150 && mouseY > posYBoton && mouseY < posYBoton + 40 && pressed == true && estado >=0 && estado <=8) {
    estado ++;
    numeroImagen ++;
    numeroTexto ++;
    pressed = false;
  } else if (mouseX > posXBotonNo && mouseX < posXBotonNo + 150 && mouseY > posYBotonNo && mouseY < posYBotonNo + 40 && pressed == false && estado == 9){
    estado ++;
    numeroImagen ++;
    numeroTexto ++;
    pressed = false;
  } else if (mouseX > posXBoton && mouseX < posXBoton + 150 && mouseY > posYBoton && mouseY < posYBoton + 40 && pressed == false && estado >= 10 && estado <=14) {
    estado ++;
    numeroImagen ++;
    numeroTexto ++;
    pressed = false;
  } else {
    pressed = false;
  }
}
