var r;
var g;
var b;

var bird;
var pipes = [];  
function setup() {
  createCanvas(600, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  
new Audio('https://s3.amazonaws.com/pb_previews/47_8-bits-racing-car-game-theme/47_full_8-bits-racing-car-game-theme_0095.mp3').play()
}

function draw() {
  background(200);
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      bird.speed = 0;
      bird.lift = 0;
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
 
  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  
}
// Move bird 
function mousePressed() {
   {
    bird.up();
    //console.log("SPACE");
  }
}
// Birds function 
function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
    fill(255, 200, 10);
    ellipse(this.x, this.y, 32, 32);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
// pipes function 
function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      background(255, 200, 10);
      fill(0);
      stroke(255);
      strokeWeight(1);
      text("YOU LOSE", 90, 170);
      textSize(50);
      this.speed = 0;
      bird.lift = 0;
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}
