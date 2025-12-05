class Boton {
  constructor(){
    this.rellenoHover = 170;
    this.rellenoDefault = 240;
    this.colorTexto = 0;
  }
  
  
  dibujar(textoBoton, posXTexto, posYTexto, posXBoton, posYBoton) {
    if (mouseX > posXBoton && mouseX < posXBoton + 150 && mouseY > posYBoton && mouseY < posYBoton + 40) {
      fill(this.rellenoHover);
    } else {
      fill(this.rellenoDefault);
    }
    stroke(10, 129, 63);
    strokeWeight(2);
    rect(posXBoton, posYBoton, 150, 40);
    fill(this.colorTexto);
    noStroke();
    textFont(fuenteTexto);
    textSize(25);
    textAlign(CENTER);
    text(textoBoton, posXTexto + 50, posYTexto + 25);
  }
}
