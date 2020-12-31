function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(1)
  stroke(255);
}

function draw() {
  background(255)
   for (let i = 0; i < 1500; i++) {
    if(i%10 == 0) {
      fill(random(255),random(255),random(255))
    } else {
      fill(255)
    }
    rect(random(1,width), random(1,height),random(5,250), random(5,250))
  }
}
