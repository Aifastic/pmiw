function dibujarDegrade(hueMin, hueMax, radioEsferaMin, radioEsferaMax) {
  ellipseMode(RADIUS);
  colorMode(HSB, 360, 100, 100);

  for (let r = radioEsferaMax; r>radioEsferaMin; r-=2) {
    let hue = map(r, radioEsferaMin, radioEsferaMax, hueMin, hueMax);
    noFill();
    stroke(hue, 65, 85);
    strokeWeight(3);
    ellipse(0, 0, r, r);
    ellipse(0, 0, r, r);
  }
}

function dibujarDegradeRect(coordXRect, anchoRect, altoRect) {
  noStroke();
  for (let i=0; i<20; i++) {
    let alpha = map(i, 0, 20, 255, 0);
    colorMode(RGB, 255);
    fill(255, alpha);
    rect(coordXRect+i*anchoRect/40, 0, anchoRect/40, altoRect);
  }
  for (let i=20; i<40; i++) {
    let alpha = map(i, 20, 40, 0, 255);
    colorMode(RGB, 255);
    fill(0, alpha);
    rect(coordXRect+i*anchoRect/40, 0, anchoRect/40, altoRect);
  }
}
