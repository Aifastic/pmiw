class Objeto {
  constructor(posX, posY, tamX, tamY, hayLlaveBuena, hayLlaveMala) {
    this.posX = posX;
    this.posY = posY;
    this.tamX = tamX;
    this.tamY = tamY;
    this.pantalla = new Pantalla ();
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

  /*if (mouseX >= this.posX && mouseX <= this.posX + this.tamX && mouseY >= this.posY && mouseY <= this.posY + this.tamY && mouseIsPressed === true && this.hayLlaveBuena === true) {
   this.pantalla.agarrarLlave(tiempo, this.hayLlaveBuena, this.hayLlaveMala);
   } else if (mouseX >= this.posX && mouseX <= this.posX + this.tamX && mouseY >= this.posY && mouseY <= this.posY + this.tamY && mouseIsPressed === true && this.hayLlaveMala === true) {
   this.pantalla.agarrarLlave(tiempo, this.hayLlaveBuena, this.hayLlaveMala);
   this.pantalla.perder(tiempo, this.pantalla.controlarLlave(this.hayLlaveBuena, this.hayLlaveMala));
   this.pantalla.ganar(tiempo, this.pantalla.controlarLlave(this.hayLlaveBuena, this.hayLlaveMala));
   }*/
}
