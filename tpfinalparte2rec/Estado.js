class Estado {
  constructor(estado) {
    this.colorFondo = 0;
    this.transparencia = 40;
    this.posTextoX = 40;
    this.posTextoY = 200;
    this.tamTextoX = 560;
    this.tamTextoY = 300;
    this.boton = new Boton ();
    this.lobo = new Lobo ();
    this.estado = estado;
    this.cronometro= new Cronometro();
  }

  dibujar (hayLlaveBuena, hayLlaveMala, esVisible) {
    if (this.estado===0) {
      if (musica.isPlaying()==false) {
          musica.play();
        }
      if (this.cronometro.tiempoTranscurrido() >= 60) {
        this.cronometro.fin();
        this.estado = 3;
        if (howl.isPlaying()==false) {
          howl.play();
        }
      }
    } else if (this.estado===1) { //instrucciones
      fill(this.colorFondo, this.transparencia);
      noStroke();
      rect(0, 0, 640, 480);
      fill(255);
      textFont(fuenteTexto);
      textAlign(CENTER);
      textSize(40);
      text("Ayudá al cerdito mayor a escapar del lobo feroz! Encontrá la llave de su casa antes de que el lobo te atrape.", this.posTextoX, this.posTextoY, this.tamTextoX, this.tamTextoY);
      this.boton.dibujar("Iniciar", 270, 350, 245, 350);
      if (mouseX > 245 && mouseX < 245 + 150 && mouseY > 350 && mouseY < 350 + 40 && mouseIsPressed === true) {
        this.cronometro.iniciar();
        this.estado=0;
      }
    } else if (this.estado===2) { //agarrar llave
      fill(this.colorFondo, this.transparencia);
      noStroke();
      rect(0, 0, 640, 480);
      fill(255);
      textFont(fuenteTexto);
      textAlign(CENTER);
      textSize(40);
      text("Encontraste una llave.", 320, 50);
      textSize(30);
      text("¿Te la quedás?", this.posTextoX, this.posTextoY, this.tamTextoX, this.tamTextoY);
      this.boton.dibujar("Sí", 470, 390, 450, 390);
      this.boton.dibujar("No", 50, 390, 30, 390);
      if (hayLlaveBuena===true) {
        if (mouseX > 450 && mouseX < 450 + 150 && mouseY > 390 && mouseY < 390 + 40 && mouseIsPressed) {
          this.estado=5;
          this.cronometro.fin();
          if (hurray.isPlaying()==false) {
            hurray.play();
          }
        } else if (mouseX > 30 && mouseX < 30 + 150 && mouseY > 390 && mouseY < 390 + 40 && mouseIsPressed) {
          this.estado=0;
        }
      } else if (hayLlaveMala===true) {
        if (mouseX > 450 && mouseX < 450 + 150 && mouseY > 390 && mouseY < 390 + 40 && mouseIsPressed) {
          this.estado=4;
          this.cronometro.fin();
          if (howl.isPlaying()==false) {
            howl.play();
          }
        } else if (mouseX > 30 && mouseX < 30 + 150 && mouseY > 390 && mouseY < 390 + 40 && mouseIsPressed) {
          this.estado=0;
        }
      }
    } else if (this.estado===3) { //perder por tiempo
      this.lobo.dibujar(400, 400);
      fill(this.colorFondo, this.transparencia);
      noStroke();
      rect(0, 0, 640, 480);
      fill(255);
      textFont(fuenteTexto);
      textAlign(CENTER);
      textSize(40);
      text("¡Perdiste!", 320, 50);
      textSize(30);
      text("El lobo te atrapó.", this.posTextoX, this.posTextoY, this.tamTextoX, this.tamTextoY);
      this.boton.dibujar("Reniciar", 270, 400, 245, 400);
      if (mouseX > 245 && mouseX < 245 + 150 && mouseY > 400 && mouseY < 400 + 40 && mouseIsPressed) {
        this.estado=1;
      }
    } else if (this.estado===4) { //perder por casa
      this.lobo.dibujar(400, 400);
      fill(this.colorFondo, this.transparencia);
      noStroke();
      rect(0, 0, 640, 480);
      fill(255);
      textFont(fuenteTexto);
      textAlign(CENTER);
      textSize(40);
      text("¡Perdiste!", 320, 50);
      textSize(30);
      text("Encontraste la llave de tu hermano y fuiste a su casa. Se derrumbó y el lobo los atrapó.", 40, 100, 560, 300);
      this.boton.dibujar("Reniciar", 270, 400, 245, 400);
      if (mouseX > 245 && mouseX < 245 + 150 && mouseY > 400 && mouseY < 400 + 40 && mouseIsPressed) {
        this.estado=1;
      }
    } else if (this.estado===5) { //ganar
      fill(this.colorFondo, this.transparencia);
      noStroke();
      rect(0, 0, 640, 480);
      fill(255);
      textFont(fuenteTexto);
      textAlign(CENTER);
      textSize(40);
      text("¡Ganaste!", 320, 50);
      textSize(30);
      text("Pudiste encontrar la llave de tu casa. Estás a salvo.", this.posTextoX, this.posTextoY, this.tamTextoX, this.tamTextoY);
      this.boton.dibujar("Fin", 270, 400, 245, 400);
      if (mouseX > 245 && mouseX < 245 + 150 && mouseY > 400 && mouseY < 400 + 40 && mouseIsPressed) {
        this.estado=6;
      }
    } else if (this.estado===6) { //creditos
      fill(this.colorFondo);
      noStroke();
      rect(0, 0, 640, 480);
      fill(255);
      textFont(fuenteTexto);
      textSize(40);
      textAlign(CENTER);
      text("CRÉDITOS", 320, 50);
      textSize(30);
      text("Cuento compilado por James Halliwell-Phillipps", 50, 150, 540, 200);
      text("Escape room por Sofía Pascual", 50, 200, 540, 200);
      this.boton.dibujar("Reniciar", 270, 250, 245, 250);
      if (mouseX > 245 && mouseX < 245 + 150 && mouseY > 250 && mouseY < 250 + 40 && mouseIsPressed) {
        this.estado=1;
      }
    }
  }
}
