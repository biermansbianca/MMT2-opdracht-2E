function setup() {
  // put setup code here
  createCanvas(500,500);
  background(240,240,240);
}

function draw() {
  // put drawing code here

  fill(255,0,0); 
  strokeWeight(0);  
  rect(50,50,50,50);

  fill(255,255,0);
  strokeWeight(0);  
  rect(150,50,50,50);

  fill(0,255,255);
  strokeWeight(0);  
  rect(250,50,50,50);

  fill(0,255,0);
  strokeWeight(0);  
  rect(350,50,50,50);

  // onderste balk

  fill(250,255,255); 
  strokeWeight(1);  
  rect(50,200,50,50);

  fill(150,150,150);
  rect(150,200,50,50);

  fill(100,100,100)
  rect(250,200,50,50);

  fill(80,80,80);
  rect(350,200,50,50);
  
  
}