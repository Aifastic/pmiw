function dibujarBoton(posXBoton, posYBoton, fuenteTexto, tipoBoton, camino, audioBoton) {
  if (mouseX > posXBoton && mouseX < posXBoton + 150 && mouseY > posYBoton && mouseY < posYBoton + 40) {
    fill(170);
    if (pressed == true){
      if (audioBoton != null){
      reproducirAudio(audioBoton);
      }
      if (camino==1) {
        estado ++;
        pressed = false;
      } else if (camino==2) {
        estado = 16;
        pressed = false;
      } else if (camino==3) {
        estado = 18;
        pressed = false;
      } else if (camino==4) {
        estado = 0;
        pressed = false;
      } else if (camino==5) {
        estado = 21;
        pressed = false;
      }
    }
  } else {
    fill(240);
  }
  stroke(10, 129, 63);
  strokeWeight(2);
  rect(posXBoton, posYBoton, 150, 40);
  fill(0);
  noStroke();
  textFont(fuenteTexto);
  textSize(25);
  textAlign(CENTER);
  text(textoBotones[tipoBoton], posXBoton + 75, posYBoton + 25);
}
