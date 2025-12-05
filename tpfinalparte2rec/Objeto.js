class Objeto {
  constructor(posX, posY, tamX, tamY, hayLlaveBuena, hayLlaveMala) {
    this.posX = posX;
    this.posY = posY;
    this.tamX = tamX;
    this.tamY = tamY;
    this.hayLlaveBuena = hayLlaveBuena;
    this.hayLlaveMala = hayLlaveMala;
  }

  dibujar() {
    image(imgObjeto, this.posX, this.posY, this.tamX, this.tamY);
  }

  isMouseHoveringObjeto() {
    if (mouseX >= this.posX && mouseX <= this.posX + 80 && mouseY >= this.posY && mouseY <= this.posY + 80) {
      return true;
    }
  }
}
