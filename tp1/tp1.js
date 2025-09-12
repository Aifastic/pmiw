//https://youtu.be/cKkRZ7c1thE

let angle = 17;
let angleBig = 0;
let angleRect;
let obraOriginal;
let mPressed = false;
let escala = 0.89;
let colorDegrade = 200;

function preload() {
  obraOriginal = loadImage("data/11222095_wormhole-1.jpg");
}

function setup() {
  createCanvas(800, 400);
  background(255);
}


function draw() {

  background(255);
  let coordXRect = width;
  let anchoRect = 90;
  let altoRect = 70;

  push();
  translate((width/4)*3, height/2);
  let radioEsferaExterna = calcularRadio(0, 0, width/2, height);

  if (keyIsPressed == true) {
    if (keyCode == ENTER || keyCode == RETURN) {
      colorDegrade = 200;
      rotate(-angleBig);
      angleBig = 0;
    }
    if (keyCode == UP_ARROW) {
      if (colorDegrade<210) {
        colorDegrade+=3;
      }
    }
    if (keyCode == DOWN_ARROW) {
      if (colorDegrade>0) {
        colorDegrade-=3;
      }
    }
  }

  rotate(angleBig);
  dibujarDegrade(colorDegrade, colorDegrade+150, 150, radioEsferaExterna);
  dibujarDegrade(colorDegrade+40, colorDegrade, 1, 150);
  for (let a=0.0; a<360; a+=11.25) {
    rotate(radians(a));
    push();
    for (let i=0; i<100; i++) {
      coordXRect = coordXRect * escala;
      anchoRect = anchoRect * escala;
      altoRect = altoRect * escala;
      rotate(radians(angle));
      dibujarDegradeRect(coordXRect, anchoRect, altoRect);
    }
    coordXRect = width;
    anchoRect = 90;
    altoRect = 70;
    pop();
  }
  
  if (mouseX >= 400 && mouseX <= 800 && mouseY >= 0 && mouseY <= 400) {
    let velocidad = map(mouseX, 400, 800, -100, 100);
    if (mPressed==true) {
      angleBig= angleBig + velocidad * 0.0004;
    }
  }
  pop();
  image(obraOriginal, 0, 0, 400, 400);
}

function mousePressed() {
  if (mouseX >= 400 && mouseX <= 800 && mouseY >= 0 && mouseY <= 400) {
    mPressed = true;
  } else {
    mPressed = false;
  }
}

function mouseReleased() {
  mPressed = false;
}
