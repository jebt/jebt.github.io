let canvasWidth = 100;
let canvasHeight = 100;

let xn1;
let yn1;
let fn1;
let xw1;
let yw1;
let fw1;

function setup() {
  let canvasWidth = 800;  // 800
  let canvasHeight = 450;  // 450
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(0);
  translate(width/4, height/4);

  fn1 = (PI/20);
  fw1 = (PI/20)*1.1;

  xn1 = 3*(width/16) + (width/32)*sin(frameCount * fn1);
  yn1 = height/9 + (height/18)*cos(frameCount* fn1);
  xw1 = width/16 + (width/32)*sin(frameCount * fw1);
  yw1 = 2.5*(height/9) + (height/18)*cos(frameCount* fw1);

  strokeWeight(5);
  stroke(0, 255, 255, 100);
  for (let i = 0; i < 500; i++) {
    strokeWeight(6-0.012*i);
    stroke(0, 255-1.5*i, 255-1.5*i, 100-0.75*i);
    point (3*(width/16) + 2*(width/32)*sin((frameCount-i/8) * fn1), 2.5*(height/9) + 2*(height/18)*cos((frameCount-i/8)* fw1));
  }

  strokeWeight(13);
  stroke(191, 127, 255, 50);
  for (let i = 0; i < 50; i++) {
    stroke(191-i*2, 127-i, 255-i*2, 50-i);
    point (3*(width/16) + 2*(width/32)*sin((frameCount-i/8) * fn1), 2.5*(height/9) + 2*(height/18)*cos((frameCount-i/8)* fw1));
  }
}
