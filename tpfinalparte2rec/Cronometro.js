class Cronometro {
  constructor() {
    this.tiempoInicio = 0;
    this.tiempoFin = 0;
    this.cronometroAndando = false;
  }

  iniciar() {
      this.tiempoInicio = millis() / 1000;
      this.cronometroAndando = true;
  }

  fin() {
      this.tiempoFin = millis() / 1000;
      this.cronometroAndando = false;
  }

  tiempoTranscurrido() {
    let tiempo = 0;
    if (this.cronometroAndando) {
      tiempo = (millis() / 1000 - this.tiempoInicio);
    } else {
      tiempo = (this.tiempoFin - this.tiempoInicio);
    }
    return floor(tiempo);
  }

}
