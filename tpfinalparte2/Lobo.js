class Lobo {
  constructor() {
    this.posX = width/2;
    this.posY = (height/5)*2;
  }
  
  dibujar(anchoLobo, altoLobo) {
    imageMode(CENTER);
    image(imgLobo, this.posX, this.posY, anchoLobo, altoLobo);
  }
  
}
