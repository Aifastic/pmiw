class Pozo {
  constructor(posX, posY, hayLlaveBuena, hayLlaveMala) {
    this.posX = posX;
    this.posY = posY;
    this.tamX = 200;
    this.tamY= 200;
    this.hayLlaveBuena = hayLlaveBuena;
    this.hayLlaveMala = hayLlaveMala;
  }

  dibujar() {
    image(imgPozo, this.posX, this.posY, this.tamX, this.tamY);
  }

  isMouseHoveringPozo() {
    if (mouseX >= this.posX && mouseX <= this.posX + 200 && mouseY >= this.posY && mouseY <= this.posY + 200) {
      return true;
    }
  }
}
