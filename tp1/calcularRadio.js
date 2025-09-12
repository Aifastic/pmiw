function calcularRadio(x1, y1, x2, y2) {
  let distancia= dist(x1, y1, x2, y2);
  let radio = round(distancia)/2;
  return radio;
}
