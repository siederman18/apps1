// for red, green, and blue color values
var r, g, b

function setup() { 
  createCanvas(400, 400);
	//Pick colors randomly 
	r = random(255);
	g = random(255);
	b = random(255);
} 

function draw() { 
  background(120);
	// Draw a circle
	strokeWeight(2)
	stroke(r, g, b);
	fill(r, g, b, 127);
	ellipse(200, 150, 200,150);
}

// When the user clicks the mouse
 function mousePressed() {
   
   // Pick new random color values
   r = random(255);
   g = random(255);
   b = random(255);
   
   
 }

