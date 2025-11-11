class Habitacion {
  constructor(imgFondo, cantObjetos, hayLlaveBuena, hayLlaveMala) {
    this.imgFondo = imgFondo;

    for (i=0; i<=5; i++) {
      this.objetos[i] = new Objeto(false); //posX, posY, imgFondo, tamX, tamY
    }
    if (hayLlave) {
      this.objetos.push(new Objeto(true))
    }
    /*this.cantPiedras = round(random(1,4));
     this.piedra = [];
     this.hayPozo = round(random(0,1)) === 1;
     this.pozoProp = (this.hayPozo) ? new Pozo() : null;*/
  }

  dibujar() {
    image(this.imgFondo);
    for (i=0; i<=5; i++) {
      this.objetos[i].dibujar();
    }
  }
}
