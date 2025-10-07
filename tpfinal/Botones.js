function dibujarBoton(posXBoton, posYBoton, fuenteTexto, textoBotones, numeroTextoBotones, estado) {
  stroke(10, 129, 63);
  strokeWeight(2);
  if (mouseX > posXBoton && mouseX < posXBoton + 150 && mouseY > posYBoton && mouseY < posYBoton + 40) {
    fill(200);
    if (pressed==true) {
      fill(150);
    }
  } else {
    fill(240);
  }
  rect(posXBoton, posYBoton, 150, 40);
  if (mouseX > posXBoton && mouseX < posXBoton + 150 && mouseY > posYBoton && mouseY < posYBoton + 40 && pressed == true) {
    fill(0);
    noStroke();
    textFont(fuenteTexto);
    textSize(20);
    textAlign(CENTER);
    text(textoBotones[numeroTextoBotones], posXBoton + 75, posYBoton + 25);
  } else if (estado >=0 && estado <=20 ) {
    fill(0);
    noStroke();
    textFont(fuenteTexto);
    textSize(25);
    textAlign(CENTER)
    text(textoBotones[numeroTextoBotones], posXBoton + 75, posYBoton + 25);
  }
}
