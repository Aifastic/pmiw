class Juego {
  constructor() {
    this.habitaciones = [];
    this.habitacionActiva = 0;
    this.tieneLlaveBuena = false;
    this.tieneLlaveMala = false;
    this.anchoLobo = 100;
    this.altoLobo = 100;
    this.lobo = new Lobo();
    this.estados = new Estado(1);
    this.boton = new Boton ();
    this.cronometro = new Cronometro();
    this.esVisible = false;
  }

  iniciar() {
    this.habitaciones[0] = new Habitacion(imgFondo[0], 3, false, true, false); /*("imgFondo",numero,true,false)*/
    this.habitaciones[1] = new Habitacion(imgFondo[1], 5, false, false, true); /*("imgFondo",numero,false,true)*/
    this.habitaciones[2] = new Habitacion(imgFondo[2], 4, true, false, false); /*("imgFondo",numero,false,false)*/
    this.habitaciones[3] = new Habitacion(imgFondo[3], 1, false, false, false);
    this.habitaciones[0].iniciar();
    this.habitaciones[1].iniciar();
    this.habitaciones[2].iniciar();
    this.habitaciones[3].iniciar();
  }



  teclaPresionada() {
    if (keyCode === LEFT_ARROW) {
      this.habitacionActiva = 1;
    } else if (keyCode === RIGHT_ARROW) {
      this.habitacionActiva = 2;
    } else if (keyCode === DOWN_ARROW) {
      this.habitacionActiva = 3;
    } else if (keyCode === UP_ARROW) {
      this.habitacionActiva = 0;
    }
  }

  dibujar() {
    if (this.estados.estado===1) {
      this.habitacionActiva=0;
      this.anchoLobo = 100;
      this.altoLobo = 100;
      musica.stop();
    }
    this.habitaciones[this.habitacionActiva].dibujar();
    if (this.estados.cronometro.tiempoTranscurrido() === 20 || this.estados.cronometro.tiempoTranscurrido() === 40) {
      this.anchoLobo = this.anchoLobo + 0.5;
      this.altoLobo = this.altoLobo + 0.5;
    }
    if (this.habitacionActiva === 3) {
      this.lobo.dibujar(this.anchoLobo, this.altoLobo);
    }

    for (let i=0; i<this.habitaciones[this.habitacionActiva].cantObjetos; i++) {
      this.estados.dibujar(this.habitaciones[this.habitacionActiva].objetos[i].hayLlaveBuena, this.habitaciones[this.habitacionActiva].pozo.hayLlaveMala, this.esVisible);
    }
  }

  mouseClickeado() {
    for (let i=0; i<this.habitaciones[this.habitacionActiva].cantObjetos; i++) {
      if ((this.habitaciones[this.habitacionActiva].objetos[i].hayLlaveBuena===true && this.habitaciones[this.habitacionActiva].objetos[i].isMouseHoveringObjeto()===true)
        || (this.habitaciones[this.habitacionActiva].pozo.isMouseHoveringPozo()===true)) {
        this.estados.estado = 2;
      }
    }
  }
}
