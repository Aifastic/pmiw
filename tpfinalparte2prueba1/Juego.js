class Juego{
  constructor(){
    this.jugador = new Jugador();
    this.escenario = new Escenario();
    this.escenario = new Lobo();

  }
  
  iniciar(){
    
  }
  
  reiniciar(){
  }
  
  dibujar(){
    this.dibujarEscenario();
    this.lobo.dibujar();
    
  }
  
}
