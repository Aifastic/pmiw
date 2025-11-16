class Pantalla {
  constructor(hayLlaveBuena, hayLlaveMala) {
    this.colorFondo = 0;
    this.transparencia = 40;
    this.posTextoX = 40;
    this.posTextoY = 200;
    this.tamTextoX = 560;
    this.tamTextoY = 300;
    this.boton = new Boton ();
    this.lobo = new Lobo ();
    this.hayLlaveBuena = hayLlaveBuena;
    this.hayLlaveMala = hayLlaveMala;
  }

  instrucciones(tiempo) {
    if (tiempo === 0) {
      fill(this.colorFondo, this.transparencia);
      noStroke();
      rect(0, 0, 640, 480);
      fill(255);
      textFont(fuenteTexto);
      textAlign(CENTER);
      textSize(40);
      text("Ayudá al cerdito mayor a escapar del lobo feroz! Encontrá la llave de su casa antes de que el lobo te atrape.", this.posTextoX, this.posTextoY, this.tamTextoX, this.tamTextoY);
      this.boton.dibujar("Iniciar", 270, 400, 245, 400);
    }
  }

  /*agarrarLlave (tiempo) {
   fill(this.colorFondo, this.transparencia);
   noStroke();
   rect(640, 480);
   fill(255);
   textFont(fuenteTexto);
   textAlign(CENTER);
   textSize(40);
   text("Encontraste una llave.", 320, 50);
   textSize(30);
   text("¿Te la quedás?", this.posTextoX, this.posTextoY, this.tamTextoX, this.tamTextoY);
   this.boton.dibujar("Sí", 470, 390, 450, 390);
   this.boton.dibujar("No", 50, 390, 30, 390);
   }*/

  perderTiempo (tiempo) {
    this.lobo.dibujar(400, 400);
    fill(this.colorFondo, this.transparencia);
    noStroke();
    rect(640, 480);
    fill(255);
    textFont(fuenteTexto);
    textAlign(CENTER);
    if (tiempo >= 60) {
      textSize(40);
      text("¡Perdiste!", 320, 50);
      textSize(30);
      text("El lobo te atrapó.", this.posTextoX, this.posTextoY, this.tamTextoX, this.tamTextoY);
    } else if (this.tieneLlaveMala === true) {
      textSize(40);
      text("¡Perdiste!", 320, 50);
      textSize(30);
      text("Encontraste la llave de tu hermano y fuiste a su casa. Se derrumbó y el lobo los atrapó.", 40, 100, 560, 300);
    }
    this.boton.dibujar("Reniciar", 245, 400, 245, 400);
  }

  perderCasa() {
    this.lobo.dibujar(400, 400);
    fill(this.colorFondo, this.transparencia);
    noStroke();
    rect(640, 480);
    fill(255);
    textFont(fuenteTexto);
    textAlign(CENTER);
    textSize(40);
    text("¡Perdiste!", 320, 50);
    textSize(30);
    text("Encontraste la llave de tu hermano y fuiste a su casa. Se derrumbó y el lobo los atrapó.", 40, 100, 560, 300);
    this.boton.dibujar("Reniciar", 245, 400, 245, 400);
  }

  ganar (tiempo) {
    fill(this.colorFondo, this.transparencia);
    noStroke();
    rect(640, 480);
    fill(255);
    textFont(fuenteTexto);
    textAlign(CENTER);
    textSize(40);
    text("¡Ganaste!", 320, 50);
    textSize(30);
    text("Pudiste encontrar la llave de tu casa. Estás a salvo.", this.posTextoX, this.posTextoY, this.tamTextoX, this.tamTextoY);
    this.boton.dibujar("Fin", 245, 400, 245, 400);
  }

  dibujarCréditos () {
    if (this.tieneLlaveBuena === true && this.boton.textoBoton === "Fin" && mouseIsPressed === true) {
      fill(this.colorFondo);
      noStroke();
      textFont(fuenteTexto);
      textSize(40);
      textAlign(CENTER);
      text("CRÉDITOS", 320, 50);
      textSize(30);
      text("Cuento compilado por James Halliwell-Phillipps", 50, 150, 540, 200);
      text("Novela gráfica por Sofía Pascual", 50, 200, 540, 200);
      this.boton.dibujar("Reniciar", 245, 400, 245, 400);
    }
  }
}
