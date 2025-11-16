class Juego {
  constructor() {
    /*this.jugador = new Jugador();*/
    this.habitaciones = [];
    this.habitacionActiva = 0;
    this.tieneLlaveBuena = false;
    this.tieneLlaveMala = false;
    this.anchoLobo = 100;
    this.altoLobo = 100;
    this.lobo = new Lobo();
    this.pantallas = new Pantalla();
    this.boton = new Boton ();
    this.cronometro = new Cronometro();
  }

  iniciar() {
    this.habitaciones[0] = new Habitacion(imgFondo[0], 3, false, true, false); /*("imgFondo",numero,true,false)*/
    this.habitaciones[1] = new Habitacion(imgFondo[1], 5, false, false, true); /*("imgFondo",numero,false,true)*/
    this.habitaciones[2] = new Habitacion(imgFondo[2], 4, true, false, false); /*("imgFondo",numero,false,false)*/
    this.habitaciones[3] = new Habitacion(imgFondo[3], 0, false, false, false);
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
    this.habitaciones[this.habitacionActiva].dibujar(this.cronometro.tiempoTranscurrido());
    if (this.cronometro.tiempoTranscurrido() === 20 || this.cronometro.tiempoTranscurrido() === 40 || this.cronometro.tiempoTranscurrido() === 60) {
      this.anchoLobo = this.anchoLobo + 0.5;
      this.altoLobo = this.altoLobo + 0.5;
    }
    if (this.habitacionActiva === 3) {
      this.lobo.dibujar(this.anchoLobo, this.altoLobo);
    }
    this.cronometro.controlarTiempo();
    if (this.cronometro.tiempoTranscurrido() === 0) {
      this.pantallas.instrucciones(this.cronometro.tiempoTranscurrido());
    } else if ((this.cronometro.tiempoTranscurrido() >= 60) || (this.cronometro.tiempoTranscurrido() > 0 && this.cronometro.tiempoTranscurrido() < 60 && this.habitaciones[this.habitacionActiva].controlarLlaveMala()===true)) {
      this.pantallas.perderTiempo(this.cronometro.tiempoTranscurrido(), this.habitaciones[this.habitacionActiva].controlarLlaveMala()===true);
    }
    for (let i=0; i<this.habitaciones[this.habitacionActiva].cantObjetos; i++) {
      if (this.habitaciones[this.habitacionActiva].objetos[i].isMouseHoveringObjeto()===true && mouseIsPressed===true) {
        if (this.habitaciones[this.habitacionActiva].objetos[i].hayLlaveBuena===true) {
          this.pantallas.ganar(this.cronometro.tiempoTranscurrido());
        }
      }
    }
    if (this.habitaciones[this.habitacionActiva].pozo.isMouseHoveringPozo()===true && mouseIsPressed===true) {
      if (this.habitaciones[this.habitacionActiva].pozo.hayLlaveMala===true) {
        this.pantallas.perderCasa(this.cronometro.tiempoTranscurrido());
      }
    }if (this.mouseSuelto()===true){
      this.pantallas.dibujarCréditos();
    }
  }


  reiniciar() {
    if (tieneLlaveMala===true || this.cronometro.tiempoTranscurrido() >=60) {
      this.cronometro.controlarTiempo();
      this.habitacionActiva = 0;
    }
  }

  mouseSuelto() {
    for (let i=0; i<this.habitaciones[this.habitacionActiva].cantObjetos; i++) {
      if (this.habitaciones[this.habitacionActiva].objetos[i].isMouseHoveringObjeto()===true){
        return true;
      }
    }
    if (this.habitaciones[this.habitacionActiva].pozo.isMouseHoveringPozo()===true){
      return true;
    } else {
      return false;
    }
    
  }
}
