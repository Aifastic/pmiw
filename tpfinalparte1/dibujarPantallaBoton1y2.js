function dibujarPantallaBoton1(estado, posXBoton, posYBoton, tamTexto, alineacionTexto, tipoBoton, camino, audioBoton) {
  image(imagenesCuento[estado], 0, 0, 640, 480);
  if (estado==0) {
    fill(250, 0);
  } else if (estado == 17 || estado == 20) {
    fill(250, 170);
  } else {
    fill(250, 30);
  }
  rect (40, 270, 560, 110);
  if (estado == 17 || estado == 20) {
    fill(0);
  } else {
    fill (250);
  }
  noStroke();
  textFont(fuenteTexto);
  textSize(tamTexto);
  textAlign(alineacionTexto);
  text(textoCuento[estado], 50, 300, 540, 100);
  dibujarBoton(posXBoton, posYBoton, fuenteTexto, tipoBoton, camino, audioBoton);
}

function dibujarPantallaBoton2(estado, tamTexto, alineacionTexto, caminoBueno, caminoMalo, audioBoton1, audioBoton2) {
  image(imagenesCuento[estado], 0, 0, 640, 480);
  fill (250, 50);
  rect (40, 270, 560, 110);
  fill(250);
  noStroke();
  textFont(fuenteTexto);
  textSize(tamTexto);
  textAlign(alineacionTexto);
  text(textoCuento[estado], 50, 300, 540, 100);
  dibujarBoton(posXBotonBueno, posYBotonBueno, fuenteTexto, 2, caminoBueno, audioBoton1);
  dibujarBoton(posXBotonMalo, posYBotonMalo, fuenteTexto, 3, caminoMalo, audioBoton2);
}

function dibujarPantallaCreditos (estado, posXBoton, posYBoton, tipoBoton, camino) {
  image(imagenesCuento[estado], 0, 0, 640, 480);
  fill(250);
  noStroke();
  textFont(fuenteTexto);
  textSize(40);
  textAlign(CENTER);
  text("CRÉDITOS", 320, 50);
  textSize(30);
  text("Cuento compilado por James Halliwell-Phillipps", 50, 150, 540, 200);
  text("Novela gráfica por Sofía Pascual y Nicanor García", 50, 200, 540, 200);
  dibujarBoton(posXBoton, posYBoton, fuenteTexto, tipoBoton, camino);
}
