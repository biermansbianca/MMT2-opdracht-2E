function setup() {
  // put setup code here

  createCanvas(750,750);
  background(240,240,240);
}

function draw() {
  
  // linker object

  noStroke();
  fill(180,180,180);
  rect(100,100,210,80);

  noStroke();
  fill(255,120,0);
  ellipse(315,185,170,170);

  noStroke();
  fill(180,180,180);
  rect(100,180,220,100);

  noStroke();
  fill("white");
  rect(310,180,90,100);

  // rechterobject

  fill(255,120,0);
  ellipse(655,190,170,180);

  noStroke();
  fill(180,180,180);
  rect(450,100,210,180);

// beide puntjes

  stroke('purple'); 
  strokeWeight(8);
  point(310,180);

  stroke("purple");
  strokeWeight(8);
  point(660,190);
}