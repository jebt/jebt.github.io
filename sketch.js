// let inconsolata;
// function preload() {
//   inconsolata = loadFont('Inconsolata-Black.otf');
// }

function setup() {
  createCanvas(innerWidth, innerHeight);
  //createCanvas(100, 100, WEBGL);
//   textFont(inconsolata);
  textSize(width / 50);
  textAlign(CENTER, CENTER);
  frameRate(1)
  stroke(0);
}

function draw() {
  //background(255);
  background(100);
   for (let i = 0; i < 1500; i++) {
    if(i%7 == 0) {
      fill(random(255),random(255),random(255))
    } else {
      fill(255)
    }
    rect(random(1,width), random(1,height),random(5,250), random(5,250))
     
  }
//   let time = millis();
//   rotateX(time / 1000);
//   rotateZ(time / 1234);
text('welkom op roelants thuis pagina!!', width/100, height/100, width/2, height/2);
}
