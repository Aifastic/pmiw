class Cronometro {
  constructor() {
    this.tiempoInicio = 0;
    this.tiempoFin = 0;
    this.cronometroAndando = false;
  }

  iniciar() {
    if (mouseX > 245 && mouseX < 245 + 150 && mouseY > 400 && mouseY < 400 + 40 && this.tiempoTranscurrido() === 0 && mouseIsPressed === true) {
      this.tiempoInicio = millis() / 1000;
      this.cronometroAndando = true;
    }
  }

  fin() {
    if (this.tiempoTranscurrido() === 60) {
      this.tiempoFin = millis() / 1000;
      this.cronometroAndando = false;
    }
  }

  /*resetear() {
    let tiempo = 0;
    if (this.cronometroAndando) {
      tiempo = (millis() / 1000 - this.tiempoInicio);
    } else {
      tiempo = (this.tiempoFin - this.tiempoInicio);
    }
    return floor(tiempo);
  }*/

  tiempoTranscurrido() {
    let tiempo = 0;
    if (this.cronometroAndando) {
      tiempo = (millis() / 1000 - this.tiempoInicio);
    } else {
      tiempo = (this.tiempoFin - this.tiempoInicio);
    }
    return floor(tiempo);
  }

  controlarTiempo() {
    this.iniciar();
    this.fin();
  }

  dibujar() {
    fill(0);
    textSize(60);
    text(this.tiempoTranscurrido(), 300, 200);
  }
}
