class Habitacion {
  constructor(imgFondo, cantObjetos, hayLlaveBuena, hayLlaveMala, hayPozo) {
    this.imgFondo = imgFondo;
    this.objetos = [];
    this.tamX = 80;
    this.tamY = 80;
    this.hayPozo = hayPozo;
    this.cantObjetos = cantObjetos;
    this.hayLlaveBuena = hayLlaveBuena;
    this.hayLlaveMala = hayLlaveMala;
  }

  iniciar() {
    let posX = round(random(70, 500));
    let posY = round(random(200, 350));
    this.objetos[0] = new Objeto(posX, posY, this.tamX, this.tamY, this.hayLlaveBuena, this.hayLlaveMala);
    for (let i=1; i<this.cantObjetos; i++) {
      posX = round(random(70, 500));
      posY = round(random(200, 350));
      this.objetos[i] = new Objeto(posX, posY, this.tamX, this.tamY, false, false);
    }
    this.pozo = new Pozo(0, 60, false, true);
  }

  dibujar() {
    imageMode(CORNER);
    image(this.imgFondo, 0, 0, 640, 480);
    for (let i=0; i<this.cantObjetos; i++) {
      this.objetos[i].dibujar();
    }

    if (this.hayPozo === true) {
      this.pozo.dibujar(0, 60);
    }
  }
}
