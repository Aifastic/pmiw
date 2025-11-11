class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.habitaciones = [];
    this.habitacionActiva = 0;
    this.mirarAtras = false;
    this.vistaAtras = new VistaAtras();
    this.tiempo = 60;
  }

  iniciar() {
    this.habitaciones[0] = new Habitacion() /*("imgFondo",numero,true,false)*/;
    this.habitaciones[1] = new Habitacion() /*("imgFondo",numero,false,true)*/;
    this.habitaciones[2] = new Habitacion() /*("imgFondo",numero,false,false)*/;
  }

  reiniciar() {
  }

  teclaPresionada() {
    if (keyCode === LEFT_ARROW) {
      this.habitacionActiva = 1;
      this.mirarAtras = false;
    } else if (keyCode === RIGHT_ARROW) {
      this.habitacionActiva = 2;
      this.mirarAtras = false;
    } else if (keyCode === DOWN_ARROW) {
      this.mirarAtras = true;
    } else if (keyCode === UP_ARROW) {
      this.habitacionActiva = 0;
      this.mirarAtras = false;
    }
  }

  dibujarVistaAtras() {
    if (this.mirarAtras === true) {
      this.VistaAtras(/*"imgFondo"*/).dibujar;
    }
  }

  dibujarHabitacion() {
    this.habitaciones[this.habitacionActiva].dibujar();
  }

  controlarTiempo() {
    this.tiempo = this.tiempo - 0.1;
    print(this.tiempo); /*NO DEJAR EN CÓDIGO FINAL*/
  }
}
